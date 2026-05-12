<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/bpsv/config.php';
$pageTitle      = 'CLASP MAF – Scaling DRE through Ecosystem Building — BPSV';
$metaDesc       = 'Using PURE Appliances in Livelihood Enterprises across Assam and Nagaland to create scalable, clean-energy rural business models.';
$currentPage    = 'projects';
$currentProject = 'pure';
$extraCss       = [ASSETS . 'css/project-pages.css'];
$pageStyles     = '.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("/bpsv/assets/img/Sanghamitra%203.png") center/cover no-repeat; }';
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
            <span>CLASP MAF – Scaling DRE</span>
         </div>
         <div class="row">
            <div class="col-md-9">
               <h1>CLASP MAF – Scaling DRE<br>through Ecosystem Building</h1>
               <p style="font-size:17px; color:rgba(255,255,255,0.85); line-height:1.75; max-width:700px; margin-bottom:0;">
                  Using Productive Use of Energy (PURE) Appliances in Livelihood Enterprises
                  across Assam and Nagaland to create scalable, clean-energy rural business models.
               </p>
               <div class="hero-meta">
                  <span class="tag"><i class="fa fa-map-marker" style="margin-right:6px;"></i>Assam &amp; Nagaland, India</span>
                  <span class="tag"><i class="fa fa-users" style="margin-right:6px;"></i>Client: CLASP MAF</span>
                  <span class="tag"><i class="fa fa-calendar" style="margin-right:6px;"></i>Feb 2024 – Jan 2025</span>
                  <span class="tag"><i class="fa fa-bolt" style="margin-right:6px;"></i>DRE / Ecosystem Building</span>
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
               <h2>Accelerating DRE Adoption through <strong>Ecosystem Building</strong></h2>
               <p>This project focused on accelerating the adoption of Distributed Renewable Energy (DRE) solutions by strengthening local ecosystem partners and supporting rural livelihood enterprises with solar-powered productive-use technologies. The initiative combined clean energy deployment with incubation support, enterprise development, and capacity-building interventions to create sustainable and scalable rural business models.</p>

               <div class="stat-grid">
                  <div class="stat-card"><div class="stat-number">USD<br>78,400</div><div class="stat-label">Project Value</div></div>
                  <div class="stat-card"><div class="stat-number">12</div><div class="stat-label">Months Duration</div><div class="stat-sub">Feb 2024 – Jan 2025</div></div>
                  <div class="stat-card"><div class="stat-number">7</div><div class="stat-label">Staff Members</div><div class="stat-sub">Full project duration</div></div>
                  <div class="stat-card"><div class="stat-number">2</div><div class="stat-label">States Covered</div><div class="stat-sub">Assam &amp; Nagaland</div></div>
               </div>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Background</span></div>
               <h2>The <strong>Challenge</strong></h2>
               <p>While direct enterprise support demonstrated strong results in improving productivity and reducing energy costs, scaling these solutions required a broader ecosystem approach. Local NGOs had strong community outreach and field presence but lacked structured incubation systems and technical frameworks needed to support enterprise growth effectively.</p>
               <p>The project addressed this gap by building institutional capabilities while enabling enterprises to adopt productive-use renewable energy technologies — creating the conditions for self-sustaining, long-term scalability.</p>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Implementation</span></div>
               <h2>What We <strong>Did</strong></h2>
               <p>Enterprise sectors supported across the project:</p>
               <div class="vc-tags">
                  <span class="vc-tag"><i class="fa fa-leaf" style="margin-right:6px;"></i>Dairy</span>
                  <span class="vc-tag"><i class="fa fa-industry" style="margin-right:6px;"></i>Puff Rice Processing</span>
                  <span class="vc-tag"><i class="fa fa-pagelines" style="margin-right:6px;"></i>Banana Fiber Production</span>
                  <span class="vc-tag"><i class="fa fa-cog" style="margin-right:6px;"></i>Rice Milling</span>
               </div>
               <ul class="project-list">
                  <li>Established strategic partnerships with <strong>SeSTA</strong> and <strong>YouthNet</strong> as regional incubation partners</li>
                  <li>Selected enterprises across dairy, puff rice processing, banana fiber production, and rice milling value chains</li>
                  <li>Designed and deployed customized solar-powered DRE systems based on individual enterprise requirements</li>
                  <li>Conducted capacity-building programs for NGO partners on incubation methodologies, Human-Centered Design (HCD), and market systems development</li>
                  <li>Developed operational frameworks, enterprise support systems, and monitoring tools for long-term scalability</li>
                  <li>Supported enterprises with technical guidance and business development assistance throughout the project</li>
               </ul>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Outcomes &amp; Impact</span></div>
               <h2>Results That <strong>Matter</strong></h2>
               <p>The project created lasting impact at both enterprise and ecosystem levels — improving livelihoods in the short term while building the institutional foundations for sustained DRE adoption at scale.</p>
               <ul class="project-list">
                  <li>Enabled deployment of DRE systems across dairy, rice milling, puff rice processing, and banana fiber production sectors</li>
                  <li>Improved enterprise productivity through reliable solar-powered operations and reduced machine downtime</li>
                  <li>Reduced dependence on diesel generators and unreliable grid electricity, lowering recurring energy costs</li>
                  <li>Demonstrated scalability of clean energy integration for rural processing enterprises and livelihood businesses</li>
                  <li>Increased production capacity across participating enterprises through efficient and uninterrupted operations</li>
                  <li>Strengthened incubation and enterprise support capabilities of <strong>SeSTA</strong> and <strong>YouthNet</strong> for long-term ecosystem development</li>
               </ul>

               <div class="outcome-highlight">
                  <h3>Key Achievements</h3>
                  <div class="outcome-grid">
                     <div class="outcome-item"><div class="icon"><i class="fa fa-bolt"></i></div><div class="desc">Solar-powered DRE systems deployed across multiple rural enterprise sectors</div></div>
                     <div class="outcome-item"><div class="icon"><i class="fa fa-line-chart"></i></div><div class="desc">Increased production capacity through reliable, uninterrupted clean energy operations</div></div>
                     <div class="outcome-item"><div class="icon"><i class="fa fa-users"></i></div><div class="desc">NGO partners SeSTA &amp; YouthNet equipped with structured incubation methodologies</div></div>
                     <div class="outcome-item"><div class="icon"><i class="fa fa-refresh"></i></div><div class="desc">Scalable ecosystem model established for long-term DRE adoption across the region</div></div>
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
                     <div class="info-row"><span class="key">Client</span><span class="val">CLASP MAF</span></div>
                     <div class="info-row"><span class="key">Project Value</span><span class="val">USD 78,400</span></div>
                     <div class="info-row"><span class="key">Country</span><span class="val">India</span></div>
                     <div class="info-row"><span class="key">Locations</span><span class="val">Assam &amp; Nagaland</span></div>
                     <div class="info-row"><span class="key">Duration</span><span class="val">12 Months</span></div>
                     <div class="info-row"><span class="key">Start Date</span><span class="val">February 2024</span></div>
                     <div class="info-row"><span class="key">Completion</span><span class="val">January 2025</span></div>
                     <div class="info-row"><span class="key">Team</span><span class="val">7 Staff × 12 Months</span></div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Value Chains</h4>
                     <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px;">
                        <span style="background:#e8f8f7;border:1px solid #b8e8e5;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#1a7a7a;">Dairy</span>
                        <span style="background:#e8f8f7;border:1px solid #b8e8e5;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#1a7a7a;">Puff Rice Processing</span>
                        <span style="background:#e8f8f7;border:1px solid #b8e8e5;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#1a7a7a;">Banana Fiber</span>
                        <span style="background:#e8f8f7;border:1px solid #b8e8e5;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#1a7a7a;">Rice Milling</span>
                     </div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Project Gallery</h4>
                     <div class="project-gallery">
                        <div class="gallery-grid">
                           <a href="/bpsv/assets/img/Sanghamitra 3.png" class="gallery-item" title="CLASP MAF – PURE appliances in livelihood enterprises">
                              <img src="/bpsv/assets/img/Sanghamitra 3.png" alt="PURE appliances">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/Dhar Atta.JPG" class="gallery-item" title="Productive-use energy in agri-processing">
                              <img src="/bpsv/assets/img/Dhar Atta.JPG" alt="Agri-processing">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/image6.jpg" class="gallery-item" title="Community enterprise development">
                              <img src="/bpsv/assets/img/image6.jpg" alt="Community enterprise">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/image9.jpg" class="gallery-item" title="Ecosystem building activities">
                              <img src="/bpsv/assets/img/image9.jpg" alt="Ecosystem building">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="sidebar-card" style="text-align:center;">
                     <h4>Interested in this work?</h4>
                     <p style="font-size:13.5px; color:#4a6070; margin-bottom:18px; line-height:1.6;">Get in touch to learn more about BPSV's DRE ecosystem-building approach.</p>
                     <a href="/bpsv/index.php#contact" style="background:#2FA7A3;color:#fff;border-radius:999px;padding:10px 24px;font-weight:600;font-size:13px;display:inline-block;text-decoration:none;">Contact Us</a>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>

<?php require INC . 'footer.php'; ?>
