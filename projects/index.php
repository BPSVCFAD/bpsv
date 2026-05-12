<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/bpsv/config.php';
$pageTitle      = 'All Projects — BPSV';
$metaDesc       = 'Explore all projects by Beyond Purpose Social Ventures — DRE agribusiness, women enterprise development, and climate adaptation initiatives across India.';
$currentPage    = 'projects';
$currentProject = '';
$pageStyles     = '
   /* ── Hero ── */
   .projects-hero {
      position: relative;
      background: linear-gradient(135deg, rgba(8,42,58,0.95) 0%, rgba(21,91,104,0.92) 55%, rgba(43,164,170,0.85) 100%),
                  url("/bpsv/assets/img/empower.png") center/cover no-repeat;
      padding: 140px 0 80px;
      color: #fff;
   }
   .projects-hero .breadcrumb-nav {
      font-size: 13px; letter-spacing: 0.04em;
      margin-bottom: 20px; opacity: 0.85;
   }
   .projects-hero .breadcrumb-nav a { color: #80e5e1; text-decoration: none; }
   .projects-hero .breadcrumb-nav a:hover { text-decoration: underline; }
   .projects-hero .breadcrumb-nav .sep { margin: 0 8px; opacity: 0.6; }
   .projects-hero h1 {
      font-size: 48px; font-weight: 700;
      color: #fff; line-height: 1.2; margin-bottom: 16px;
   }
   .projects-hero h1 strong { color: #80e5e1; font-weight: 800; }
   .projects-hero p {
      font-size: 17px; color: rgba(255,255,255,0.85);
      line-height: 1.75; max-width: 620px; margin: 0;
   }
   @media (max-width: 767px) {
      .projects-hero { padding: 110px 0 60px; }
      .projects-hero h1 { font-size: 30px; }
   }

   /* ── Stats Banner ── */
   .stats-banner {
      background: #0d2d3f;
      padding: 48px 0;
      color: #fff;
      text-align: center;
   }
   .stats-row {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
   }
   .stats-banner .stat-item {
      background: #ffffff;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 28px 36px;
      text-align: center;
      min-width: 160px;
      flex: 1;
      max-width: 220px;
   }
   @media (max-width: 767px) {
      .stats-banner .stat-item { padding: 20px 24px; min-width: 130px; }
   }
   .stats-banner .stat-number {
      font-size: 38px; font-weight: 800;
      color: #2FA7A3; line-height: 1;
      font-family: "Poppins", sans-serif;
   }
   .stats-banner .stat-label {
      font-size: 13px;
      color: #041b31;
      margin-top: 6px;
      letter-spacing: 0.04em;
   }

   /* ── Filter Bar ── */
   .filter-bar {
      padding: 44px 0 28px;
      text-align: center;
   }
   .filter-btn {
      display: inline-block;
      margin: 6px 5px;
      padding: 9px 24px;
      border-radius: 999px;
      border: 2px solid #2FA7A3;
      color: #2FA7A3;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      cursor: pointer;
      background: transparent;
      transition: all 0.25s;
      font-family: "Poppins", sans-serif;
      outline: none;
   }
   .filter-btn:hover,
   .filter-btn.active {
      background: #2FA7A3;
      color: #fff;
   }

   /* ── Projects Grid ── */
   .projects-grid-section {
      padding: 0 0 80px;
      background: #f4fbfb;
   }
   .projects-grid {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -12px;
   }
   .project-card-wrap {
      padding: 0 12px;
      margin-bottom: 24px;
      width: 33.333%;
      box-sizing: border-box;
      transition: opacity 0.3s;
   }
   @media (max-width: 991px) { .project-card-wrap { width: 50%; } }
   @media (max-width: 600px)  { .project-card-wrap { width: 100%; } }

   /* ── Project Card ── */
   .project-card {
      background: #fff;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(13,45,63,0.08);
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: transform 0.28s, box-shadow 0.28s;
   }
   .project-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 44px rgba(47,167,163,0.18);
   }
   .card-thumb {
      position: relative;
      overflow: hidden;
      height: 215px;
   }
   .card-thumb img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
   }
   .project-card:hover .card-thumb img {
      transform: scale(1.06);
   }
   .card-status {
      position: absolute;
      top: 14px; right: 14px;
      padding: 5px 14px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
   }
   .card-status.status-active    { background: #2FA7A3; color: #fff; }
   .card-status.status-completed { background: rgba(13,45,63,0.72); color: #fff; }
   .card-status.status-award     { background: #e8a020; color: #fff; }
   .card-body {
      padding: 24px 24px 22px;
      flex: 1;
      display: flex;
      flex-direction: column;
   }
   .card-category {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #2FA7A3;
      margin-bottom: 10px;
   }
   .project-card h3 {
      font-size: 17px;
      font-weight: 700;
      color: #0d2d3f;
      line-height: 1.45;
      margin: 0 0 12px;
   }
   .project-card p {
      font-size: 14px;
      color: #556677;
      line-height: 1.75;
      flex: 1;
      margin-bottom: 18px;
   }
   .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
      margin-bottom: 20px;
   }
   .card-meta-item {
      font-size: 12px;
      color: #667788;
      display: flex;
      align-items: center;
      gap: 5px;
   }
   .card-meta-item i { color: #2FA7A3; font-size: 11px; }
   .card-link {
      display: inline-block;
      padding: 9px 22px;
      border-radius: 999px;
      background: #2FA7A3;
      color: #fff !important;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none !important;
      align-self: flex-start;
      transition: background 0.22s;
   }
   .card-link:hover { background: #1d8a87; }
   .card-link-ghost {
      display: inline-block;
      padding: 9px 22px;
      border-radius: 999px;
      border: 1.5px solid #c8d8e0;
      color: #8899aa;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      align-self: flex-start;
      cursor: default;
   }

   /* ── CTA ── */
   .cta-section {
      background: #fff;
      padding: 64px 0;
      text-align: center;
      border-top: 1px solid #d9eeee;
   }
   .cta-section h2 {
      font-size: 28px; font-weight: 700; color: #0d2d3f;
      margin-bottom: 14px;
   }
   .cta-section h2 strong { color: #2FA7A3; }
   .cta-section p {
      color: #556677; max-width: 520px;
      margin: 0 auto 28px; line-height: 1.75; font-size: 15px;
   }
   .cta-btn {
      background: #2FA7A3; color: #fff !important;
      border-radius: 999px; padding: 13px 36px;
      font-weight: 700; font-size: 14px;
      display: inline-block; text-decoration: none !important;
      transition: background 0.22s;
   }
   .cta-btn:hover { background: #1d8a87; }

   /* ── No results message ── */
   #noResults {
      display: none;
      text-align: center;
      padding: 48px 20px;
      color: #889;
      font-size: 15px;
      width: 100%;
   }
';
$pageScripts = "
$(document).ready(function () {
   $('.filter-btn').on('click', function () {
      var filter = \$(this).data('filter');
      \$('.filter-btn').removeClass('active');
      \$(this).addClass('active');
      if (filter === 'all') {
         \$('.project-card-wrap').show();
      } else {
         \$('.project-card-wrap').hide();
         \$('.project-card-wrap[data-category=\"' + filter + '\"]').show();
      }
      var visible = \$('.project-card-wrap:visible').length;
      \$('#noResults').toggle(visible === 0);
   });
});
";
require INC . 'header.php';
?>

   <!-- ── Hero ── -->
   <section class="projects-hero">
      <div class="container">
         <div class="breadcrumb-nav">
            <a href="/bpsv/index.php">Home</a>
            <span class="sep">/</span>
            <span>Projects</span>
         </div>
         <h1>Our <strong>Projects</strong></h1>
         <p>
            BPSV's portfolio spans Distributed Renewable Energy, agribusiness transformation,
            women enterprise development, and climate adaptation — co-designed with strategic
            partners across India.
         </p>
      </div>
   </section>

   <!-- ── Stats Banner ── -->
   <div class="stats-banner">
      <div class="container">
         <div class="stats-row">
            <div class="stat-item">
               <div class="stat-number">5+</div>
               <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
               <div class="stat-number">6</div>
               <div class="stat-label">States Covered</div>
            </div>
            <div class="stat-item">
               <div class="stat-number">100+</div>
               <div class="stat-label">Enterprises Supported</div>
            </div>
            <div class="stat-item">
               <div class="stat-number">4</div>
               <div class="stat-label">Funding Partners</div>
            </div>
         </div>
      </div>
   </div>

   <!-- ── Filter + Grid ── -->
   <div class="projects-grid-section">
      <div class="container">

         <!-- Filter Buttons -->
         <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="dre">DRE / Renewable Energy</button>
            <button class="filter-btn" data-filter="women">Women Empowerment</button>
            <button class="filter-btn" data-filter="climate">Climate Adaptation</button>
         </div>

         <!-- Cards -->
         <div class="projects-grid" id="projectsGrid">

            <!-- Card: DRIVE -->
            <div class="project-card-wrap" data-category="women">
               <div class="project-card">
                  <div class="card-thumb">
                     <img src="/bpsv/assets/img/rural.png" alt="DRIVE – Doorstep Business Services for Women Foodpreneurs">
                     <span class="card-status status-active">Active</span>
                  </div>
                  <div class="card-body">
                     <div class="card-category">AgriTech &nbsp;·&nbsp; Women Empowerment</div>
                     <h3>DRIVE – Doorstep Business Services for Women Foodpreneurs</h3>
                     <p>Agent-led incubation delivering 18 doorstep services to 100 women foodpreneurs in Assam, Karnataka &amp; Odisha to bridge the last-mile incubation gap.</p>
                     <div class="card-meta">
                        <span class="card-meta-item"><i class="fa fa-map-marker"></i> Assam, Karnataka &amp; Odisha</span>
                        <span class="card-meta-item"><i class="fa fa-users"></i> The Nudge Foundation</span>
                        <span class="card-meta-item"><i class="fa fa-calendar"></i> Dec 2025 – Aug 2026</span>
                     </div>
                     <a href="/bpsv/projects/doorstep-business-services/" class="card-link">View Project &rarr;</a>
                  </div>
               </div>
            </div>

            <!-- Card: Efficiency for Access -->
            <div class="project-card-wrap" data-category="dre">
               <div class="project-card">
                  <div class="card-thumb">
                     <img src="/bpsv/assets/img/empower.png" alt="Efficiency for Access: Enabling DRE Agribusiness">
                     <span class="card-status status-active">Active</span>
                  </div>
                  <div class="card-body">
                     <div class="card-category">DRE &nbsp;·&nbsp; Agribusiness &nbsp;·&nbsp; Renewable Energy</div>
                     <h3>Efficiency for Access: Enabling DRE Agribusiness</h3>
                     <p>Demonstrating how solar-powered Distributed Renewable Energy transforms rural agribusinesses through productive-use appliances in Meghalaya.</p>
                     <div class="card-meta">
                        <span class="card-meta-item"><i class="fa fa-map-marker"></i> Meghalaya, India</span>
                        <span class="card-meta-item"><i class="fa fa-users"></i> CLASP</span>
                        <span class="card-meta-item"><i class="fa fa-calendar"></i> Apr 2024 – Dec 2025</span>
                     </div>
                     <a href="/bpsv/projects/efficiency-for-access-enabling-dre-agribusiness/" class="card-link">View Project &rarr;</a>
                  </div>
               </div>
            </div>

            <!-- Card: CLASP MAF -->
            <div class="project-card-wrap" data-category="dre">
               <div class="project-card">
                  <div class="card-thumb">
                     <img src="/bpsv/assets/img/Sanghamitra%203.png" alt="CLASP MAF – Scaling DRE through Ecosystem Building">
                     <span class="card-status status-completed">Completed</span>
                  </div>
                  <div class="card-body">
                     <div class="card-category">DRE &nbsp;·&nbsp; Ecosystem Building</div>
                     <h3>CLASP MAF – Scaling DRE through Ecosystem Building</h3>
                     <p>Using PURE appliances in livelihood enterprises across Assam &amp; Nagaland, strengthening local NGO incubation capacity to scale clean-energy rural businesses.</p>
                     <div class="card-meta">
                        <span class="card-meta-item"><i class="fa fa-map-marker"></i> Assam &amp; Nagaland</span>
                        <span class="card-meta-item"><i class="fa fa-users"></i> CLASP MAF</span>
                        <span class="card-meta-item"><i class="fa fa-calendar"></i> Feb 2024 – Jan 2025</span>
                     </div>
                     <a href="/bpsv/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises/" class="card-link">View Project &rarr;</a>
                  </div>
               </div>
            </div>

            <!-- Card: Climate Adaptation -->
            <div class="project-card-wrap" data-category="climate">
               <div class="project-card">
                  <div class="card-thumb">
                     <img src="/bpsv/assets/img/climate.png" alt="Climate Adaptation Initiative">
                     <span class="card-status status-completed">Completed</span>
                  </div>
                  <div class="card-body">
                     <div class="card-category">Climate Adaptation &nbsp;·&nbsp; Renewable Energy</div>
                     <h3>Climate Adaptation Initiative</h3>
                     <p>Community-based climate adaptation through renewable energy solutions and rural enterprise strengthening in Dharwad, Karnataka — implemented with SELCO Foundation.</p>
                     <div class="card-meta">
                        <span class="card-meta-item"><i class="fa fa-map-marker"></i> Dharwad, Karnataka</span>
                        <span class="card-meta-item"><i class="fa fa-users"></i> SELCO Foundation</span>
                        <span class="card-meta-item"><i class="fa fa-calendar"></i> Jan – Mar 2025</span>
                     </div>
                     <span class="card-link-ghost">Details Coming Soon</span>
                  </div>
               </div>
            </div>

            <!-- Card: Delta Prize -->
            <div class="project-card-wrap" data-category="women">
               <div class="project-card">
                  <div class="card-thumb">
                     <img src="/bpsv/assets/img/rural.png" alt="Delta Prize – Aahar Bazaar">
                     <span class="card-status status-award">Recognition</span>
                  </div>
                  <div class="card-body">
                     <div class="card-category">Recognition &nbsp;·&nbsp; Rural Enterprise</div>
                     <h3>Delta Prize — Aahar Bazaar</h3>
                     <p>National recognition for BPSV's innovative approach to rural enterprise development and market linkages, highlighting the impact-driven methodology of the Aahar Bazaar challenge.</p>
                     <div class="card-meta">
                        <span class="card-meta-item"><i class="fa fa-trophy"></i> Award / Recognition</span>
                     </div>
                     <span class="card-link-ghost">Details Coming Soon</span>
                  </div>
               </div>
            </div>

            <div id="noResults">No projects found for this filter.</div>

         </div><!-- /.projects-grid -->
      </div>
   </div>
   <!-- End Filter + Grid -->

   <!-- ── CTA ── -->
   <div class="cta-section">
      <div class="container">
         <h2>Interested in <strong>Working Together?</strong></h2>
         <p>
            BPSV partners with development organizations, foundations, and enterprises to co-design
            and implement high-impact rural development programmes.
         </p>
         <a href="/bpsv/index.php#contact" class="cta-btn">Get in Touch</a>
      </div>
   </div>

<?php require INC . 'footer.php'; ?>
