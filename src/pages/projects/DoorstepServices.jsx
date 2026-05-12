import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DoorstepServices() {
  useEffect(() => {
    const $ = window.$
    if (!$ || !$.fn.magnificPopup) return
    $('.project-gallery').magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery: { enabled: true, navigateByImgClick: true },
      image: { titleSrc: 'title' }
    })
    return () => {
      if ($.fn.magnificPopup) {
        const $pg = $('.project-gallery')
        if ($pg.length) $pg.magnificPopup('close')
      }
    }
  }, [])

  return (
    <>
      <style>{`.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("./assets/img/rural.png") center/cover no-repeat; }`}</style>

      {/* Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/projects">Projects</Link>
            <span className="sep">/</span>
            <span>DRIVE – Doorstep Business Services</span>
          </div>
          <div className="row">
            <div className="col-md-9">
              <h1>DRIVE Aahar Bazaar Challenge</h1>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.75', maxWidth: '700px', marginBottom: '0' }}>
                Boosting Income for 100 Women Foodpreneurs through Doorstep Business Services
                across Assam, Karnataka, and Odisha (2025–26).
              </p>
              <div className="hero-meta">
                <span className="tag"><i className="fa fa-map-marker" style={{ marginRight: '6px' }}></i>Assam, Karnataka &amp; Odisha</span>
                <span className="tag"><i className="fa fa-users" style={{ marginRight: '6px' }}></i>Client: The Nudge Foundation</span>
                <span className="tag"><i className="fa fa-calendar" style={{ marginRight: '6px' }}></i>Dec 2025 – Aug 2026</span>
                <span className="tag"><i className="fa fa-mobile" style={{ marginRight: '6px' }}></i>AgriTech / Women Empowerment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="project-body">
        <div className="container">
          <div className="row">

            {/* Content column */}
            <div className="col-md-8">

              <div className="section-label"><span className="label-line"></span><span className="label-text">Project Overview</span></div>
              <h2>Agent-Led Incubation for <strong>Women Foodpreneurs</strong></h2>
              <p>
                DRIVE is an assisted-technology, agent-led incubation platform developed by BPSV to
                address the "last-mile incubation gap" experienced by rural women entrepreneurs. The
                initiative combines local field agents, digital tools, and enterprise support systems
                to deliver business incubation services directly to entrepreneurs at their doorstep.
              </p>
              <p>
                The project focuses on enabling home-based women foodpreneurs to transition from
                hyper-local informal businesses into structured, market-ready enterprises through
                integrated support covering compliance, bookkeeping, branding, packaging, market
                access, finance, and clean energy integration.
              </p>

              <div className="stat-grid">
                <div className="stat-card"><div className="stat-number">100</div><div className="stat-label">Women Foodpreneurs</div><div className="stat-sub">Initial phase target</div></div>
                <div className="stat-card"><div className="stat-number">3,000+</div><div className="stat-label">Future Scale Target</div><div className="stat-sub">Entrepreneurs supported</div></div>
                <div className="stat-card"><div className="stat-number">18</div><div className="stat-label">Doorstep Services</div><div className="stat-sub">Delivered per enterprise</div></div>
                <div className="stat-card"><div className="stat-number">3</div><div className="stat-label">States</div><div className="stat-sub">Assam, Karnataka, Odisha</div></div>
              </div>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Background</span></div>
              <h2>The <strong>Challenge</strong></h2>
              <p>
                Women foodpreneurs in rural India often operate without access to formal enterprise
                support systems. Critical services such as compliance assistance, bookkeeping,
                packaging vendors, certified machinery, financing, and market linkages remain
                fragmented and difficult to access. BPSV identified this challenge as an
                <strong>"incubation logistics trap"</strong> — where entrepreneurs are disconnected
                not only from markets but also from the systems required for sustainable business growth.
              </p>
              <p>
                Earlier incubation programs demonstrated strong enterprise outcomes but depended heavily
                on centralized support teams, making them resource-intensive and difficult to scale.
                DRIVE was conceptualized as a scalable, decentralized incubation model powered by
                trained field agents and supported through a digital enterprise platform.
              </p>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Implementation</span></div>
              <h2>How We <strong>Delivered</strong></h2>

              <div className="phase-box">
                <div className="phase-label">Phase 1</div>
                <h3>Prototype and System Design</h3>
                <ul className="project-list">
                  <li>Conducted market research and product category assessments across Assam, Karnataka, and Odisha</li>
                  <li>Developed and tested prototype modules for the DRIVE ERP App</li>
                  <li>Created incubation playbooks, operational tools, and standard operating procedures</li>
                  <li>Recruited and deployed 4–6 field agents to support enterprise onboarding and incubation</li>
                </ul>
              </div>

              <div className="phase-box">
                <div className="phase-label">Phase 2</div>
                <h3>Pilot Deployment</h3>
                <p style={{ fontSize: '14px', color: '#4a6070', marginBottom: '14px' }}>
                  Onboarded women foodpreneurs with annual business turnover of INR 3 lakhs or below. Delivered 18 doorstep incubation services:
                </p>
                <div className="services-grid">
                  <span className="service-chip"><i className="fa fa-file-text-o"></i>Business Planning</span>
                  <span className="service-chip"><i className="fa fa-flask"></i>Product Development</span>
                  <span className="service-chip"><i className="fa fa-paint-brush"></i>Branding &amp; Packaging</span>
                  <span className="service-chip"><i className="fa fa-book"></i>Bookkeeping</span>
                  <span className="service-chip"><i className="fa fa-check-square-o"></i>Compliance</span>
                  <span className="service-chip"><i className="fa fa-shopping-cart"></i>Market Linkage</span>
                  <span className="service-chip"><i className="fa fa-money"></i>Access to Finance</span>
                  <span className="service-chip"><i className="fa fa-bolt"></i>DRE Integration</span>
                </div>
              </div>

              <h3 style={{ marginTop: '32px' }}>Technology Infrastructure</h3>
              <div className="tech-grid">
                <div className="tech-item"><i className="fa fa-mobile"></i><span>DRIVE ERP App for field agents and entrepreneurs</span></div>
                <div className="tech-item"><i className="fa fa-whatsapp"></i><span>WhatsApp integration for communication and coordination</span></div>
                <div className="tech-item"><i className="fa fa-bar-chart"></i><span>Real-time enterprise monitoring and data tracking</span></div>
                <div className="tech-item"><i className="fa fa-code"></i><span>Open-source ERP-CRM architecture and digital data collection</span></div>
                <div className="tech-item"><i className="fa fa-sitemap"></i><span>Data-driven workflows for incubation and operational management</span></div>
              </div>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Outcomes &amp; Impact</span></div>
              <h2>Building a <strong>Scalable Model</strong></h2>
              <p>
                DRIVE establishes both immediate impact for participating entrepreneurs and the
                institutional foundations for a self-sustaining, large-scale incubation ecosystem.
              </p>
              <ul className="project-list">
                <li>Designed a decentralized incubation framework capable of scaling across multiple geographies</li>
                <li>Developed and validated an assisted-tech model integrating field agents with digital systems</li>
                <li>Targeted onboarding of <strong>100 women foodpreneurs</strong> in the initial phase, with future scalability to support over <strong>3,000 entrepreneurs</strong></li>
                <li>Established a commission-based field agent model for long-term operational sustainability beyond grant funding cycles</li>
                <li>Built an integrated ecosystem connecting producers, suppliers, infrastructure providers, financial institutions, and market access platforms</li>
                <li>Developed a real-time enterprise monitoring and incubation system using field-level tracking and workflow automation</li>
                <li>Initiated partnerships with <strong>ONDC</strong>, retail distributors, and ecosystem stakeholders to strengthen market access and enterprise growth opportunities</li>
              </ul>

              <div className="outcome-highlight">
                <h3>Key Achievements</h3>
                <div className="outcome-grid">
                  <div className="outcome-item"><div className="value">100</div><div className="desc">Women foodpreneurs onboarded in the initial pilot phase</div></div>
                  <div className="outcome-item"><div className="value">3,000+</div><div className="desc">Entrepreneur scale target through the commission-based agent model</div></div>
                  <div className="outcome-item"><div className="icon"><i className="fa fa-mobile"></i></div><div className="desc">DRIVE ERP platform connecting field agents, enterprises, and support services in real time</div></div>
                  <div className="outcome-item"><div className="icon"><i className="fa fa-link"></i></div><div className="desc">Partnerships with ONDC &amp; retail distributors opening formal market channels for rural producers</div></div>
                </div>
              </div>

              <div style={{ marginTop: '40px' }}>
                <Link to="/projects" className="back-link"><i className="fa fa-arrow-left"></i> Back to all projects</Link>
              </div>

            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <div className="project-sidebar">
                <div className="sidebar-card">
                  <h4>Project Details</h4>
                  <div className="info-row"><span className="key">Client</span><span className="val">The Nudge Foundation</span></div>
                  <div className="info-row"><span className="key">Project Value</span><span className="val">USD 4,530</span></div>
                  <div className="info-row"><span className="key">Country</span><span className="val">India</span></div>
                  <div className="info-row"><span className="key">Locations</span><span className="val">Assam, Karnataka &amp; Odisha</span></div>
                  <div className="info-row"><span className="key">Duration</span><span className="val">9 Months</span></div>
                  <div className="info-row"><span className="key">Start Date</span><span className="val">December 2025</span></div>
                  <div className="info-row"><span className="key">Completion</span><span className="val">August 2026</span></div>
                  <div className="info-row"><span className="key">Team</span><span className="val">6 Staff &times; 9 Months</span></div>
                </div>
                <div className="sidebar-card">
                  <h4>Scale &amp; Target</h4>
                  <div className="info-row"><span className="key">Pilot Target</span><span className="val">100 entrepreneurs</span></div>
                  <div className="info-row"><span className="key">Future Scale</span><span className="val">3,000+ entrepreneurs</span></div>
                  <div className="info-row"><span className="key">Field Agents</span><span className="val">4–6 agents</span></div>
                  <div className="info-row"><span className="key">Services Delivered</span><span className="val">18 per enterprise</span></div>
                  <div className="info-row"><span className="key">Eligibility</span><span className="val">&le; INR 3L annual turnover</span></div>
                </div>
                <div className="sidebar-card">
                  <h4>Project Gallery</h4>
                  <div className="project-gallery">
                    <div className="gallery-grid">
                      <a href="./assets/img/rural.png" className="gallery-item" title="Field operations – Doorstep Business Services">
                        <img src="./assets/img/rural.png" alt="Field operations" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/empower.png" className="gallery-item" title="Women entrepreneurs empowerment">
                        <img src="./assets/img/empower.png" alt="Women entrepreneurs" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/image4.png" className="gallery-item" title="Enterprise incubation activities">
                        <img src="./assets/img/image4.png" alt="Enterprise incubation" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/image6.jpg" className="gallery-item" title="Community engagement">
                        <img src="./assets/img/image6.jpg" alt="Community engagement" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-card" style={{ textAlign: 'center' }}>
                  <h4>Interested in this work?</h4>
                  <p style={{ fontSize: '13.5px', color: '#4a6070', marginBottom: '18px', lineHeight: '1.6' }}>
                    Learn more about BPSV's DRIVE platform and doorstep incubation model.
                  </p>
                  <Link to="/contact" style={{ background: '#2FA7A3', color: '#fff', borderRadius: '999px', padding: '10px 24px', fontWeight: '600', fontSize: '13px', display: 'inline-block', textDecoration: 'none' }}>Contact Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
