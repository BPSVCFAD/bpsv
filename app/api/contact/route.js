import nodemailer from 'nodemailer'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Write submission to a .txt file.
// On Vercel the filesystem is read-only except /tmp (ephemeral but always written).
// Locally (XAMPP) it lands in <project-root>/submissions/.
function saveSubmission({ name, email, phone, organization, interest, comments }) {
  try {
    const dir = process.env.VERCEL
      ? '/tmp/bpsv-submissions'
      : join(process.cwd(), 'submissions')

    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

    const now = new Date()
    const stamp = now.toISOString().replace(/[:.]/g, '-')
    const safe  = email.replace(/[^a-zA-Z0-9@._-]/g, '_')
    const file  = join(dir, `${stamp}_${safe}.txt`)

    const lines = [
      `Submitted : ${now.toUTCString()}`,
      `Name      : ${name}`,
      `Email     : ${email}`,
      `Phone     : ${phone || 'N/A'}`,
      `Org       : ${organization}`,
      `Interest  : ${interest}`,
      ``,
      `Message`,
      `-------`,
      comments,
      ``,
    ].join('\n')

    writeFileSync(file, lines, 'utf8')
    console.log('Submission saved:', file)
  } catch (err) {
    console.error('Could not save submission file:', err.message)
  }
}

export async function POST(request) {
  let formData
  try {
    formData = await request.formData()
  } catch {
    return Response.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const name         = (formData.get('name') || '').trim()
  const email        = (formData.get('email') || '').trim()
  const phone        = (formData.get('phone') || '').trim()
  const comments     = (formData.get('comments') || '').trim()
  const interest     = (formData.get('interest') || '').trim() || 'Not specified'
  const organization = (formData.get('organization') || '').trim() || 'Not specified'

  if (!name)     return Response.json({ error: 'Name is required' }, { status: 400 })
  if (!email)    return Response.json({ error: 'Email is required' }, { status: 400 })
  if (!comments) return Response.json({ error: 'Message is required' }, { status: 400 })

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Always save to disk first — even if SMTP fails
  saveSubmission({ name, email, phone, organization, interest, comments })

  const smtpHost   = process.env.BPSV_SMTP_HOST   || 'smtp.gmail.com'
  const smtpPort   = parseInt(process.env.BPSV_SMTP_PORT   || '465')
  const smtpSecure = (process.env.BPSV_SMTP_SECURE || 'ssl') === 'ssl'
  const smtpUser   = process.env.BPSV_SMTP_USER   || ''
  const smtpPass   = process.env.BPSV_SMTP_PASS   || ''
  const recipient  = process.env.BPSV_RECIPIENT_EMAIL || smtpUser || 'info@beyondpurpose.in'

  if (!smtpUser || !smtpPass) {
    console.error('SMTP not configured. Submission from:', name, email)
    return Response.json({ success: true })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const adminHtml = `
<html><body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:24px 0;">
<tr><td align="center">
<table width="680" cellpadding="0" cellspacing="0" style="max-width:680px;width:100%;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e7ebf3;">
<tr><td style="background:#0f172a;color:#fff;padding:18px 24px;">
  <h2 style="margin:0;font-size:20px;">New Enquiry Received</h2>
  <p style="margin:6px 0 0;font-size:13px;opacity:.9;">BPSV Website Contact Form</p>
</td></tr>
<tr><td style="padding:24px;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:10px 0;border-bottom:1px solid #eef2f7;width:180px;color:#475569;font-size:13px;"><strong>Name</strong></td><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;">${name}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#475569;font-size:13px;"><strong>Email</strong></td><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;">${email}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#475569;font-size:13px;"><strong>Phone</strong></td><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;">${phone || 'N/A'}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#475569;font-size:13px;"><strong>Interest</strong></td><td style="padding:10px 0;border-bottom:1px solid #eef2f7;color:#111827;font-size:14px;">${interest}</td></tr>
    <tr><td style="padding:10px 0;color:#475569;font-size:13px;"><strong>Organization</strong></td><td style="padding:10px 0;color:#111827;font-size:14px;">${organization}</td></tr>
  </table>
  <div style="margin-top:18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;">
    <p style="margin:0 0 8px;color:#334155;font-size:13px;"><strong>Message</strong></p>
    <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${comments.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>
</td></tr>
<tr><td style="padding:14px 24px;background:#f8fafc;color:#64748b;font-size:12px;">This email was generated automatically from the BPSV website enquiry form.</td></tr>
</table>
</td></tr>
</table>
</body></html>`

  const receiptHtml = `
<html><body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e7ebf3;">
<tr><td style="background:linear-gradient(135deg,#0d2d3f 0%,#1a5a68 100%);padding:32px;text-align:center;">
  <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Beyond Purpose Social Ventures</h1>
</td></tr>
<tr><td style="padding:36px 32px 28px;">
  <p style="margin:0 0 14px;font-size:17px;font-weight:700;color:#0d2d3f;">Hi ${name},</p>
  <p style="margin:0 0 18px;font-size:15px;color:#3d4e5c;line-height:1.75;">Thank you for reaching out to <strong>Beyond Purpose Social Ventures</strong>. We have received your message and our team will review it shortly.</p>
  <p style="margin:0 0 28px;font-size:15px;color:#3d4e5c;line-height:1.75;">We typically respond within <strong>1-2 business days</strong>. For urgent matters, call us at <strong>+91 60092 12278</strong>.</p>
  <p style="margin:0;font-size:14px;color:#3d4e5c;">Warm regards,<br><strong style="color:#0d2d3f;">The BPSV Team</strong></p>
</td></tr>
<tr><td style="background:#f8fafc;border-top:1px solid #e7ebf3;padding:16px 32px;text-align:center;">
  <p style="margin:0;font-size:12px;color:#94a3b8;">Beyond Purpose Social Ventures &nbsp;|&nbsp; <a href="mailto:info@beyondpurpose.in" style="color:#2FA7A3;text-decoration:none;">info@beyondpurpose.in</a> &nbsp;|&nbsp; +91 60092 12278</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`

  try {
    // Email 1 — admin notification to info@beyondpurpose.in
    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: email,
      subject: 'Contact Form – BPSV',
      html: adminHtml,
      text: `New enquiry from ${name} (${email})\nPhone: ${phone}\nInterest: ${interest}\nOrganization: ${organization}\n\n${comments}`,
    })

    // Email 2 — receipt to the person who submitted
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: 'Thank You for Contacting BPSV – We will be in Touch Soon!',
      html: receiptHtml,
      text: `Hi ${name},\n\nThank you for reaching out to Beyond Purpose Social Ventures. We have received your message and will respond within 1-2 business days.\n\nWarm regards,\nThe BPSV Team`,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return Response.json({ success: true })
  }
}
