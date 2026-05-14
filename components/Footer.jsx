import Link from 'next/link'

const footerStyles = `
/* ── Footer ── */
.site-footer {
   background: #0a2233;
   color: rgba(255,255,255,0.75);
   font-family: "Poppins", sans-serif;
}

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

.footer-col h5 {
   font-size: 11px; font-weight: 700;
   text-transform: uppercase; letter-spacing: 0.12em;
   color: #2FA7A3; margin-bottom: 20px;
   padding-bottom: 10px;
   border-bottom: 1px solid rgba(255,255,255,0.07);
}

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

.footer-divider {
   border: none; border-top: 1px solid rgba(255,255,255,0.07);
   margin: 0;
}

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
   .footer-main { padding: 48px 0 28px; }
   .footer-col { margin-bottom: 36px; }
   .footer-bottom-bar .fb-inner { flex-direction: column; text-align: center; }
}
`

export default function Footer() {
  return (
    <>
      <footer className="site-footer">

        {/* Main Footer */}
        <div className="footer-main">
          <div className="container">
            <div className="row">

              {/* Brand */}
              <div className="col-md-4 col-sm-12 footer-col footer-col-brand">
                <div className="footer-brand-wrap">
                  <img src="/assets/img/logo-light.png" alt="BPSV Logo" className="f-logo" />
                  <div className="footer-brand-name">
                    Beyond Purpose
                    <span>Social Ventures</span>
                  </div>
                </div>
                <p>
                  Beyond Purpose Social Ventures (BPSV) is a people-first organization dedicated
                  to sustainable rural development through doorstep incubation, DRE solutions,
                  and community ecosystem building.
                </p>
                <div className="f-social">
                  <a href="https://www.linkedin.com/company/beyond-purpose-social-ventures" target="_blank" rel="noopener" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://www.beyondpurpose.in" target="_blank" rel="noopener" title="Website"><i className="fa fa-globe"></i></a>
                  <a href="mailto:info@beyondpurpose.in" title="Email"><i className="fa fa-envelope"></i></a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-md-2 col-sm-6 footer-col">
                <h5>Quick Links</h5>
                <ul className="f-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Projects */}
              <div className="col-md-3 col-sm-6 footer-col">
                <h5>Our Projects</h5>
                <ul className="f-links">
                  <li><Link href="/projects/efficiency-for-access-enabling-dre-agribusiness">Efficiency for Access</Link></li>
                  <li><Link href="/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises">CLASP MAF – Scaling DRE</Link></li>
                  <li><Link href="/projects/doorstep-business-services">DRIVE – Doorstep Services</Link></li>
                  <li><Link href="/projects">All Projects</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-md-3 col-sm-12 footer-col">
                <h5>Contact Us</h5>
                <div className="f-contact-row">
                  <div className="fci"><i className="fa fa-envelope"></i></div>
                  <div className="fct">
                    <span>Email</span>
                    <a href="mailto:info@beyondpurpose.in">info@beyondpurpose.in</a>
                  </div>
                </div>
                <div className="f-contact-row">
                  <div className="fci"><i className="fa fa-phone"></i></div>
                  <div className="fct">
                    <span>Phone</span>
                    <a href="tel:+916009212278">+91 60092 12278</a>
                  </div>
                </div>
                <div className="f-contact-row">
                  <div className="fci"><i className="fa fa-map-marker"></i></div>
                  <div className="fct">
                    <span>Region</span>
                    Northeast India &amp; beyond
                  </div>
                </div>
                <div className="f-contact-row">
                  <div className="fci"><i className="fa fa-globe"></i></div>
                  <div className="fct">
                    <span>Website</span>
                    <a href="https://www.beyondpurpose.in" target="_blank" rel="noopener">www.beyondpurpose.in</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="container">
            <div className="fb-inner">
              <p>&copy; 2026 BPSV – Beyond Purpose Social Ventures. All Rights Reserved.</p>
              <div className="fb-links">
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
