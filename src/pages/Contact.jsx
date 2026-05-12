import { useState } from 'react'
import { Link } from 'react-router-dom'

const CONTACT_EMAIL = 'info@beyondpurpose.in'

function mailtoFallback(formData) {
  const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`)
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nOrganization: ${formData.organization || 'N/A'}\nInterest: ${formData.interest || 'N/A'}\n\nMessage:\n${formData.comments}`
  )
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

const contactStyles = `
.contact-hero {
   position: relative;
   background: linear-gradient(135deg, rgba(8,42,58,0.95) 0%, rgba(21,91,104,0.92) 55%, rgba(43,164,170,0.85) 100%),
               url("./assets/img/empower.png") center/cover no-repeat;
   padding: 140px 0 80px;
   color: #fff;
}
.contact-hero .breadcrumb-nav {
   font-size: 13px; letter-spacing: 0.04em;
   margin-bottom: 20px; opacity: 0.85;
}
.contact-hero .breadcrumb-nav a { color: #80e5e1; text-decoration: none; }
.contact-hero .breadcrumb-nav a:hover { text-decoration: underline; }
.contact-hero .breadcrumb-nav .sep { margin: 0 8px; opacity: 0.6; }
.contact-hero h1 {
   font-size: 48px; font-weight: 700;
   color: #fff; line-height: 1.2; margin-bottom: 16px;
}
.contact-hero h1 strong { color: #80e5e1; font-weight: 800; }
.contact-hero p {
   font-size: 17px; color: rgba(255,255,255,0.85);
   line-height: 1.75; max-width: 580px; margin: 0;
}
@media (max-width: 767px) {
   .contact-hero { padding: 110px 0 60px; }
   .contact-hero h1 { font-size: 32px; }
}

.contact-page { padding: 72px 0 80px; background: #f4fbfb; }

.info-cards { margin-bottom: 48px; }
.info-card {
   background: #fff;
   border: 1px solid #dff0ef;
   border-radius: 16px;
   padding: 32px 24px;
   text-align: center;
   height: 100%;
   transition: box-shadow 0.25s, transform 0.25s;
}
.info-card:hover {
   box-shadow: 0 10px 32px rgba(47,167,163,0.13);
   transform: translateY(-4px);
}
.info-card .ic-icon {
   width: 54px; height: 54px;
   background: linear-gradient(135deg, #1f8f95, #2FA7A3);
   border-radius: 50%;
   display: flex; align-items: center; justify-content: center;
   margin: 0 auto 18px;
   font-size: 20px; color: #fff;
}
.info-card h4 {
   font-size: 14px; font-weight: 700;
   text-transform: uppercase; letter-spacing: 0.08em;
   color: #0d2d3f; margin-bottom: 10px;
}
.info-card p, .info-card a {
   font-size: 14px; color: #4a6070;
   line-height: 1.7; text-decoration: none; margin: 0;
}
.info-card a:hover { color: #2FA7A3; }

.form-card {
   background: #fff;
   border: 1px solid #dff0ef;
   border-radius: 20px;
   padding: 44px 40px;
   box-shadow: 0 4px 28px rgba(13,45,63,0.07);
}
.form-card h2 {
   font-size: 28px; font-weight: 700;
   color: #0d2d3f; margin-bottom: 8px;
}
.form-card h2 strong { color: #2FA7A3; }
.form-card > p {
   font-size: 15px; color: #556677;
   margin-bottom: 32px; line-height: 1.7;
}
.cf-row { margin-bottom: 18px; }
.cf-input-wrap { position: relative; }
.cf-icon {
   position: absolute; left: 14px; top: 50%;
   transform: translateY(-50%);
   color: #2FA7A3; font-size: 14px; z-index: 1;
}
.cf-textarea-wrap .cf-icon { top: 16px; transform: none; }
.form-card .form-control {
   border: 1.5px solid #d8eeec;
   border-radius: 10px;
   padding: 12px 14px 12px 40px;
   font-size: 14px; color: #3d4e5c;
   background: #fafefe;
   box-shadow: none;
   transition: border-color 0.2s;
   height: auto;
}
.form-card .form-control:focus {
   border-color: #2FA7A3;
   outline: none;
   background: #fff;
}
.form-card textarea.form-control {
   min-height: 130px; resize: vertical;
}
.form-card select.form-control { padding-left: 40px; }
.form-card button[type="submit"] {
   background: #2FA7A3; color: #fff;
   border: none; border-radius: 999px;
   padding: 13px 40px; font-size: 14px;
   font-weight: 700; cursor: pointer;
   font-family: "Poppins", sans-serif;
   letter-spacing: 0.04em;
   transition: background 0.22s;
   width: 100%;
}
.form-card button[type="submit"]:hover { background: #1d8a87; }
.form-card button[type="submit"]:disabled { opacity: 0.7; cursor: not-allowed; }
.form-card button[type="submit"] i { margin-right: 8px; }
.alert-msg { margin-top: 12px; font-size: 14px; }
.alert-msg.success { color: #2FA7A3; }
.alert-msg.error   { color: #e05555; }

.contact-sidebar { padding-left: 30px; }
.sidebar-info-block {
   background: #fff;
   border: 1px solid #dff0ef;
   border-radius: 16px;
   padding: 28px 24px;
   margin-bottom: 24px;
}
.sidebar-info-block h4 {
   font-size: 13px; font-weight: 700;
   text-transform: uppercase; letter-spacing: 0.09em;
   color: #2FA7A3; margin-bottom: 18px;
}
.sib-row {
   display: flex; align-items: flex-start; gap: 12px;
   margin-bottom: 16px; font-size: 13.5px; color: #3d4e5c;
   line-height: 1.6;
}
.sib-row:last-child { margin-bottom: 0; }
.sib-row i { color: #2FA7A3; margin-top: 2px; flex-shrink: 0; width: 16px; }
.sib-row a { color: #3d4e5c; text-decoration: none; }
.sib-row a:hover { color: #2FA7A3; }

@media (max-width: 991px) {
   .contact-sidebar { padding-left: 0; margin-top: 32px; }
   .form-card { padding: 32px 24px; }
}
`

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const payload = new FormData()
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v))
      const res = await fetch('/contact-handler.php', { method: 'POST', body: payload })
      if (res.ok) {
        const text = await res.text()
        if (text.includes('alert-success')) {
          setFormStatus('success')
          setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
        } else {
          setFormStatus('error')
        }
      } else {
        // PHP not available (e.g. GitHub Pages) — open email client
        mailtoFallback(formData)
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
      }
    } catch {
      mailtoFallback(formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
    }
  }

  return (
    <>
      <style>{contactStyles}</style>

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <h1>Get in <strong>Touch</strong></h1>
          <p>
            Reach out to BPSV for partnership opportunities, consulting engagements,
            or to learn more about our work in DRE and rural development.
          </p>
        </div>
      </section>

      {/* Page Body */}
      <div className="contact-page">
        <div className="container">

          {/* Info Cards Row */}
          <div className="info-cards">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="info-card">
                  <div className="ic-icon"><i className="fa fa-envelope"></i></div>
                  <h4>Email Us</h4>
                  <a href="mailto:info@beyondpurpose.in">info@beyondpurpose.in</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="info-card">
                  <div className="ic-icon"><i className="fa fa-phone"></i></div>
                  <h4>Call Us</h4>
                  <a href="tel:+916009212278">+91 60092 12278</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="info-card">
                  <div className="ic-icon"><i className="fa fa-globe"></i></div>
                  <h4>Website</h4>
                  <a href="https://www.beyondpurpose.in" target="_blank" rel="noopener">www.beyondpurpose.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form + Sidebar */}
          <div className="row">

            {/* Contact Form */}
            <div className="col-md-8">
              <div className="form-card">
                <h2>Send Us a <strong>Message</strong></h2>
                <p>Interested in collaboration, funding opportunities, or learning more about our work?</p>

                <form onSubmit={handleSubmit} className="contact-form" id="contactForm">
                  <div className="row cf-row">
                    <div className="col-md-12">
                      <div className="cf-input-wrap">
                        <span className="cf-icon"><i className="fa fa-user"></i></span>
                        <input className="form-control" name="name" placeholder="Full Name *" type="text" value={formData.name} onChange={handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="row cf-row">
                    <div className="col-md-6">
                      <div className="cf-input-wrap">
                        <span className="cf-icon"><i className="fa fa-envelope"></i></span>
                        <input className="form-control" name="email" placeholder="Email Address *" type="email" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cf-input-wrap">
                        <span className="cf-icon"><i className="fa fa-phone"></i></span>
                        <input className="form-control" name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row cf-row">
                    <div className="col-md-12">
                      <div className="cf-input-wrap">
                        <span className="cf-icon"><i className="fa fa-building"></i></span>
                        <input className="form-control" name="organization" placeholder="Organization / Company" type="text" value={formData.organization} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row cf-row">
                    <div className="col-md-12">
                      <div className="cf-input-wrap cf-select-wrap">
                        <span className="cf-icon"><i className="fa fa-tag"></i></span>
                        <select className="form-control" name="interest" value={formData.interest} onChange={handleChange}>
                          <option value="">Select Interest Area</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="funding">Funding / Investment</option>
                          <option value="consulting">Consulting Services</option>
                          <option value="volunteer">Volunteer / Internship</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row cf-row">
                    <div className="col-md-12">
                      <div className="cf-input-wrap cf-textarea-wrap">
                        <span className="cf-icon"><i className="fa fa-pencil"></i></span>
                        <textarea className="form-control" name="comments" placeholder="Tell us about your inquiry *" value={formData.comments} onChange={handleChange} required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row cf-row">
                    <div className="col-md-12">
                      <button type="submit" disabled={formStatus === 'sending'}>
                        <i className="fa fa-paper-plane"></i> {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {formStatus === 'success' && (
                      <div className="alert-msg success">
                        Thank you! Your message has been sent successfully. We'll be in touch soon.
                      </div>
                    )}
                    {formStatus === 'error' && (
                      <div className="alert-msg error">
                        Something went wrong. Please try again or email us at info@beyondpurpose.in
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <div className="contact-sidebar">

                <div className="sidebar-info-block">
                  <h4>Contact Information</h4>
                  <div className="sib-row">
                    <i className="fa fa-envelope"></i>
                    <div><a href="mailto:info@beyondpurpose.in">info@beyondpurpose.in</a></div>
                  </div>
                  <div className="sib-row">
                    <i className="fa fa-phone"></i>
                    <div><a href="tel:+916009212278">+91 60092 12278</a></div>
                  </div>
                  <div className="sib-row">
                    <i className="fa fa-globe"></i>
                    <div><a href="https://www.beyondpurpose.in" target="_blank" rel="noopener">www.beyondpurpose.in</a></div>
                  </div>
                </div>

                <div className="sidebar-info-block">
                  <h4>Our Work Areas</h4>
                  <div className="sib-row"><i className="fa fa-bolt"></i><div>Distributed Renewable Energy (DRE)</div></div>
                  <div className="sib-row"><i className="fa fa-leaf"></i><div>Rural Agribusiness &amp; Enterprise Development</div></div>
                  <div className="sib-row"><i className="fa fa-users"></i><div>Women Empowerment &amp; Incubation</div></div>
                  <div className="sib-row"><i className="fa fa-cloud"></i><div>Climate Adaptation &amp; Resilience</div></div>
                </div>

                <div className="sidebar-info-block">
                  <h4>Geographies</h4>
                  <div className="sib-row"><i className="fa fa-map-marker"></i><div>Assam, Nagaland, Meghalaya</div></div>
                  <div className="sib-row"><i className="fa fa-map-marker"></i><div>Karnataka, Odisha</div></div>
                  <div className="sib-row"><i className="fa fa-map-marker"></i><div>Northeast India &amp; beyond</div></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
