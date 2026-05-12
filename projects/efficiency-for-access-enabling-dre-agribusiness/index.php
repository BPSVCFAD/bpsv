<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/bpsv/config.php';
$pageTitle      = 'Efficiency for Access: Enabling DRE Agribusiness — BPSV';
$metaDesc       = 'Demonstrating how Distributed Renewable Energy transforms rural agribusinesses through solar-powered systems and productive-use appliances in Meghalaya.';
$currentPage    = 'projects';
$currentProject = 'efficiency';
$extraCss       = [ASSETS . 'css/project-pages.css'];
$pageStyles     = '.project-hero { background: linear-gradient(135deg, rgba(8,42,58,0.93) 0%, rgba(21,91,104,0.9) 55%, rgba(43,164,170,0.82) 100%), url("/bpsv/assets/img/empower.png") center/cover no-repeat; }';
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
            <span>Efficiency for Access</span>
         </div>
         <div class="row">
            <div class="col-md-9">
               <h1>Efficiency for Access:<br>Enabling DRE Agribusiness</h1>
               <p style="font-size:17px; color:rgba(255,255,255,0.85); line-height:1.75; max-width:680px; margin-bottom:0;">
                  Demonstrating how Distributed Renewable Energy transforms rural agribusinesses
                  through solar-powered systems and productive-use appliances in Meghalaya.
               </p>
               <div class="hero-meta">
                  <span class="tag"><i class="fa fa-map-marker" style="margin-right:6px;"></i>Meghalaya, India</span>
                  <span class="tag"><i class="fa fa-bolt" style="margin-right:6px;"></i>DRE / Agribusiness</span>
                  <span class="tag"><i class="fa fa-leaf" style="margin-right:6px;"></i>Renewable Energy</span>
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
               <h2>Powering Rural Enterprises with <strong>Clean Energy</strong></h2>
               <p>This project demonstrates the transformative impact of Distributed Renewable Energy (DRE) solutions in rural agribusinesses through the integration of solar-powered energy systems and productive-use appliances. The initiative was designed to improve operational efficiency, lower energy costs, and enable reliable production in areas facing energy limitations.</p>

               <div class="stat-grid">
                  <div class="stat-card"><div class="stat-number">5</div><div class="stat-label">Agribusiness Enterprises</div><div class="stat-sub">Pilot deployment</div></div>
                  <div class="stat-card"><div class="stat-number">28.6</div><div class="stat-label">kWp Installed Capacity</div><div class="stat-sub">Renewable energy</div></div>
                  <div class="stat-card"><div class="stat-number">74%</div><div class="stat-label">Reduction in Grid Dependency</div><div class="stat-sub">Average across enterprises</div></div>
                  <div class="stat-card"><div class="stat-number">~50%</div><div class="stat-label">Energy Cost Savings</div><div class="stat-sub">Up to 65% for some enterprises</div></div>
               </div>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Background</span></div>
               <h2>The <strong>Challenge</strong></h2>
               <p>Rural enterprises in Meghalaya faced ongoing challenges due to unreliable grid electricity and heavy dependence on diesel-powered operations. These limitations affected productivity, increased operational expenses, and constrained business growth.</p>
               <p>The project was implemented as a pilot initiative to showcase how renewable energy-powered infrastructure could strengthen rural enterprises and support sustainable economic development — shifting operations from energy-constrained production to demand-driven business models.</p>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Implementation</span></div>
               <h2>What We <strong>Did</strong></h2>
               <p>The project combined hardware deployment with on-ground technical assistance to ensure participating enterprises could fully leverage the new systems:</p>
               <ul class="project-list">
                  <li>Deployment of solar-powered DRE systems across five agribusiness enterprises</li>
                  <li>Installation of PURE appliances including dryers, grinders, and processing equipment</li>
                  <li>Total installed renewable energy capacity of 28.6 kWp</li>
                  <li>Integration of clean energy systems into day-to-day enterprise operations</li>
                  <li>Continuous monitoring of energy consumption and system performance</li>
                  <li>Technical support and operational adaptation assistance for participating enterprises</li>
               </ul>

               <hr class="section-divider">

               <div class="section-label"><span class="label-line"></span><span class="label-text">Outcomes &amp; Impact</span></div>
               <h2>Results That <strong>Matter</strong></h2>
               <p>The results across the five participating enterprises demonstrate the potential of DRE solutions to fundamentally change the economics of rural agribusiness:</p>
               <ul class="project-list">
                  <li>Average monthly revenue increased from <strong>USD 3,058 to USD 6,168</strong></li>
                  <li>Production output increased from <strong>4,548 kg to 16,550 kg</strong></li>
                  <li><strong>74% reduction</strong> in dependence on grid electricity</li>
                  <li>Approximately <strong>50% reduction in energy costs</strong>, with some enterprises achieving up to 65% savings</li>
                  <li>Improved machine utilization and extended operational hours</li>
                  <li>Shift from energy-constrained production to demand-driven business operations</li>
               </ul>

               <div class="outcome-highlight">
                  <h3>Impact at a Glance</h3>
                  <div class="outcome-grid">
                     <div class="outcome-item"><div class="value">2×</div><div class="desc">Average monthly revenue growth<br><small style="opacity:.7;">USD 3,058 → USD 6,168</small></div></div>
                     <div class="outcome-item"><div class="value">3.6×</div><div class="desc">Production output increase<br><small style="opacity:.7;">4,548 kg → 16,550 kg</small></div></div>
                     <div class="outcome-item"><div class="value">74%</div><div class="desc">Reduction in grid electricity dependence</div></div>
                     <div class="outcome-item"><div class="value">≤65%</div><div class="desc">Energy cost savings achieved by top-performing enterprises</div></div>
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
                     <div class="info-row"><span class="key">Location</span><span class="val">Meghalaya, India</span></div>
                     <div class="info-row"><span class="key">Sector</span><span class="val">DRE / Agribusiness</span></div>
                     <div class="info-row"><span class="key">Enterprises</span><span class="val">5 agribusinesses</span></div>
                     <div class="info-row"><span class="key">Installed Capacity</span><span class="val">28.6 kWp</span></div>
                     <div class="info-row"><span class="key">Appliances</span><span class="val">Dryers, grinders, processors</span></div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Key Results</h4>
                     <div class="info-row"><span class="key">Revenue Growth</span><span class="val">+102%</span></div>
                     <div class="info-row"><span class="key">Production Growth</span><span class="val">+264%</span></div>
                     <div class="info-row"><span class="key">Grid Reduction</span><span class="val">74%</span></div>
                     <div class="info-row"><span class="key">Energy Cost Saving</span><span class="val">~50–65%</span></div>
                  </div>
                  <div class="sidebar-card">
                     <h4>Project Gallery</h4>
                     <div class="project-gallery">
                        <div class="gallery-grid">
                           <a href="/bpsv/assets/img/empower.png" class="gallery-item" title="DRE agribusiness deployment – Meghalaya">
                              <img src="/bpsv/assets/img/empower.png" alt="DRE deployment">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/climate.png" class="gallery-item" title="Solar energy systems in rural enterprises">
                              <img src="/bpsv/assets/img/climate.png" alt="Solar energy systems">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/image9.jpg" class="gallery-item" title="Rural agribusiness operations">
                              <img src="/bpsv/assets/img/image9.jpg" alt="Agribusiness operations">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                           <a href="/bpsv/assets/img/IMG_5889.JPG" class="gallery-item" title="Field visit – enterprise support">
                              <img src="/bpsv/assets/img/IMG_5889.JPG" alt="Field visit">
                              <div class="gallery-overlay"><i class="fa fa-search-plus"></i></div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="sidebar-card" style="text-align:center;">
                     <h4>Interested in this work?</h4>
                     <p style="font-size:13.5px; color:#4a6070; margin-bottom:18px; line-height:1.6;">Get in touch to learn more about BPSV's DRE solutions for rural agribusinesses.</p>
                     <a href="/bpsv/index.php#contact" style="background:#2FA7A3;color:#fff;border-radius:999px;padding:10px 24px;font-weight:600;font-size:13px;display:inline-block;text-decoration:none;">Contact Us</a>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>

<?php require INC . 'footer.php'; ?>
