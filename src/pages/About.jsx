import { Link } from 'react-router-dom'

const aboutStyles = `
/* ── Hero ── */
.about-hero {
   position: relative;
   background: linear-gradient(135deg, rgba(8,42,58,0.95) 0%, rgba(21,91,104,0.92) 55%, rgba(43,164,170,0.85) 100%),
               url("./assets/img/empower.png") center/cover no-repeat;
   padding: 140px 0 80px;
   color: #fff;
}
.about-hero .breadcrumb-nav {
   font-size: 13px; letter-spacing: 0.04em;
   margin-bottom: 20px; opacity: 0.85;
}
.about-hero .breadcrumb-nav a { color: #80e5e1; text-decoration: none; }
.about-hero .breadcrumb-nav a:hover { text-decoration: underline; }
.about-hero .breadcrumb-nav .sep { margin: 0 8px; opacity: 0.6; }
.about-hero h1 {
   font-size: 48px; font-weight: 700;
   color: #fff; line-height: 1.2; margin-bottom: 16px;
}
.about-hero h1 strong { color: #80e5e1; font-weight: 800; }
.about-hero p {
   font-size: 17px; color: rgba(255,255,255,0.85);
   line-height: 1.75; max-width: 600px; margin: 0;
}
@media (max-width: 767px) {
   .about-hero { padding: 110px 0 60px; }
   .about-hero h1 { font-size: 32px; }
}

.about-page { background: #fff; }
.about-section-pad { padding: 72px 0; }
.about-section-pad.bg-light-teal { background: #f4fbfb; }
.about-section-pad.bg-dark-navy {
   background: linear-gradient(135deg, #0d2d3f 0%, #1a5a68 100%);
   color: #fff;
}

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
.bg-dark-navy .ab-label .text { color: #80e5e1; }
.bg-dark-navy .ab-label .line { background: #80e5e1; }

.ab-heading {
   font-size: 32px; font-weight: 700;
   color: #0d2d3f; line-height: 1.3; margin-bottom: 16px;
}
.ab-heading strong { color: #2FA7A3; }
.bg-dark-navy .ab-heading { color: #fff; }
.bg-dark-navy .ab-heading strong { color: #80e5e1; }

.ab-sub {
   font-size: 16px; color: #3d4e5c; line-height: 1.8; margin-bottom: 0;
}
.bg-dark-navy .ab-sub { color: rgba(255,255,255,0.82); }

.mvv-grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px; margin-top: 48px;
}
@media (max-width: 991px) { .mvv-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px)  { .mvv-grid { grid-template-columns: 1fr; } }

.mvv-card {
   background: #fff;
   border: 1px solid #dff0ef;
   border-top: 4px solid #2FA7A3;
   border-radius: 16px;
   padding: 32px 28px;
   transition: box-shadow 0.25s, transform 0.25s;
}
.mvv-card:hover {
   box-shadow: 0 12px 32px rgba(47,167,163,0.13);
   transform: translateY(-4px);
}
.mvv-card .mvv-icon {
   width: 50px; height: 50px;
   background: linear-gradient(135deg, #1f8f95, #2FA7A3);
   border-radius: 12px;
   display: flex; align-items: center; justify-content: center;
   font-size: 20px; color: #fff; margin-bottom: 20px;
}
.mvv-card h3 {
   font-size: 18px; font-weight: 700;
   color: #0d2d3f; margin-bottom: 12px;
}
.mvv-card p {
   font-size: 14.5px; color: #4a6070;
   line-height: 1.75; margin: 0;
}

.story-img {
   border-radius: 20px; overflow: hidden;
   box-shadow: 0 16px 48px rgba(13,45,63,0.14);
   height: 100%;
}
.story-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

.story-text { padding-left: 40px; }
@media (max-width: 991px) { .story-text { padding-left: 0; margin-top: 36px; } }

.story-text p {
   font-size: 15px; color: #3d4e5c; line-height: 1.85; margin-bottom: 18px;
}
.story-text .highlight-box {
   background: #f4fbfb;
   border-left: 4px solid #2FA7A3;
   border-radius: 0 10px 10px 0;
   padding: 18px 22px;
   margin-top: 24px;
}
.story-text .highlight-box p {
   font-size: 14.5px; color: #2a4a5c;
   font-style: italic; margin: 0; line-height: 1.7;
}

.focus-chips {
   display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px;
}
.focus-chip {
   display: flex; align-items: center; gap: 8px;
   background: #e8f8f7; border: 1px solid #b8e8e5;
   border-radius: 8px; padding: 10px 16px;
   font-size: 13.5px; font-weight: 600; color: #1a7a7a;
}
.focus-chip i { color: #2FA7A3; }

.stats-bar {
   display: flex; justify-content: center; flex-wrap: wrap;
   gap: 0; margin: 0;
}
.stat-block {
   flex: 1; min-width: 160px;
   text-align: center; padding: 44px 28px;
   border-right: 1px solid rgba(255,255,255,0.1);
}
.stat-block:last-child { border-right: none; }
.stat-block .num {
   font-size: 44px; font-weight: 800;
   color: #80e5e1; line-height: 1; margin-bottom: 10px;
}
.stat-block .lbl {
   font-size: 14px; font-weight: 600;
   color: rgba(255,255,255,0.85); letter-spacing: 0.02em;
}
@media (max-width: 767px) {
   .stat-block { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 32px 20px; }
   .stat-block:last-child { border-bottom: none; }
}

.team-grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 24px; margin-top: 48px;
}
@media (max-width: 991px) { .team-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px)  { .team-grid { grid-template-columns: 1fr; } }

.team-card {
   background: #fff;
   border: 1px solid #dff0ef;
   border-radius: 16px;
   overflow: hidden;
   transition: box-shadow 0.25s, transform 0.25s;
}
.team-card:hover {
   box-shadow: 0 12px 32px rgba(47,167,163,0.13);
   transform: translateY(-4px);
}
.team-card .tc-photo {
   width: 100%; aspect-ratio: 1/1; overflow: hidden;
   background: #e8f8f7;
}
.team-card .tc-photo img {
   width: 100%; height: 100%; object-fit: cover; object-position: top;
   display: block; transition: transform 0.35s ease;
}
.team-card:hover .tc-photo img { transform: scale(1.05); }
.team-card .tc-info { padding: 20px 20px 22px; }
.team-card .tc-info h4 {
   font-size: 16px; font-weight: 700;
   color: #0d2d3f; margin-bottom: 4px;
}
.team-card .tc-info .role {
   font-size: 12.5px; font-weight: 600;
   color: #2FA7A3; text-transform: uppercase;
   letter-spacing: 0.06em; margin-bottom: 10px;
}
.team-card .tc-info p {
   font-size: 13.5px; color: #4a6070;
   line-height: 1.65; margin: 0;
}
.team-card .tc-info .tc-social { margin-top: 14px; }
.team-card .tc-info .tc-social a {
   display: inline-flex; align-items: center; justify-content: center;
   width: 30px; height: 30px;
   background: #e8f8f7; border-radius: 50%;
   color: #2FA7A3; font-size: 13px;
   text-decoration: none; transition: background 0.2s, color 0.2s;
}
.team-card .tc-info .tc-social a:hover { background: #2FA7A3; color: #fff; }

.geo-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
   gap: 16px; margin-top: 36px;
}
.geo-card {
   background: rgba(255,255,255,0.07);
   border: 1px solid rgba(255,255,255,0.14);
   border-radius: 12px; padding: 22px 20px;
   text-align: center;
}
.geo-card i { font-size: 22px; color: #80e5e1; margin-bottom: 10px; display: block; }
.geo-card .geo-name {
   font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px;
}
.geo-card .geo-desc {
   font-size: 12.5px; color: rgba(255,255,255,0.65); line-height: 1.5;
}

.about-cta {
   background: #f4fbfb;
   border-top: 1px solid #dff0ef;
   padding: 60px 0; text-align: center;
}
.about-cta h2 {
   font-size: 28px; font-weight: 700;
   color: #0d2d3f; margin-bottom: 14px;
}
.about-cta h2 strong { color: #2FA7A3; }
.about-cta p {
   font-size: 15.5px; color: #4a6070;
   line-height: 1.75; max-width: 520px;
   margin: 0 auto 28px;
}
.cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
.cta-btn-primary {
   background: #2FA7A3; color: #fff;
   border: none; border-radius: 999px;
   padding: 12px 32px; font-size: 14px;
   font-weight: 700; text-decoration: none;
   transition: background 0.22s;
   font-family: "Poppins", sans-serif;
}
.cta-btn-primary:hover { background: #1d8a87; color: #fff; text-decoration: none; }
.cta-btn-outline {
   background: transparent; color: #2FA7A3;
   border: 2px solid #2FA7A3; border-radius: 999px;
   padding: 11px 32px; font-size: 14px;
   font-weight: 700; text-decoration: none;
   transition: background 0.22s, color 0.22s;
   font-family: "Poppins", sans-serif;
}
.cta-btn-outline:hover { background: #2FA7A3; color: #fff; text-decoration: none; }
`

export default function About() {
  return (
    <>
      <style>{aboutStyles}</style>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>About Us</span>
          </div>
          <h1>About <strong>BPSV</strong></h1>
          <p>
            A people-first social enterprise building sustainable, resilient communities
            across India through doorstep incubation, clean energy, and ecosystem development.
          </p>
        </div>
      </section>

      <div className="about-page">

        {/* Mission / Vision / Values */}
        <div className="about-section-pad bg-light-teal">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div className="ab-label" style={{ justifyContent: 'center' }}>
                <span className="line"></span><span className="text">Who We Are</span><span className="line"></span>
              </div>
              <h2 className="ab-heading">Beyond Purpose <strong>Social Ventures</strong></h2>
              <p className="ab-sub">
                A pioneering social enterprise dedicated to building sustainable, resilient communities
                across India through innovative market-based solutions that put people first.
              </p>
            </div>
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-icon"><i className="fa fa-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>
                  To deliver doorstep incubation services and clean energy solutions that unlock
                  economic opportunity for rural micro-entrepreneurs — especially women and youth —
                  building businesses that last beyond project cycles.
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon"><i className="fa fa-eye"></i></div>
                <h3>Our Vision</h3>
                <p>
                  A Northeast India where every rural community has access to the energy,
                  technology, and enterprise support it needs to thrive — driven by local
                  leaders and sustained by inclusive market systems.
                </p>
              </div>
              <div className="mvv-card">
                <div className="mvv-icon"><i className="fa fa-heart"></i></div>
                <h3>Our Values</h3>
                <p>
                  Community ownership, transparency, and impact over optics. We design with
                  communities — not for them — and measure success by the livelihoods
                  transformed long after our projects close.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="about-section-pad">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="story-img">
                  <img src="./assets/img/Dhar Atta.JPG" alt="BPSV team working with rural entrepreneurs" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="story-text">
                  <div className="ab-label"><span className="line"></span><span className="text">Our Story</span></div>
                  <h2 className="ab-heading">Rooted in the <strong>Field</strong></h2>
                  <p>
                    BPSV was born from the belief that rural entrepreneurs don't lack ambition —
                    they lack access. Access to reliable energy, to markets, to business support
                    that meets them where they are, not where institutions expect them to be.
                  </p>
                  <p>
                    We specialize in delivering <strong>doorstep incubation services</strong> for
                    micro and nano entrepreneurs in rural areas, with a concentrated focus on
                    integrating Distributed Renewable Energy (DRE), digital technologies, and
                    blended financial services directly into local economies.
                  </p>
                  <p>
                    Working across Assam, Nagaland, Meghalaya, Karnataka, and Odisha, we have
                    partnered with development organizations, foundations, and communities to
                    demonstrate that clean energy and enterprise support are two sides of the
                    same coin — and that scaling both together creates lasting change.
                  </p>
                  <div className="highlight-box">
                    <p>
                      "We don't just install systems or train entrepreneurs — we build ecosystems
                      that keep working after we leave."
                    </p>
                  </div>
                  <div className="focus-chips">
                    <span className="focus-chip"><i className="fa fa-bolt"></i> Distributed Renewable Energy</span>
                    <span className="focus-chip"><i className="fa fa-home"></i> Doorstep Incubation</span>
                    <span className="focus-chip"><i className="fa fa-users"></i> Women Empowerment</span>
                    <span className="focus-chip"><i className="fa fa-leaf"></i> Rural Agribusiness</span>
                    <span className="focus-chip"><i className="fa fa-cloud"></i> Climate Adaptation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-section-pad bg-dark-navy" style={{ padding: '0' }}>
          <div className="stats-bar">
            <div className="stat-block">
              <div className="num">3</div>
              <div className="lbl">Active Projects</div>
            </div>
            <div className="stat-block">
              <div className="num">5</div>
              <div className="lbl">States of Operation</div>
            </div>
            <div className="stat-block">
              <div className="num">25+</div>
              <div className="lbl">Enterprises Supported</div>
            </div>
            <div className="stat-block">
              <div className="num">100+</div>
              <div className="lbl">Entrepreneurs Impacted</div>
            </div>
          </div>
        </div>

        {/* Geographies */}
        <div className="about-section-pad bg-dark-navy">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="ab-label" style={{ justifyContent: 'center' }}>
                <span className="line"></span><span className="text">Where We Work</span><span className="line"></span>
              </div>
              <h2 className="ab-heading">Our <strong>Geographies</strong></h2>
              <p className="ab-sub">
                Rooted in Northeast India with an expanding footprint across rural communities
                that need it most.
              </p>
            </div>
            <div className="geo-grid">
              <div className="geo-card">
                <i className="fa fa-map-marker"></i>
                <div className="geo-name">Assam</div>
                <div className="geo-desc">DRE ecosystem building &amp; livelihood enterprises</div>
              </div>
              <div className="geo-card">
                <i className="fa fa-map-marker"></i>
                <div className="geo-name">Nagaland</div>
                <div className="geo-desc">PURE appliances in agri-processing value chains</div>
              </div>
              <div className="geo-card">
                <i className="fa fa-map-marker"></i>
                <div className="geo-name">Meghalaya</div>
                <div className="geo-desc">Solar-powered agribusiness transformation</div>
              </div>
              <div className="geo-card">
                <i className="fa fa-map-marker"></i>
                <div className="geo-name">Karnataka</div>
                <div className="geo-desc">Climate adaptation &amp; women foodpreneur incubation</div>
              </div>
              <div className="geo-card">
                <i className="fa fa-map-marker"></i>
                <div className="geo-name">Odisha</div>
                <div className="geo-desc">Doorstep business services for women entrepreneurs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="about-section-pad">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="ab-label" style={{ justifyContent: 'center' }}>
                <span className="line"></span><span className="text">Our People</span><span className="line"></span>
              </div>
              <h2 className="ab-heading">Meet the <strong>Team</strong></h2>
              <p className="ab-sub">
                A dedicated team of practitioners, engineers, and development professionals
                working towards sustainable and inclusive community development.
              </p>
            </div>
            <div className="team-grid">

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/kartik.png" alt="Nagakarthik MP" />
                </div>
                <div className="tc-info">
                  <h4>Nagakarthik MP</h4>
                  <div className="role">Founder &amp; Director</div>
                  <p>Social entrepreneur with 8+ years across health, education, climate, and livelihoods.</p>
                  <div className="tc-social">
                    <a href="https://www.linkedin.com/in/nagakarthik-mp-03010938/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/neil.png" alt="Neil Murlidhar Kamat" />
                </div>
                <div className="tc-info">
                  <h4>Neil Murlidhar Kamat</h4>
                  <div className="role">Co-Founder</div>
                  <p>Mechanical engineer focused on renewable energy and sustainable rural development.</p>
                  <div className="tc-social">
                    <a href="https://www.linkedin.com/in/neilkamat/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/gunajit.png" alt="Gunajit Dev Sarma" />
                </div>
                <div className="tc-info">
                  <h4>Gunajit Dev Sarma</h4>
                  <div className="role">Project Manager</div>
                  <p>Oversees project execution and on-ground implementation across communities.</p>
                </div>
              </div>

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/atanu.png" alt="Atanu Garai" />
                </div>
                <div className="tc-info">
                  <h4>Atanu Garai</h4>
                  <div className="role">Lead – Knowledge Management</div>
                  <p>Seasoned social impact leader driving digital innovation worldwide across sectors.</p>
                </div>
              </div>

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/himadri.png" alt="Himadri Gogoi" />
                </div>
                <div className="tc-info">
                  <h4>Himadri Gogoi</h4>
                  <div className="role">Manager – Grant Writing</div>
                  <p>Leads grant development, funding proposals, and donor partnerships to drive impact.</p>
                </div>
              </div>

              <div className="team-card">
                <div className="tc-photo">
                  <img src="./assets/img/rohan.png" alt="Rohan Bose" />
                </div>
                <div className="tc-info">
                  <h4>Rohan Bose</h4>
                  <div className="role">Software Analyst</div>
                  <p>Supports digital innovation and technology solutions for social impact projects.</p>
                  <div className="tc-social">
                    <a href="https://www.linkedin.com/in/rohanbose-rb/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <div className="container">
            <h2>Ready to <strong>Collaborate?</strong></h2>
            <p>
              Whether you're a funder, development organization, or community partner —
              we'd love to explore how we can create impact together.
            </p>
            <div className="cta-btns">
              <Link to="/contact" className="cta-btn-primary"><i className="fa fa-paper-plane" style={{ marginRight: '8px' }}></i>Get in Touch</Link>
              <Link to="/projects" className="cta-btn-outline"><i className="fa fa-folder-open" style={{ marginRight: '8px' }}></i>View Our Projects</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
