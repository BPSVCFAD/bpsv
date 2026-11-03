import Link from 'next/link'

const practiceStyles = `
/* ── Hero ── */
.pa-hero {
  position: relative;
  background: linear-gradient(135deg, rgba(8,42,58,0.95) 0%, rgba(21,91,104,0.92) 55%, rgba(43,164,170,0.85) 100%),
              url("/assets/img/empower.png") center/cover no-repeat;
  padding: 140px 0 80px;
  color: #fff;
}
.pa-hero .breadcrumb-nav {
  font-size: 13px; letter-spacing: 0.04em;
  margin-bottom: 20px; opacity: 0.85;
}
.pa-hero .breadcrumb-nav a { color: #80e5e1; text-decoration: none; }
.pa-hero .breadcrumb-nav a:hover { text-decoration: underline; }
.pa-hero .breadcrumb-nav .sep { margin: 0 8px; opacity: 0.6; }
.pa-hero h1 {
  font-size: 48px; font-weight: 700;
  color: #fff; line-height: 1.2; margin-bottom: 16px;
}
.pa-hero h1 strong { color: #80e5e1; font-weight: 800; }
.pa-hero p {
  font-size: 17px; color: rgba(255,255,255,0.85);
  line-height: 1.75; max-width: 600px; margin: 0;
}
@media (max-width: 767px) {
  .pa-hero { padding: 110px 0 60px; }
  .pa-hero h1 { font-size: 32px; }
}

/* ── Overview pills ── */
.pa-overview {
  padding: 64px 0 48px;
  background: #f4fbfb;
}
.pa-pills {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 14px; margin-top: 36px;
}
.pa-pill {
  display: flex; align-items: center; gap: 10px;
  background: #fff; border: 1.5px solid #b8e8e5;
  border-radius: 999px; padding: 10px 22px;
  font-size: 14px; font-weight: 600; color: #0d2d3f;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  cursor: pointer;
}
.pa-pill i { color: #2FA7A3; font-size: 16px; }
.pa-pill:hover {
  background: #2FA7A3; color: #fff; border-color: #2FA7A3;
  transform: translateY(-2px); text-decoration: none;
}
.pa-pill:hover i { color: #fff; }

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

/* ── Practice area sections ── */
.pa-section {
  padding: 80px 0;
  border-bottom: 1px solid #e8f4f3;
}
.pa-section:last-of-type { border-bottom: none; }
.pa-section.pa-alt { background: #f4fbfb; }

.pa-img-wrap {
  border-radius: 20px; overflow: hidden;
  box-shadow: 0 16px 48px rgba(13,45,63,0.13);
  height: 380px;
}
.pa-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}

.pa-text { padding-left: 44px; }
.pa-text.pa-text-left { padding-left: 0; padding-right: 44px; }
@media (max-width: 991px) {
  .pa-text { padding-left: 0; margin-top: 36px; }
  .pa-text.pa-text-left { padding-right: 0; }
  .pa-img-wrap { height: 260px; }
}

.pa-text h2 {
  font-size: 30px; font-weight: 700;
  color: #0d2d3f; margin-bottom: 10px; line-height: 1.25;
}
.pa-text h2 strong { color: #2FA7A3; }
.pa-substatements {
  margin-bottom: 22px;
}
.pa-substatements p {
  font-size: 15px; color: #3d6070; line-height: 1.7;
  margin-bottom: 4px; font-style: italic;
}

.pa-bullets {
  list-style: none; padding: 0; margin: 0 0 24px;
}
.pa-bullets li {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 14.5px; color: #3d4e5c; line-height: 1.65;
  margin-bottom: 10px;
}
.pa-bullets li::before {
  content: "";
  display: inline-block; flex-shrink: 0;
  width: 8px; height: 8px;
  background: #2FA7A3; border-radius: 50%;
  margin-top: 6px;
}

/* ── Call for Proposals CTA ── */
.pa-cta {
  background: linear-gradient(135deg, #0d2d3f 0%, #1a5a68 100%);
  padding: 72px 0; text-align: center; color: #fff;
}
.pa-cta h2 {
  font-size: 30px; font-weight: 700; color: #fff; margin-bottom: 14px;
}
.pa-cta h2 strong { color: #80e5e1; }
.pa-cta p {
  font-size: 15.5px; color: rgba(255,255,255,0.8);
  line-height: 1.75; max-width: 540px;
  margin: 0 auto 28px;
}
.cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.cta-btn-primary {
  background: #2FA7A3; color: #fff;
  border: none; border-radius: 999px;
  padding: 13px 34px; font-size: 14px;
  font-weight: 700; text-decoration: none;
  transition: background 0.22s;
  font-family: "Poppins", sans-serif;
}
.cta-btn-primary:hover { background: #1d8a87; color: #fff; text-decoration: none; }
.cta-btn-outline {
  background: transparent; color: #fff;
  border: 2px solid rgba(255,255,255,0.5); border-radius: 999px;
  padding: 12px 34px; font-size: 14px;
  font-weight: 700; text-decoration: none;
  transition: background 0.22s, border-color 0.22s;
  font-family: "Poppins", sans-serif;
}
.cta-btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; color: #fff; text-decoration: none; }
`

export const metadata = {
  title: 'Practice Areas — BPSV',
  description: "Explore BPSV's practice areas: Climate and Environment, Education, Ecotourism, Equitable Economies, and Health and Social Care.",
  openGraph: {
    title: 'Practice Areas — Beyond Purpose Social Ventures',
    description: "Explore BPSV's practice areas: Climate and Environment, Education, Ecotourism, Equitable Economies, and Health and Social Care.",
    url: 'https://beyondpurpose.in/practice-areas',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/empower.png', width: 1200, height: 630, alt: 'BPSV Practice Areas' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practice Areas — Beyond Purpose Social Ventures',
    description: "Explore BPSV's practice areas: Climate and Environment, Education, Ecotourism, Equitable Economies, and Health and Social Care.",
    images: ['/assets/img/empower.png'],
  },
}

const practiceAreas = [
  {
    id: 'climate',
    title: 'Climate and',
    titleStrong: 'Environment',
    label: 'Practice Area',
    image: '/assets/img/climate.png',
    imageAlt: 'Climate and Environment',
    statements: [
      'Accelerating climate resilience through community-led innovation.',
      'Building sustainable solutions for people, livelihoods, and ecosystems.',
    ],
    bullets: [
      'Climate adaptation strategies',
      'Renewable energy livelihoods',
      'Green enterprise development',
      'Environmental impact measurement',
    ],
    icon: 'fa-leaf',
  },
  {
    id: 'education',
    title: '',
    titleStrong: 'Education',
    label: 'Practice Area',
    image: '/assets/img/edu.JPG',
    imageAlt: 'Education',
    statements: [
      'Expanding learning opportunities for children and youth.',
      'Designing education systems that improve outcomes at scale.',
    ],
    bullets: [
      'Foundational learning programs',
      'Youth development models',
      'Life skills curricula',
      'Education system strengthening',
    ],
    icon: 'fa-graduation-cap',
    alt: true,
  },
  {
    id: 'ecotourism',
    title: '',
    titleStrong: 'Ecotourism',
    label: 'Practice Area',
    image: '/assets/img/ecotourism.jpg',
    imageAlt: 'Ecotourism',
    statements: [
      'Transforming natural assets into sustainable local economies.',
      'Creating tourism models that benefit communities and conservation.',
    ],
    bullets: [
      'Community tourism models',
      'Destination development',
      'Tourism enterprise support',
      'Sustainable visitor experiences',
    ],
    icon: 'fa-tree',
  },
  {
    id: 'equitable-economies',
    title: 'Equitable',
    titleStrong: 'Economies',
    label: 'Practice Area',
    image: '/assets/img/empower.png',
    imageAlt: 'Equitable Economies',
    statements: [
      'Creating pathways to inclusive economic growth.',
      'Strengthening enterprises, markets, and livelihoods.',
    ],
    bullets: [
      'Enterprise ecosystem design',
      'Value chain development',
      'Livelihood promotion',
      'Market systems strengthening',
    ],
    icon: 'fa-seedling',
    alt: true,
  },
  {
    id: 'health',
    title: 'Health and',
    titleStrong: 'Social Care',
    label: 'Practice Area',
    image: '/assets/img/Health and Social Care.jpg',
    imageAlt: 'Health and Social Care',
    statements: [
      'Improving wellbeing through community-centered approaches.',
      'Designing systems that expand access and impact.',
    ],
    bullets: [
      'Community health programs',
      'Frontline workforce support',
      'Child and adolescent wellbeing',
      'Health systems strengthening',
    ],
    icon: 'fa-heart',
  },
]

export default function PracticeAreas() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: practiceStyles }} />

      {/* Hero */}
      <section className="pa-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Practice Areas</span>
          </div>
          <h1>Our <strong>Practice Areas</strong></h1>
          <p>
            Deep expertise across five interconnected domains — driving inclusive development,
            resilient communities, and sustainable impact across India.
          </p>
        </div>
      </section>

      {/* Overview pills */}
      <section className="pa-overview">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="ab-label" style={{ justifyContent: 'center' }}>
              <span className="line"></span>
              <span className="text">What We Do</span>
              <span className="line"></span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0d2d3f', marginBottom: '12px' }}>
              Five Areas of <strong style={{ color: '#2FA7A3' }}>Deep Practice</strong>
            </h2>
            <p style={{ fontSize: '15.5px', color: '#4a6070', lineHeight: '1.8', marginBottom: 0 }}>
              Our practice areas reflect decades of combined experience working at the intersection
              of communities, governments, and development systems.
            </p>
          </div>
          <div className="pa-pills">
            <a href="#climate" className="pa-pill"><i className="fa fa-leaf"></i> Climate &amp; Environment</a>
            <a href="#education" className="pa-pill"><i className="fa fa-graduation-cap"></i> Education</a>
            <a href="#ecotourism" className="pa-pill"><i className="fa fa-tree"></i> Ecotourism</a>
            <a href="#equitable-economies" className="pa-pill"><i className="fa fa-seedling"></i> Equitable Economies</a>
            <a href="#health" className="pa-pill"><i className="fa fa-heart"></i> Health &amp; Social Care</a>
          </div>
        </div>
      </section>

      {/* Practice area sections */}
      {practiceAreas.map((area, index) => {
        const isAlt = area.alt
        return (
          <section key={area.id} id={area.id} className={`pa-section${isAlt ? ' pa-alt' : ''}`}>
            <div className="container">
              <div className="row" style={{ alignItems: 'center' }}>

                {/* Image — left on even, right on odd */}
                {!isAlt && (
                  <div className="col-md-5">
                    <div className="pa-img-wrap">
                      <img src={area.image} alt={area.imageAlt} />
                    </div>
                  </div>
                )}

                <div className={`col-md-7 pa-text${isAlt ? ' pa-text-left' : ''}`}>
                  <div className="ab-label">
                    <span className="line"></span>
                    <span className="text">{area.label}</span>
                  </div>
                  <h2>
                    {area.title}{area.title && area.titleStrong ? ' ' : ''}
                    {area.titleStrong ? <strong>{area.titleStrong}</strong> : null}
                  </h2>
                  <div className="pa-substatements">
                    {area.statements.map((s, i) => (
                      <p key={i}>{s}</p>
                    ))}
                  </div>
                  <ul className="pa-bullets">
                    {area.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Image — right on alt */}
                {isAlt && (
                  <div className="col-md-5">
                    <div className="pa-img-wrap">
                      <img src={area.image} alt={area.imageAlt} />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="pa-cta">
        <div className="container">
          <h2>Join Our Network of <strong>Practice Leads</strong></h2>
          <p>
            We are building a team of experienced practitioners to lead advisory and
            implementation work across our five practice areas.
          </p>
          <div className="cta-btns">
            <Link href="/practice-areas/call-for-experts" className="cta-btn-primary">
              <i className="fa fa-user-plus" style={{ marginRight: '8px' }}></i>
              Call for Practice Leads
            </Link>
            <Link href="/contact" className="cta-btn-outline">
              <i className="fa fa-paper-plane" style={{ marginRight: '8px' }}></i>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
