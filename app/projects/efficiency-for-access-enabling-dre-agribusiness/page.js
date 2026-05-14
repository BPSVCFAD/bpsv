'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function EfficiencyForAccess() {
  useEffect(() => {
    function init() {
      const $ = window.$
      if (!$ || !$.fn.magnificPopup) return
      $('.project-gallery').magnificPopup({
        delegate: '.gallery-item',
        type: 'image',
        gallery: { enabled: true, navigateByImgClick: true },
        image: { titleSrc: 'title' }
      })
    }

    if (window.$) {
      init()
    } else {
      window.addEventListener('jqueryready', init, { once: true })
    }

    return () => {
      window.removeEventListener('jqueryready', init)
      const $ = window.$
      if ($ && $.fn.magnificPopup) {
        const $pg = $('.project-gallery')
        if ($pg.length) $pg.magnificPopup('close')
      }
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("/assets/img/empower.png") center/cover no-repeat; }` }} />

      {/* Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Projects</Link>
            <span className="sep">/</span>
            <span>Efficiency for Access</span>
          </div>
          <div className="row">
            <div className="col-md-9">
              <h1>Efficiency for Access:<br />Enabling DRE Agribusiness</h1>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.75', maxWidth: '680px', marginBottom: '0' }}>
                Demonstrating how Distributed Renewable Energy transforms rural agribusinesses
                through solar-powered systems and productive-use appliances in Meghalaya.
              </p>
              <div className="hero-meta">
                <span className="tag"><i className="fa fa-map-marker" style={{ marginRight: '6px' }}></i>Meghalaya, India</span>
                <span className="tag"><i className="fa fa-bolt" style={{ marginRight: '6px' }}></i>DRE / Agribusiness</span>
                <span className="tag"><i className="fa fa-leaf" style={{ marginRight: '6px' }}></i>Renewable Energy</span>
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
              <h2>Powering Rural Enterprises with <strong>Clean Energy</strong></h2>
              <p>This project demonstrates the transformative impact of Distributed Renewable Energy (DRE) solutions in rural agribusinesses through the integration of solar-powered energy systems and productive-use appliances. The initiative was designed to improve operational efficiency, lower energy costs, and enable reliable production in areas facing energy limitations.</p>

              <div className="stat-grid">
                <div className="stat-card"><div className="stat-number">5</div><div className="stat-label">Agribusiness Enterprises</div><div className="stat-sub">Pilot deployment</div></div>
                <div className="stat-card"><div className="stat-number">28.6</div><div className="stat-label">kWp Installed Capacity</div><div className="stat-sub">Renewable energy</div></div>
                <div className="stat-card"><div className="stat-number">74%</div><div className="stat-label">Reduction in Grid Dependency</div><div className="stat-sub">Average across enterprises</div></div>
                <div className="stat-card"><div className="stat-number">~50%</div><div className="stat-label">Energy Cost Savings</div><div className="stat-sub">Up to 65% for some enterprises</div></div>
              </div>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Background</span></div>
              <h2>The <strong>Challenge</strong></h2>
              <p>Rural enterprises in Meghalaya faced ongoing challenges due to unreliable grid electricity and heavy dependence on diesel-powered operations. These limitations affected productivity, increased operational expenses, and constrained business growth.</p>
              <p>The project was implemented as a pilot initiative to showcase how renewable energy-powered infrastructure could strengthen rural enterprises and support sustainable economic development — shifting operations from energy-constrained production to demand-driven business models.</p>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Implementation</span></div>
              <h2>What We <strong>Did</strong></h2>
              <p>The project combined hardware deployment with on-ground technical assistance to ensure participating enterprises could fully leverage the new systems:</p>
              <ul className="project-list">
                <li>Deployment of solar-powered DRE systems across five agribusiness enterprises</li>
                <li>Installation of PURE appliances including dryers, grinders, and processing equipment</li>
                <li>Total installed renewable energy capacity of 28.6 kWp</li>
                <li>Integration of clean energy systems into day-to-day enterprise operations</li>
                <li>Continuous monitoring of energy consumption and system performance</li>
                <li>Technical support and operational adaptation assistance for participating enterprises</li>
              </ul>

              <hr className="section-divider" />

              <div className="section-label"><span className="label-line"></span><span className="label-text">Outcomes &amp; Impact</span></div>
              <h2>Results That <strong>Matter</strong></h2>
              <p>The results across the five participating enterprises demonstrate the potential of DRE solutions to fundamentally change the economics of rural agribusiness:</p>
              <ul className="project-list">
                <li>Average monthly revenue increased from <strong>USD 3,058 to USD 6,168</strong></li>
                <li>Production output increased from <strong>4,548 kg to 16,550 kg</strong></li>
                <li><strong>74% reduction</strong> in dependence on grid electricity</li>
                <li>Approximately <strong>50% reduction in energy costs</strong>, with some enterprises achieving up to 65% savings</li>
                <li>Improved machine utilization and extended operational hours</li>
                <li>Shift from energy-constrained production to demand-driven business operations</li>
              </ul>

              <div className="outcome-highlight">
                <h3>Impact at a Glance</h3>
                <div className="outcome-grid">
                  <div className="outcome-item"><div className="value">2&times;</div><div className="desc">Average monthly revenue growth<br /><small style={{ opacity: '.7' }}>USD 3,058 &rarr; USD 6,168</small></div></div>
                  <div className="outcome-item"><div className="value">3.6&times;</div><div className="desc">Production output increase<br /><small style={{ opacity: '.7' }}>4,548 kg &rarr; 16,550 kg</small></div></div>
                  <div className="outcome-item"><div className="value">74%</div><div className="desc">Reduction in grid electricity dependence</div></div>
                  <div className="outcome-item"><div className="value">&le;65%</div><div className="desc">Energy cost savings achieved by top-performing enterprises</div></div>
                </div>
              </div>

              <div style={{ marginTop: '40px' }}>
                <Link href="/projects" className="back-link"><i className="fa fa-arrow-left"></i> Back to all projects</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <div className="project-sidebar">
                <div className="sidebar-card">
                  <h4>Project Details</h4>
                  <div className="info-row"><span className="key">Location</span><span className="val">Meghalaya, India</span></div>
                  <div className="info-row"><span className="key">Sector</span><span className="val">DRE / Agribusiness</span></div>
                  <div className="info-row"><span className="key">Enterprises</span><span className="val">5 agribusinesses</span></div>
                  <div className="info-row"><span className="key">Installed Capacity</span><span className="val">28.6 kWp</span></div>
                  <div className="info-row"><span className="key">Appliances</span><span className="val">Dryers, grinders, processors</span></div>
                </div>
                <div className="sidebar-card">
                  <h4>Key Results</h4>
                  <div className="info-row"><span className="key">Revenue Growth</span><span className="val">+102%</span></div>
                  <div className="info-row"><span className="key">Production Growth</span><span className="val">+264%</span></div>
                  <div className="info-row"><span className="key">Grid Reduction</span><span className="val">74%</span></div>
                  <div className="info-row"><span className="key">Energy Cost Saving</span><span className="val">~50–65%</span></div>
                </div>
                <div className="sidebar-card">
                  <h4>Project Gallery</h4>
                  <div className="project-gallery">
                    <div className="gallery-grid">
                      <a href="/assets/img/empower.png" className="gallery-item" title="DRE agribusiness deployment – Meghalaya">
                        <img src="/assets/img/empower.png" alt="DRE deployment" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="/assets/img/climate.png" className="gallery-item" title="Solar energy systems in rural enterprises">
                        <img src="/assets/img/climate.png" alt="Solar energy systems" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="/assets/img/image9.jpg" className="gallery-item" title="Rural agribusiness operations">
                        <img src="/assets/img/image9.jpg" alt="Agribusiness operations" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                      <a href="/assets/img/IMG_5889.JPG" className="gallery-item" title="Field visit – enterprise support">
                        <img src="/assets/img/IMG_5889.JPG" alt="Field visit" />
                        <div className="gallery-overlay"><i className="fa fa-search-plus"></i></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-card" style={{ textAlign: 'center' }}>
                  <h4>Interested in this work?</h4>
                  <p style={{ fontSize: '13.5px', color: '#4a6070', marginBottom: '18px', lineHeight: '1.6' }}>Get in touch to learn more about BPSV's DRE solutions for rural agribusinesses.</p>
                  <Link href="/contact" style={{ background: '#2FA7A3', color: '#fff', borderRadius: '999px', padding: '10px 24px', fontWeight: '600', fontSize: '13px', display: 'inline-block', textDecoration: 'none' }}>Contact Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
