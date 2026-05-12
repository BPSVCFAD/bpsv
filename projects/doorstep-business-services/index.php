<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/bpsv/config.php';
$pageTitle      = 'DRIVE – Doorstep Business Services for Women Foodpreneurs — BPSV';
$metaDesc       = 'DRIVE Aahar Bazaar Challenge – Boosting Income for 100 Women Foodpreneurs through Doorstep Business Services across Assam, Karnataka, and Odisha.';
$currentPage    = 'projects';
$currentProject = 'doorstep';
$extraCss       = [ASSETS . 'css/project-pages.css'];
$pageStyles     = '.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("/bpsv/assets/img/rural.png") center/cover no-repeat; }';
$pageScripts    = "
\$(document).ready(function() {
   \$('.project-gallery').magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery: { enabled: true, navigateByImgClick: true },
      image: { titleSrc: 'title' }
   });
});
";
require INC . 'header.php';
?>

   <!-- Hero -->
   <section class="project-hero">
      <div class="container">
         <div class="breadcrumb-nav">
            <a href="/bpsv/index.php">Home</a>
            <span class="sep">/</span>
            <a href="/bpsv/projects/">Projects</a>
            <span class="sep">/</span>
            <span>DRIVE – Doorstep Business Services</span>
         </div>
         <div class="row">
            <div class="col-md-9">
               <h1>DRIVE Aahar Bazaar Challenge</h1>
               <p style="font-size:17px; color:rgba(255,255,255,0.85); line-height:1.75; max-width:700px; margin-bottom:0;">
                  Boosting Income for 100 Women Foodpreneurs through Doorstep Business Services
                  across Assam, Karnataka, and Odisha (2025–26).
               </p>
               <div class="hero-meta">
                  <span class="tag"><i class="fa fa-map-marker" style="margin-right:6px;"></i>Assam, Karnataka &amp; Odisha</span>
                  <span class="tag"><i class="fa fa-users" style="margin-right:6px;"></i>Client: The Nudge Foundation</span>
                  <span class="tag"><i class="fa fa-calendar" style="margin-right:6px;"></i>Dec 2025 – Aug 2026</span>
                  <span class="tag"><i class="fa fa-mobile" style="margin-right:6px;"></i>AgriTech / Women Empowerment</span>
               </div>
            </div>
         </div>
      </div>
   </section>

   <!-- Main Body -->
   <div class="project-body">
      <div class="container">
         <div class="row">

            <!-- Content column -->
            <div class="col-md-8">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Project Overview</span></div>
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

               <div class="stat-grid">
                  <div class="stat-card"><div class="stat-number">100</div><div class="stat-label">Women Foodpreneurs</div><div class="stat-sub">Initial phase target</div></div>
                  <div class="stat-card"><div class="stat-number">3,000+</div><div class="stat-label">Future Scale Target</div><div class="stat-sub">Entrepreneurs supported</div></div>
                  <div class="stat-card"><div class="stat-number">18</div><div class="stat-label">Doorstep Services</div><div class="stat-sub">Delivered per enterprise</div></div>
                  <div class="stat-card"><div class="stat-number">3</div><div class="stat-label">States</div><div class="stat-sub">Assam, Karnataka, Odisha</div></div>
               </div>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Background</span></div>
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

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Implementation</span></div>
               <h2>How We <strong>Delivered</strong></h2>

               <div class="phase-box">
                  <div class="phase-label">Phase 1</div>
                  <h3>Prototype and System Design</h3>
                  <ul class="project-list">
                     <li>Conducted market research and product category assessments across Assam, Karnataka, and Odisha</li>
                     <li>Developed and tested prototype modules for the DRIVE ERP App</li>
                     <li>Created incubation playbooks, operational tools, and standard operating procedures</li>
                     <li>Recruited and deployed 4–6 field agents to support enterprise onboarding and incubation</li>
                  </ul>
               </div>

               <div class="phase-box">
                  <div class="phase-label">Phase 2</div>
                  <h3>Pilot Deployment</h3>
                  <p style="font-size:14px; color:#4a6070; margin-bottom:14px;">
                     Onboarded women foodpreneurs with annual business turnover of INR 3 lakhs or below. Delivered 18 doorstep incubation services:
                  </p>
                  <div class="services-grid">
                     <span class="service-chip"><i class="fa fa-file-text-o"></i>Business Planning</span>
                     <span class="service-chip"><i class="fa fa-flask"></i>Product Development</span>
                     <span class="service-chip"><i class="fa fa-paint-brush"></i>Branding &amp; Packaging</span>
                     <span class="service-chip"><i class="fa fa-book"></i>Bookkeeping</span>
                     <span class="service-chip"><i class="fa fa-check-square-o"></i>Compliance</span>
                     <span class="service-chip"><i class="fa fa-shopping-cart"></i>Market Linkage</span>
                     <span class="service-chip"><i class="fa fa-money"></i>Access to Finance</span>
                     <span class="service-chip"><i class="fa fa-bolt"></i>DRE Integration</span>
                  </div>
               </div>

               <h3 style="margin-top:32px;">Technology Infrastructure</h3>
               <div class="tech-grid">
                  <div class="tech-item"><i class="fa fa-mobile"></i><span>DRIVE ERP App for field agents and entrepreneurs</span></div>
                  <div class="tech-item"><i class="fa fa-whatsapp"></i><span>WhatsApp integration for communication and coordination</span></div>
                  <div class="tech-item"><i class="fa fa-bar-chart"></i><span>Real-time enterprise monitoring and data tracking</span></div>
                  <div class="tech-item"><i class="fa fa-code"></i><span>Open-source ERP-CRM architecture and digital data collection</span></div>
                  <div class="tech-item"><i class="fa fa-sitemap"></i><span>Data-driven workflows for incubation and operational management</span></div>
               </div>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Outcomes &amp; Impact</span></div>
               <h2>Building a <strong>Scalable Model</strong></h2>
               <p>
                  DRIVE establishes both immediate impact for participating entrepreneurs and the
                  institutional foundations for a self-sustaining, large-scale incubation ecosystem.
               </p>
               <ul class="project-list">
                  <li>Designed a decentralized incubation framework capable of scaling across multiple geographies</li>
                  <li>Developed and validated an assisted-tech model integrating field agents with digital systems</li>
                  <li>Targeted onboarding of <strong>100 women foodpreneurs</strong> in the initial phase, with future scalability to support over <strong>3,000 entrepreneurs</strong></li>
                  <li>Established a commission-based field agent model for long-term operational sustainability beyond grant funding cycles</li>
                  <li>Built an integrated ecosystem connecting producers, suppliers, infrastructure providers, financial institutions, and market access platforms</li>
                  <li>Developed a real-time enterprise monitoring and incubation system using field-level tracking and workflow automation</li>
                  <li>Initiated partnerships with <strong>ONDC</strong>, retail distributors, and ecosystem stakeholders to strengthen market access and enterprise growth opportunities</li>
               </ul>

               <div class="outcome-highlight">
                  <h3>Key Achievements</h3>
                  <div class="outcome-grid">
                     <div class="outcome-item"><div class="value">100</div><div class="desc">Women foodpreneurs onboarded in the initial pilot phase</div></div>
                     <div class="outcome-item"><div class="value">3,000+</div><div class="desc">Entrepreneur scale target through the commission-based agent model</div></div>
                     <div class="outcome-item"><div class="icon"><i class="fa fa-mobile"></i></div><div class="desc">DRIVE ERP platform connecting field agents, enterprises, and support services in real time</div></div>
                     <div class="outcome-item"><div class="icon"><i class="fa fa-link"></i></div><div class="desc">Partnerships with ONDC &amp; retail distributors opening formal market channels for rural producers</div></div>
                  </div>
               </div>

               <div style="margin-top:40px;">
                  <a href="/bpsv/projects/" class="back-link"><i class="fa fa-arrow-left"></i> Back to all projects</a>
               </div>

            </div>

            <!-- Sidebar -->
            <div class="col-md-4">
               <div class="project-sidebar">
                  <div class="sidebar-card">
                     <h4>Project Details</h4>
                     <div class="info-row"><span class="key">Client</span><span class="val">The Nudge Foundation</span></div>
                     <div class="info-row"><span class="key">Project Value</span><span class="val">USD 4,530</span></div>
                     <div class="info-row"><span class="key">Country</span><span class="val">India</span></div>
                     <div class="info-row"><span class="key">Locations</span><span class="val">Assam, Karnataka &amp; Odisha</span></div>
                     <div class="info-row"><span class="key">Duration</span><span class="val">9 Months</span></div>
                     <div class="info-row"><span class="key">Start Date</span><span class="val">December 2025</span></div>
                     <div class="info-row"><span class="key">Completion</span><span class="val">August 2026</span></div>
                     <div class="info-row"><span class="key">Team</span><span class="val">6 Staff × 9 Months</span></div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Scale &amp; Target</h4>
                     <div class="info-row"><span class="key">Pilot Target</span><span class="val">100 entrepreneurs</span></div>
                     <div class="info-row"><span class="key">Future Scale</span><span class="val">3,000+ entrepreneurs</span></div>
                     <div class="info-row"><span class="key">Field Agents</span><span class="val">4–6 agents</span></div>
                     <div class="info-row"><span class="key">Services Delivered</span><span class="val">18 per enterprise</span></div>
                     <div class="info-row"><span class="key">Eligibility</span><span class="val">≤ INR 3L annual turnover</span></div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Project Gallery</h4>
                     <div class="project-gallery">
                        <div class="gallery-grid">
                           <a href="/bpsv/assets/img/rural.png" class="gallery-item" title="Field operations – Doorstep Business Services">
                              <img src="/bpsv/assets/img/rural.png" alt="Field operations">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/empower.png" class="gallery-item" title="Women entrepreneurs empowerment">
                              <img src="/bpsv/assets/img/empower.png" alt="Women entrepreneurs">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/image4.png" class="gallery-item" title="Enterprise incubation activities">
                              <img src="/bpsv/assets/img/image4.png" alt="Enterprise incubation">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/image6.jpg" class="gallery-item" title="Community engagement">
                              <img src="/bpsv/assets/img/image6.jpg" alt="Community engagement">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="sidebar-card" style="text-align:center;">
                     <h4>Interested in this work?</h4>
                     <p style="font-size:13.5px; color:#4a6070; margin-bottom:18px; line-height:1.6;">
                        Learn more about BPSV's DRIVE platform and doorstep incubation model.
                     </p>
                     <a href="/bpsv/index.php#contact" style="background:#2FA7A3;color:#fff;border-radius:999px;padding:10px 24px;font-weight:600;font-size:13px;display:inline-block;text-decoration:none;">Contact Us</a>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>

<?php require INC . 'footer.php'; ?>
