import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ClaspMaf() {
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
      <style>{`.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("./assets/img/Sanghamitra%203.png") center/cover no-repeat; }`}</style>

      {/* Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/projects">Projects</Link>
            <span className="sep">/</span>
            <span>CLASP MAF – Scaling DRE</span>
          </div>
          <div className="row">
            <div className="col-md-9">
              <h1>CLASP MAF – Scaling DRE<br />through Ecosystem Building</h1>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.75', maxWidth: '700px', marginBottom: '0' }}>
                Using Productive Use of Energy (PURE) Appliances in Livelihood Enterprises
                across Assam and Nagaland to create scalable, clean-energy rural business models.
              </p>
              <div className="hero-meta">
                <span className="tag"><i className="fa fa-map-marker" style={{ marginRight: '6px' }}></i>Assam &amp; Nagaland, India</span>
                <span className="tag"><i className="fa fa-users" style={{ marginRight: '6px' }}></i>Client: CLASP MAF</span>
                <span className="tag"><i className="fa fa-calendar" style={{ marginRight: '6px' }}></i>Feb 2024 – Jan 2025</span>
                <span className="tag"><i className="fa fa-bolt" style={{ marginRight: '6px' }}></i>DRE / Ecosystem Building</span>
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
              <h2>Accelerating DRE Adoption through <strong>Ecosystem Building</strong></h2>
              <p>This project focused on accelerating the adoption of Distributed Renewable Energy (DRE) solutions by strengthening local ecosystem partners and supporting rural livelihood enterprises with solar-powered productive-use technologies. The initiative combined clean energy deployment with incubation support, enterprise development, and capacity-building interventions to create sustainable and scalable rural business models.</p>

              <div className="stat-grid">
                <div className="stat-card"><div className="stat-number">USD<br />78,400</div><div className="stat-label">Project Value</div></div>
                <div className="stat-card"><div className="stat-number">12</div><div className="stat-label">Months Duration</div><div className="stat-sub">Feb 2024 – Jan 2025</div></div>
                <div className="stat-card"><div className="stat-number">7</div><div className="stat-label">Staff Members</div><div className="stat-sub">Full project duration</div></div>
                <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">States Covered</div><div className="stat-sub">Assam &amp; Nagaland</div></div>
              </div>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Background</span></div>
              <h2>The <strong>Challenge</strong></h2>
              <p>While direct enterprise support demonstrated strong results in improving productivity and reducing energy costs, scaling these solutions required a broader ecosystem approach. Local NGOs had strong community outreach and field presence but lacked structured incubation systems and technical frameworks needed to support enterprise growth effectively.</p>
              <p>The project addressed this gap by building institutional capabilities while enabling enterprises to adopt productive-use renewable energy technologies — creating the conditions for self-sustaining, long-term scalability.</p>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Implementation</span></div>
              <h2>What We <strong>Did</strong></h2>
              <p>Enterprise sectors supported across the project:</p>
              <div className="vc-tags">
                <span className="vc-tag"><i className="fa fa-leaf" style={{ marginRight: '6px' }}></i>Dairy</span>
                <span className="vc-tag"><i className="fa fa-industry" style={{ marginRight: '6px' }}></i>Puff Rice Processing</span>
                <span className="vc-tag"><i className="fa fa-pagelines" style={{ marginRight: '6px' }}></i>Banana Fiber Production</span>
                <span className="vc-tag"><i className="fa fa-cog" style={{ marginRight: '6px' }}></i>Rice Milling</span>
              </div>
              <ul className="project-list">
                <li>Established strategic partnerships with <strong>SeSTA</strong> and <strong>YouthNet</strong> as regional incubation partners</li>
                <li>Selected enterprises across dairy, puff rice processing, banana fiber production, and rice milling value chains</li>
                <li>Designed and deployed customized solar-powered DRE systems based on individual enterprise requirements</li>
                <li>Conducted capacity-building programs for NGO partners on incubation methodologies, Human-Centered Design (HCD), and market systems development</li>
                <li>Developed operational frameworks, enterprise support systems, and monitoring tools for long-term scalability</li>
                <li>Supported enterprises with technical guidance and business development assistance throughout the project</li>
              </ul>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Outcomes &amp; Impact</span></div>
              <h2>Results That <strong>Matter</strong></h2>
              <p>The project created lasting impact at both enterprise and ecosystem levels — improving livelihoods in the short term while building the institutional foundations for sustained DRE adoption at scale.</p>
              <ul className="project-list">
                <li>Enabled deployment of DRE systems across dairy, rice milling, puff rice processing, and banana fiber production sectors</li>
                <li>Improved enterprise productivity through reliable solar-powered operations and reduced machine downtime</li>
                <li>Reduced dependence on diesel generators and unreliable grid electricity, lowering recurring energy costs</li>
                <li>Demonstrated scalability of clean energy integration for rural processing enterprises and livelihood businesses</li>
                <li>Increased production capacity across participating enterprises through efficient and uninterrupted operations</li>
                <li>Strengthened incubation and enterprise support capabilities of <strong>SeSTA</strong> and <strong>YouthNet</strong> for long-term ecosystem development</li>
              </ul>

              <div className="outcome-highlight">
                <h3>Key Achievements</h3>
                <div className="outcome-grid">
                  <div className="outcome-item"><div className="icon"><i className="fa fa-bolt"></i></div><div className="desc">Solar-powered DRE systems deployed across multiple rural enterprise sectors</div></div>
                  <div className="outcome-item"><div className="icon"><i className="fa fa-line-chart"></i></div><div className="desc">Increased production capacity through reliable, uninterrupted clean energy operations</div></div>
                  <div className="outcome-item"><div className="icon"><i className="fa fa-users"></i></div><div className="desc">NGO partners SeSTA &amp; YouthNet equipped with structured incubation methodologies</div></div>
                  <div className="outcome-item"><div className="icon"><i className="fa fa-refresh"></i></div><div className="desc">Scalable ecosystem model established for long-term DRE adoption across the region</div></div>
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
                  <div className="info-row"><span className="key">Client</span><span className="val">CLASP MAF</span></div>
                  <div className="info-row"><span className="key">Project Value</span><span className="val">USD 78,400</span></div>
                  <div className="info-row"><span className="key">Country</span><span className="val">India</span></div>
                  <div className="info-row"><span className="key">Locations</span><span className="val">Assam &amp; Nagaland</span></div>
                  <div className="info-row"><span className="key">Duration</span><span className="val">12 Months</span></div>
                  <div className="info-row"><span className="key">Start Date</span><span className="val">February 2024</span></div>
                  <div className="info-row"><span className="key">Completion</span><span className="val">January 2025</span></div>
                  <div className="info-row"><span className="key">Team</span><span className="val">7 Staff &times; 12 Months</span></div>
                </div>
                <div className="sidebar-card">
                  <h4>Value Chains</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    <span style={{ background: '#e8f8f7', border: '1px solid #b8e8e5', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#1a7a7a' }}>Dairy</span>
                    <span style={{ background: '#e8f8f7', border: '1px solid #b8e8e5', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#1a7a7a' }}>Puff Rice Processing</span>
                    <span style={{ background: '#e8f8f7', border: '1px solid #b8e8e5', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#1a7a7a' }}>Banana Fiber</span>
                    <span style={{ background: '#e8f8f7', border: '1px solid #b8e8e5', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#1a7a7a' }}>Rice Milling</span>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h4>Project Gallery</h4>
                  <div className="project-gallery">
                    <div className="gallery-grid">
                      <a href="./assets/img/Sanghamitra 3.png" className="gallery-item" title="CLASP MAF – PURE appliances in livelihood enterprises">
                        <img src="./assets/img/Sanghamitra 3.png" alt="PURE appliances" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/Dhar Atta.JPG" className="gallery-item" title="Productive-use energy in agri-processing">
                        <img src="./assets/img/Dhar Atta.JPG" alt="Agri-processing" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/image6.jpg" className="gallery-item" title="Community enterprise development">
                        <img src="./assets/img/image6.jpg" alt="Community enterprise" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="./assets/img/image9.jpg" className="gallery-item" title="Ecosystem building activities">
                        <img src="./assets/img/image9.jpg" alt="Ecosystem building" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-card" style={{ textAlign: 'center' }}>
                  <h4>Interested in this work?</h4>
                  <p style={{ fontSize: '13.5px', color: '#4a6070', marginBottom: '18px', lineHeight: '1.6' }}>Get in touch to learn more about BPSV's DRE ecosystem-building approach.</p>
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
