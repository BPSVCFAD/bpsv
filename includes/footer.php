   <!-- Start Footer -->
   <style>
   /* ── Footer ── */
   .site-footer {
      background: #0a2233;
      color: rgba(255,255,255,0.75);
      font-family: "Poppins", sans-serif;
   }

   /* CTA strip */
   .footer-cta {
      background: linear-gradient(135deg, #1f8f95 0%, #2FA7A3 100%);
      padding: 44px 0;
   }
   .footer-cta .fc-inner {
      display: flex; align-items: center;
      justify-content: space-between; flex-wrap: wrap; gap: 20px;
   }
   .footer-cta h3 {
      font-size: 22px; font-weight: 700;
      color: #fff; margin: 0 0 4px;
   }
   .footer-cta p {
      font-size: 14px; color: rgba(255,255,255,0.85);
      margin: 0; line-height: 1.5;
   }
   .footer-cta .fc-btn {
      background: #fff; color: #1a7a7a;
      border-radius: 999px; padding: 12px 30px;
      font-size: 14px; font-weight: 700;
      text-decoration: none; white-space: nowrap;
      transition: background 0.2s, color 0.2s;
      flex-shrink: 0;
   }
   .footer-cta .fc-btn:hover { background: #0d2d3f; color: #fff; text-decoration: none; }

   /* Main footer body */
   .footer-main { padding: 64px 0 40px; }

   .footer-brand-wrap {
      display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
   }
   .footer-col-brand .f-logo {
      width: 64px; flex-shrink: 0;
   }
   .footer-brand-name {
      font-size: 16px; font-weight: 700;
      color: #fff; line-height: 1.25; letter-spacing: 0.01em;
   }
   .footer-brand-name span { display: block; font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.45); letter-spacing: 0.06em; text-transform: uppercase; margin-top: 2px; }
   .footer-col-brand p {
      font-size: 13.5px; line-height: 1.8;
      color: rgba(255,255,255,0.6); margin-bottom: 24px;
   }
   .f-social { display: flex; gap: 10px; }
   .f-social a {
      width: 36px; height: 36px;
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.65); font-size: 14px;
      text-decoration: none;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
   }
   .f-social a:hover {
      background: #2FA7A3; border-color: #2FA7A3; color: #fff;
   }

   /* Column headings */
   .footer-col h5 {
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: #2FA7A3; margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
   }

   /* Link lists */
   .f-links { list-style: none; padding: 0; margin: 0; }
   .f-links li { margin-bottom: 11px; }
   .f-links a {
      font-size: 13.5px; color: rgba(255,255,255,0.6);
      text-decoration: none;
      display: inline-flex; align-items: center; gap: 7px;
      transition: color 0.2s, gap 0.2s;
   }
   .f-links a::before {
      content: "";
      width: 5px; height: 5px; border-radius: 50%;
      background: #2FA7A3; flex-shrink: 0;
      opacity: 0; transition: opacity 0.2s;
   }
   .f-links a:hover { color: #fff; gap: 10px; }
   .f-links a:hover::before { opacity: 1; }

   /* Contact rows */
   .f-contact-row {
      display: flex; align-items: flex-start; gap: 12px;
      margin-bottom: 16px;
   }
   .f-contact-row .fci {
      width: 32px; height: 32px; flex-shrink: 0;
      background: rgba(47,167,163,0.15);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      color: #2FA7A3; font-size: 13px;
   }
   .f-contact-row .fct {
      font-size: 13px; color: rgba(255,255,255,0.6);
      line-height: 1.55;
   }
   .f-contact-row .fct span {
      display: block; font-size: 11px;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: rgba(255,255,255,0.35); margin-bottom: 2px;
   }
   .f-contact-row .fct a {
      color: rgba(255,255,255,0.7); text-decoration: none;
      transition: color 0.2s;
   }
   .f-contact-row .fct a:hover { color: #2FA7A3; }

   /* Divider */
   .footer-divider {
      border: none; border-top: 1px solid rgba(255,255,255,0.07);
      margin: 0;
   }

   /* Bottom bar */
   .footer-bottom-bar {
      padding: 18px 0;
      background: #071929;
   }
   .footer-bottom-bar .fb-inner {
      display: flex; align-items: center;
      justify-content: space-between; flex-wrap: wrap; gap: 10px;
   }
   .footer-bottom-bar p {
      font-size: 12.5px; color: rgba(255,255,255,0.4);
      margin: 0;
   }
   .footer-bottom-bar .fb-links {
      display: flex; gap: 20px;
   }
   .footer-bottom-bar .fb-links a {
      font-size: 12.5px; color: rgba(255,255,255,0.4);
      text-decoration: none; transition: color 0.2s;
   }
   .footer-bottom-bar .fb-links a:hover { color: #2FA7A3; }

   @media (max-width: 767px) {
      .footer-cta .fc-inner { flex-direction: column; text-align: center; }
      .footer-main { padding: 48px 0 28px; }
      .footer-col { margin-bottom: 36px; }
      .footer-bottom-bar .fb-inner { flex-direction: column; text-align: center; }
   }
   </style>

   <footer class="site-footer">

      <!-- CTA Strip -->
      <!-- <div class="footer-cta">
         <div class="container">
            <div class="fc-inner">
               <div>
                  <h3>Ready to create impact together?</h3>
                  <p>Partner with BPSV for consulting, funding, or on-ground collaboration.</p>
               </div>
               <a href="<?= BASE ?>contact.php" class="fc-btn"><i class="fa fa-paper-plane" style="margin-right:8px;"></i>Get in Touch</a>
            </div>
         </div>
      </div> -->

      <!-- Main Footer -->
      <div class="footer-main">
         <div class="container">
            <div class="row">

               <!-- Brand -->
               <div class="col-md-4 col-sm-12 footer-col footer-col-brand">
                  <div class="footer-brand-wrap">
                     <img src="<?= ASSETS ?>img/logo-light.png" alt="BPSV Logo" class="f-logo">
                     <div class="footer-brand-name">
                        Beyond Purpose
                        <span>Social Ventures</span>
                     </div>
                  </div>
                  <p>
                     Beyond Purpose Social Ventures (BPSV) is a people-first organization dedicated
                     to sustainable rural development through doorstep incubation, DRE solutions,
                     and community ecosystem building.
                  </p>
                  <div class="f-social">
                     <a href="https://www.linkedin.com/company/beyond-purpose-social-ventures" target="_blank" rel="noopener" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                     <a href="https://www.beyondpurpose.in" target="_blank" rel="noopener" title="Website"><i class="fa fa-globe"></i></a>
                     <a href="mailto:info@beyondpurpose.in" title="Email"><i class="fa fa-envelope"></i></a>
                  </div>
               </div>

               <!-- Quick Links -->
               <div class="col-md-2 col-sm-6 footer-col">
                  <h5>Quick Links</h5>
                  <ul class="f-links">
                     <li><a href="<?= BASE ?>index.php">Home</a></li>
                     <li><a href="<?= BASE ?>about.php">About Us</a></li>
                     <li><a href="<?= BASE ?>projects/">Projects</a></li>
                     <li><a href="<?= BASE ?>contact.php">Contact</a></li>
                  </ul>
               </div>

               <!-- Projects -->
               <div class="col-md-3 col-sm-6 footer-col">
                  <h5>Our Projects</h5>
                  <ul class="f-links">
                     <li><a href="<?= BASE ?>projects/efficiency-for-access-enabling-dre-agribusiness/">Efficiency for Access</a></li>
                     <li><a href="<?= BASE ?>projects/using-PURE-appliances-in-the-Livelihoods-Enterprises/">CLASP MAF – Scaling DRE</a></li>
                     <li><a href="<?= BASE ?>projects/doorstep-business-services/">DRIVE – Doorstep Services</a></li>
                     <li><a href="<?= BASE ?>projects/">All Projects</a></li>
                  </ul>
               </div>

               <!-- Contact -->
               <div class="col-md-3 col-sm-12 footer-col">
                  <h5>Contact Us</h5>
                  <div class="f-contact-row">
                     <div class="fci"><i class="fa fa-envelope"></i></div>
                     <div class="fct">
                        <span>Email</span>
                        <a href="mailto:info@beyondpurpose.in">info@beyondpurpose.in</a>
                     </div>
                  </div>
                  <div class="f-contact-row">
                     <div class="fci"><i class="fa fa-phone"></i></div>
                     <div class="fct">
                        <span>Phone</span>
                        <a href="tel:+916009212278">+91 60092 12278</a>
                     </div>
                  </div>
                  <div class="f-contact-row">
                     <div class="fci"><i class="fa fa-map-marker"></i></div>
                     <div class="fct">
                        <span>Region</span>
                        Northeast India &amp; beyond
                     </div>
                  </div>
                  <div class="f-contact-row">
                     <div class="fci"><i class="fa fa-globe"></i></div>
                     <div class="fct">
                        <span>Website</span>
                        <a href="https://www.beyondpurpose.in" target="_blank" rel="noopener">www.beyondpurpose.in</a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      <hr class="footer-divider">

      <!-- Bottom Bar -->
      <div class="footer-bottom-bar">
         <div class="container">
            <div class="fb-inner">
               <p>&copy; 2026 BPSV – Beyond Purpose Social Ventures. All Rights Reserved.</p>
               <div class="fb-links">
                  <a href="<?= BASE ?>about.php">About</a>
                  <a href="<?= BASE ?>projects/">Projects</a>
                  <a href="<?= BASE ?>contact.php">Contact</a>
               </div>
            </div>
         </div>
      </div>

   </footer>
   <!-- End Footer -->

   <script src="<?= ASSETS ?>js/jquery-1.12.4.min.js"></script>
   <script src="<?= ASSETS ?>js/bootstrap.min.js"></script>
   <script src="<?= ASSETS ?>js/equal-height.min.js"></script>
   <script src="<?= ASSETS ?>js/jquery.appear.js"></script>
   <script src="<?= ASSETS ?>js/jquery.easing.min.js"></script>
   <script src="<?= ASSETS ?>js/jquery.magnific-popup.min.js"></script>
   <script src="<?= ASSETS ?>js/modernizr.custom.13711.js"></script>
   <script src="<?= ASSETS ?>js/owl.carousel.min.js"></script>
   <script src="<?= ASSETS ?>js/wow.min.js"></script>
   <script src="<?= ASSETS ?>js/progress-bar.min.js"></script>
   <script src="<?= ASSETS ?>js/isotope.pkgd.min.js"></script>
   <script src="<?= ASSETS ?>js/imagesloaded.pkgd.min.js"></script>
   <script src="<?= ASSETS ?>js/count-to.js"></script>
   <script src="<?= ASSETS ?>js/YTPlayer.min.js"></script>
   <script src="<?= ASSETS ?>js/circle-progress.js"></script>
   <script src="<?= ASSETS ?>js/bootsnav.js"></script>
   <script src="<?= ASSETS ?>js/main.js"></script>
   <?php if (!empty($pageScripts)): ?>
   <script><?= $pageScripts ?></script>
   <?php endif; ?>
</body>
</html>
