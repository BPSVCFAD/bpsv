import Link from 'next/link'

const cfeStyles = `
/* ── Hero ── */
.cfe-hero {
  position: relative;
  background: linear-gradient(135deg, rgba(8,42,58,0.96) 0%, rgba(21,91,104,0.93) 55%, rgba(43,164,170,0.86) 100%),
              url("/assets/img/climate.png") center/cover no-repeat;
  padding: 140px 0 80px;
  color: #fff;
}
.cfe-hero .breadcrumb-nav {
  font-size: 13px; letter-spacing: 0.04em;
  margin-bottom: 20px; opacity: 0.85;
}
.cfe-hero .breadcrumb-nav a { color: #80e5e1; text-decoration: none; }
.cfe-hero .breadcrumb-nav a:hover { text-decoration: underline; }
.cfe-hero .breadcrumb-nav .sep { margin: 0 8px; opacity: 0.6; }
.cfe-hero h1 {
  font-size: 48px; font-weight: 700;
  color: #fff; line-height: 1.2; margin-bottom: 16px;
}
.cfe-hero h1 strong { color: #80e5e1; font-weight: 800; }
.cfe-hero p {
  font-size: 17px; color: rgba(255,255,255,0.85);
  line-height: 1.75; max-width: 600px; margin: 0;
}
@media (max-width: 767px) {
  .cfe-hero { padding: 110px 0 60px; }
  .cfe-hero h1 { font-size: 30px; }
}

/* ── Page wrapper ── */
.cfe-page { background: #fff; }

/* ── Intro strip ── */
.cfe-intro {
  background: #f4fbfb;
  padding: 56px 0;
  border-bottom: 1px solid #dff0ef;
}
.cfe-intro-inner {
  display: flex; align-items: flex-start; gap: 40px; flex-wrap: wrap;
}
.cfe-intro-text { flex: 1; min-width: 260px; }
.cfe-intro-text h2 {
  font-size: 26px; font-weight: 700; color: #0d2d3f; margin-bottom: 12px;
}
.cfe-intro-text h2 strong { color: #2FA7A3; }
.cfe-intro-text p {
  font-size: 15px; color: #3d4e5c; line-height: 1.8; margin-bottom: 12px;
}
.cfe-deadline-box {
  flex-shrink: 0;
  background: linear-gradient(135deg, #0d2d3f, #1a5a68);
  border-radius: 16px; padding: 28px 30px;
  color: #fff; text-align: center; min-width: 220px;
}
.cfe-deadline-box .dl-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: #80e5e1; margin-bottom: 10px;
}
.cfe-deadline-box .dl-date {
  font-size: 22px; font-weight: 800; color: #fff; line-height: 1.2;
  margin-bottom: 6px;
}
.cfe-deadline-box .dl-time {
  font-size: 13px; color: rgba(255,255,255,0.7);
  margin-bottom: 18px;
}
.cfe-deadline-box a {
  display: inline-block;
  background: #2FA7A3; color: #fff;
  border-radius: 999px; padding: 10px 24px;
  font-size: 13px; font-weight: 700;
  text-decoration: none; transition: background 0.2s;
  font-family: "Poppins", sans-serif;
}
.cfe-deadline-box a:hover { background: #1d8a87; color: #fff; text-decoration: none; }

/* ── Role navigation pills ── */
.cfe-nav {
  background: #fff;
  padding: 32px 0;
  border-bottom: 1px solid #e8f4f3;
  position: sticky; top: 72px; z-index: 10;
}
.cfe-nav-pills {
  display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
}
.cfe-nav-pill {
  display: inline-block;
  background: #f4fbfb; border: 1.5px solid #b8e8e5;
  border-radius: 999px; padding: 8px 18px;
  font-size: 13px; font-weight: 600; color: #0d2d3f;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.cfe-nav-pill:hover {
  background: #2FA7A3; color: #fff; border-color: #2FA7A3; text-decoration: none;
}

/* ── Section label ── */
.ab-label {
  display: flex; align-items: center; gap: 12px; margin-bottom: 10px;
}
.ab-label .line {
  display: inline-block; width: 32px; height: 2px;
  background: #2FA7A3; border-radius: 2px;
}
.ab-label .text {
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase; color: #2FA7A3;
}

/* ── Role cards ── */
.cfe-roles { padding: 64px 0; }
.cfe-role-card {
  background: #fff;
  border: 1px solid #dff0ef;
  border-left: 5px solid #2FA7A3;
  border-radius: 0 16px 16px 0;
  padding: 36px 36px 36px 32px;
  margin-bottom: 40px;
  transition: box-shadow 0.25s;
}
.cfe-role-card:hover {
  box-shadow: 0 12px 36px rgba(47,167,163,0.12);
}
.cfe-role-card h3 {
  font-size: 22px; font-weight: 700; color: #0d2d3f;
  margin-bottom: 4px;
}
.cfe-role-card .role-tag {
  display: inline-block;
  background: #e8f8f7; color: #1a7a7a;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 14px; border-radius: 999px;
  margin-bottom: 18px;
}
.cfe-role-card p {
  font-size: 14.5px; color: #3d4e5c; line-height: 1.8; margin-bottom: 14px;
}
.cfe-role-card p:last-child { margin-bottom: 0; }
.cfe-role-card .role-section-label {
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #2FA7A3; margin-bottom: 6px; margin-top: 18px;
}

/* ── Application process ── */
.cfe-apply {
  background: linear-gradient(135deg, #0d2d3f 0%, #1a5a68 100%);
  padding: 72px 0; color: #fff;
}
.cfe-apply h2 {
  font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 16px;
}
.cfe-apply h2 strong { color: #80e5e1; }
.apply-steps {
  list-style: none; padding: 0; margin: 24px 0 32px;
}
.apply-steps li {
  display: flex; align-items: flex-start; gap: 16px;
  font-size: 15px; color: rgba(255,255,255,0.85);
  line-height: 1.65; margin-bottom: 16px;
}
.apply-step-num {
  flex-shrink: 0;
  width: 32px; height: 32px;
  background: #2FA7A3; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
  margin-top: 2px;
}
.apply-note {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px; padding: 20px 24px;
  font-size: 13.5px; color: rgba(255,255,255,0.75);
  line-height: 1.7; margin-bottom: 28px;
}
.apply-email-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: #2FA7A3; color: #fff;
  border-radius: 999px; padding: 13px 34px;
  font-size: 14px; font-weight: 700;
  text-decoration: none; transition: background 0.22s;
  font-family: "Poppins", sans-serif;
}
.apply-email-btn:hover { background: #1d8a87; color: #fff; text-decoration: none; }
`

export const metadata = {
  title: 'Call for Practice Leads — BPSV',
  description: 'BPSV invites experienced practitioners to lead advisory and implementation work across Climate, Education, Ecotourism, Public Health, and Equitable Economies.',
  openGraph: {
    title: 'Call for Practice Leads — Beyond Purpose Social Ventures',
    description: 'BPSV invites experienced practitioners to lead advisory and implementation work across Climate, Education, Ecotourism, Public Health, and Equitable Economies.',
    url: 'https://beyondpurpose.in/practice-areas/call-for-experts',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/empower.png', width: 1200, height: 630, alt: 'Call for Practice Leads — BPSV' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call for Practice Leads — Beyond Purpose Social Ventures',
    description: 'BPSV invites experienced practitioners to lead advisory and implementation work across Climate, Education, Ecotourism, Public Health, and Equitable Economies.',
    images: ['/assets/img/empower.png'],
  },
}

const roles = [
  {
    id: 'climate',
    title: 'Practice Lead – Climate and Environment',
    tag: 'Climate & Environment',
    description: 'Lead advisory and implementation support for climate resilience, renewable energy, sustainable livelihoods, natural resource management, and environmental sustainability initiatives. The practice focuses on designing scalable solutions that strengthen communities while advancing climate and environmental outcomes.',
    deliverables: 'Deliverables will vary across assignments and projects. Responsibilities may include stakeholder consultations, advisory and consulting services, research and studies, policy advocacy and dissemination, partnership development, and overall project management.',
    qualifications: 'Applicants should possess 10–15 years of professional experience in climate, environment, sustainability, renewable energy, or related sectors. Candidates should hold qualifications from leading national or international institutions and have demonstrated experience working with Central and State Government programs. Experience managing or advising projects supported by bilateral and multilateral agencies is strongly preferred.',
  },
  {
    id: 'education',
    title: 'Practice Lead – Education',
    tag: 'Education',
    description: 'Lead engagements focused on foundational learning, adolescent and youth development, life skills, education systems strengthening, and education innovation. The practice supports governments, nonprofits, and development partners in improving learning outcomes and expanding educational opportunities.',
    deliverables: 'Deliverables will vary across assignments and projects. Responsibilities may include stakeholder consultations, advisory and consulting services, research and studies, policy advocacy and dissemination, partnership development, and overall project management.',
    qualifications: 'Applicants should possess 10–15 years of professional experience in education, youth development, learning systems, or related fields. Candidates should hold qualifications from leading national or international institutions and have significant experience working with Central and State Government education initiatives. Experience with bilateral and multilateral donor-funded programs is preferred.',
  },
  {
    id: 'ecotourism',
    title: 'Practice Lead – Ecotourism',
    tag: 'Ecotourism',
    description: 'Lead initiatives that promote sustainable tourism, community-owned tourism enterprises, destination development, conservation-linked livelihoods, and local economic growth. The practice supports destinations in balancing economic opportunities with environmental stewardship.',
    deliverables: 'Deliverables will vary across assignments and projects. Responsibilities may include stakeholder consultations, advisory and consulting services, research and studies, policy advocacy and dissemination, partnership development, and overall project management.',
    qualifications: 'Applicants should possess 10–15 years of professional experience in tourism, ecotourism, destination management, conservation, hospitality, or related sectors. Candidates should hold qualifications from leading national or international institutions and have experience working with government tourism and rural development programs. Prior engagement with bilateral and multilateral development agencies is desirable.',
  },
  {
    id: 'public-health',
    title: 'Practice Lead – Public Health',
    tag: 'Public Health',
    description: 'Lead advisory and implementation efforts in public health systems, community health, nutrition, maternal and child health, frontline workforce strengthening, and health program innovation. The practice works with public institutions and development partners to improve health outcomes at scale.',
    deliverables: 'Deliverables will vary across assignments and projects. Responsibilities may include stakeholder consultations, advisory and consulting services, research and studies, policy advocacy and dissemination, partnership development, and overall project management.',
    qualifications: 'Applicants should possess 10–15 years of professional experience in public health, healthcare systems, nutrition, or related fields. Candidates should hold qualifications from leading national or international institutions and have worked extensively with Central and State Government health programs. Experience with bilateral and multilateral donor-supported health initiatives is highly desirable.',
  },
  {
    id: 'equitable-economies',
    title: 'Practice Lead – Equitable Economies',
    tag: 'Equitable Economies',
    description: 'Lead programs that strengthen livelihoods, entrepreneurship, enterprise development, value chains, market systems, and inclusive economic growth. The practice focuses on creating sustainable economic opportunities for underserved communities and regions.',
    deliverables: 'Deliverables will vary across assignments and projects. Responsibilities may include stakeholder consultations, advisory and consulting services, research and studies, policy advocacy and dissemination, partnership development, and overall project management.',
    qualifications: 'Applicants should possess 10–15 years of professional experience in economic development, livelihoods, enterprise promotion, market systems, rural development, or related sectors. Candidates should hold qualifications from leading national or international institutions and have experience working with Central and State Government development programs. Experience with bilateral and multilateral donor-funded initiatives is preferred.',
  },
]

export default function CallForExperts() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cfeStyles }} />

      {/* Hero */}
      <section className="cfe-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/practice-areas">Practice Areas</Link>
            <span className="sep">/</span>
            <span>Call for Practice Leads</span>
          </div>
          <h1>Call for <strong>Practice Leads</strong></h1>
          <p>
            We are building a network of expert practitioners to lead advisory and implementation
            work across our core practice areas. Applications close 22 June 2026.
          </p>
        </div>
      </section>

      <div className="cfe-page">

        {/* Intro + deadline */}
        <section className="cfe-intro">
          <div className="container">
            <div className="cfe-intro-inner">
              <div className="cfe-intro-text">
                <div className="ab-label">
                  <span className="line"></span>
                  <span className="text">About This Call</span>
                </div>
                <h2>Shaping the Future of <strong>Development Practice</strong></h2>
                <p>
                  Beyond Purpose Social Ventures (BPSV) is inviting experienced development
                  professionals to join as Practice Leads across five strategic areas. Practice Leads
                  will anchor our advisory, consulting, and implementation offerings — driving quality,
                  sector insight, and partnerships.
                </p>
                <p>
                  Roles are open to independent consultants, academic practitioners, and full-time
                  professionals seeking flexible, impactful engagement with a growing social enterprise.
                </p>
              </div>
              <div className="cfe-deadline-box">
                <div className="dl-label">Application Deadline</div>
                <div className="dl-date">22 June 2026</div>
                <div className="dl-time">6:00 PM IST</div>
                <a href="mailto:info@beyondpurpose.in?subject=Application – Practice Lead">
                  <i className="fa fa-paper-plane" style={{ marginRight: '7px' }}></i>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Role nav pills */}
        <div className="cfe-nav">
          <div className="container">
            <div className="cfe-nav-pills">
              <a href="#climate" className="cfe-nav-pill">Climate &amp; Environment</a>
              <a href="#education" className="cfe-nav-pill">Education</a>
              <a href="#ecotourism" className="cfe-nav-pill">Ecotourism</a>
              <a href="#public-health" className="cfe-nav-pill">Public Health</a>
              <a href="#equitable-economies" className="cfe-nav-pill">Equitable Economies</a>
            </div>
          </div>
        </div>

        {/* Role listings */}
        <section className="cfe-roles">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
              <div className="ab-label" style={{ justifyContent: 'center' }}>
                <span className="line"></span>
                <span className="text">Open Roles</span>
                <span className="line"></span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0d2d3f', marginBottom: '12px' }}>
                Five Roles, One <strong style={{ color: '#2FA7A3' }}>Shared Purpose</strong>
              </h2>
              <p style={{ fontSize: '15px', color: '#4a6070', lineHeight: '1.8', marginBottom: 0 }}>
                Each Practice Lead will bring sector expertise to a defined area while contributing
                to a collaborative, cross-sector approach to development.
              </p>
            </div>

            {roles.map(role => (
              <div key={role.id} id={role.id} className="cfe-role-card">
                <h3>{role.title}</h3>
                <span className="role-tag">{role.tag}</span>
                <p>{role.description}</p>
                <div className="role-section-label">Responsibilities</div>
                <p>{role.deliverables}</p>
                <div className="role-section-label">Qualifications</div>
                <p>{role.qualifications}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application process */}
        <section className="cfe-apply">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="ab-label">
                  <span className="line" style={{ background: '#80e5e1' }}></span>
                  <span className="text" style={{ color: '#80e5e1' }}>How to Apply</span>
                </div>
                <h2>Application <strong>Process</strong></h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.75', marginBottom: '8px' }}>
                  Interested candidates should submit the following:
                </p>
                <ul className="apply-steps">
                  <li>
                    <div className="apply-step-num">1</div>
                    <span>Detailed <strong>Curriculum Vitae</strong> (PDF format)</span>
                  </li>
                  <li>
                    <div className="apply-step-num">2</div>
                    <span>
                      <strong>Cover letter</strong> in the body of the email highlighting relevant
                      experience, sector expertise, and suitability for the role
                    </span>
                  </li>
                </ul>
                <div className="apply-note">
                  <i className="fa fa-info-circle" style={{ color: '#80e5e1', marginRight: '8px' }}></i>
                  Applications must be submitted by <strong>22 June 2026, 6:00 PM IST</strong>.
                  Only shortlisted candidates will be contacted.
                </div>
                <a href="mailto:info@beyondpurpose.in?subject=Application – Practice Lead" className="apply-email-btn">
                  <i className="fa fa-envelope"></i>
                  Send to info@beyondpurpose.in
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
