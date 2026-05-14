'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONTACT_EMAIL = 'info@beyondpurpose.in'

function mailtoFallback(formData) {
  const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`)
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nOrganization: ${formData.organization || 'N/A'}\nInterest: ${formData.interest || 'N/A'}\n\nMessage:\n${formData.comments}`
  )
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
  const [formStatus, setFormStatus] = useState(null)

  useEffect(() => {
    let $immortalCarousel = null

    function init() {
      const $ = window.$
      if (!$) return

      // Hide preloader
      $('.se-pre-con').fadeOut('slow')

      // Hero carousel
      $('#bootcarousel').carousel({ interval: 5000 })

      // Banner animations
      function doAnimations(elems) {
        const animEndEv = 'webkitAnimationEnd animationend'
        elems.each(function () {
          const $this = $(this)
          const animationType = $this.data('animation')
          $this.addClass(animationType).one(animEndEv, function () {
            $this.removeClass(animationType)
          })
        })
      }
      $immortalCarousel = $('.animate_text')
      doAnimations($immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']"))
      $immortalCarousel.on('slide.bs.carousel.home', function (e) {
        doAnimations($(e.relatedTarget).find("[data-animation ^= 'animated']"))
      })

      // OWL carousels
      if ($.fn.owlCarousel) {
        $('.services-carousel-4-col').owlCarousel({
          loop: false, margin: 30, nav: true, dots: false, autoplay: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } }
        })
        $('.portfolio-carousel-3-col').owlCarousel({
          loop: false, margin: 1, nav: true, dots: false, autoplay: true,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
        })
        $('.testimonial-carousel').owlCarousel({
          loop: false, nav: false, dots: true, autoplay: true, items: 1,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        })
      }

      // Magnific Popup
      if ($.fn.magnificPopup) {
        $('.magnific-mix-gallery').each(function () {
          const $container = $(this)
          const $imageLinks = $container.find('.item')
          const items = []
          $imageLinks.each(function () {
            items.push({ src: $(this).attr('href'), type: 'image', title: $(this).data('title') })
          })
          $imageLinks.magnificPopup({
            mainClass: 'mfp-fade', items, type: 'image',
            gallery: { enabled: true },
            callbacks: {
              beforeOpen: function () {
                const index = $imageLinks.index(this.st.el)
                if (index !== -1) this.goTo(index)
              }
            }
          })
        })
      }

      // WOW
      if (window.WOW) new window.WOW({ mobile: true, live: true }).init()

      // Count-to
      if ($.fn.countTo) {
        $('.timer').countTo()
        if ($.fn.appear) {
          $('.fun-fact').appear(function () { $('.timer').countTo() }, { accY: -100 })
        }
      }
    }

    if (window.$) {
      init()
    } else {
      window.addEventListener('jqueryready', init, { once: true })
    }

    return () => {
      window.removeEventListener('jqueryready', init)
      if ($immortalCarousel) $immortalCarousel.off('slide.bs.carousel.home')
      const $ = window.$
      if ($ && $.fn.owlCarousel) {
        ['.services-carousel-4-col', '.portfolio-carousel-3-col', '.testimonial-carousel'].forEach(sel => {
          const $el = $(sel)
          if ($el.length && $el.data('owl.carousel')) $el.owlCarousel('destroy')
        })
      }
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const payload = new FormData()
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v))
      const res = await fetch('/api/contact', { method: 'POST', body: payload })
      if (res.ok) {
        const json = await res.json()
        if (json.success) {
          setFormStatus('success')
          setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
        } else {
          setFormStatus('error')
        }
      } else {
        mailtoFallback(formData)
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
      }
    } catch {
      mailtoFallback(formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', organization: '', interest: '', comments: '' })
    }
  }

  return (
    <>
      <style>{`.banner-area .carousel-control { z-index: 100 !important; }`}</style>

      {/* Start Banner */}
      <div className="banner-area banner-redesign bg-gradient bg-theme-responsive bg-center text-light" style={{ backgroundImage: 'url(/assets/img/shape/banner.png)' }}>
        <div id="bootcarousel" className="carousel light-bg top-padding text-dark slide animate_text">
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <div className="row">
                  <div className="double-items">
                    <div className="col-md-7">
                      <div className="info">
                        <h2 data-animation="animated slideInLeft">People-first Sustainable Development. Doorstep Incubation for Entrepreneurs</h2>
                        <p className="banner-copy" data-animation="animated fadeInLeft">Hands-on support to build strong and sustainable local businesses run by women and the youth.</p>
                        <button
                          data-animation="animated fadeInDown"
                          className="btn circle btn-light border btn-md"
                          onClick={() => scrollTo('portfolio')}
                          style={{ cursor: 'pointer' }}
                        >
                          Our Projects
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="thumb" data-animation="animated slideInRight">
                        <img src="/assets/img/image4.png" alt="BPSV community development work" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <div className="row">
                  <div className="double-items">
                    <div className="col-md-7">
                      <div className="info">
                        <h2 data-animation="animated slideInLeft">Expanding Access to Clean Energy</h2>
                        <p className="banner-copy" data-animation="animated fadeInLeft">Distributable renewable energy solutions for doubling production and revenue</p>
                        <button
                          data-animation="animated fadeInDown"
                          className="btn circle btn-light border btn-md"
                          onClick={() => scrollTo('about')}
                          style={{ cursor: 'pointer' }}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="thumb" data-animation="animated slideInRight">
                        <img src="/assets/img/image6.jpg" alt="BPSV rural enterprise projects" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <div className="row">
                  <div className="double-items">
                    <div className="col-md-7">
                      <div className="info">
                        <h2 data-animation="animated slideInLeft">Agri Waste Fibre Processing for Rural Livelihoods</h2>
                        <p className="banner-copy" data-animation="animated fadeInLeft">Central processing facility for banana and pineapple fibre for use by packaging and garment industries. Aggregation through Integrated Village Cooperative Societies (IVCS), Meghalaya</p>
                        <button
                          data-animation="animated fadeInDown"
                          className="btn circle btn-light border btn-md"
                          onClick={() => scrollTo('about')}
                          style={{ cursor: 'pointer' }}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="thumb" data-animation="animated slideInRight">
                        <img src="/assets/img/image9.jpg" alt="BPSV rural enterprise projects" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <a
            className="left carousel-control light"
            href="#bootcarousel"
            onClick={(e) => { e.preventDefault(); window.$('#bootcarousel').carousel('prev') }}
          >
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control light"
            href="#bootcarousel"
            onClick={(e) => { e.preventDefault(); window.$('#bootcarousel').carousel('next') }}
          >
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End Banner */}

      {/* Start About Us Area */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-text">
            <div className="section-label">
              <span className="label-line"></span>
              <span className="label-text">WHO WE ARE</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">Beyond Purpose <span className="highlight">Social Venture</span></h2>
            <p className="intro-text">
              A pioneering social enterprise dedicated to building sustainable, resilient communities across India through innovative market-based solutions.
            </p>
            <div className="content-block">
              <p>
                We specialize in delivering <strong>doorstep incubation services</strong> for micro and nano entrepreneurs in rural areas, with a concentrated focus on integrating Distributed Renewable Energy (DRE), digital technologies, and blended financial services directly into local economies.
              </p>
            </div>
            <div className="focus-areas">
              <h3 className="focus-title">Our Core Focus</h3>
              <div className="focus-list">
                <div className="focus-item">
                  <div className="focus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="focus-content">
                    <h4>Doorstep Incubation</h4>
                    <p>Field-agent-led entrepreneurial support tailored specifically for local community needs and contexts.</p>
                  </div>
                </div>
                <div className="focus-item">
                  <div className="focus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 019 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 019 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 01-.53-1.28l3-3a.75.75 0 011.06 0l3 3A.75.75 0 0115 13.5h-1.622a2.251 2.251 0 01-2.122-1.5H15A.75.75 0 0115 9h-3.622a2.251 2.251 0 01-2.122-1.5H15A.75.75 0 0115 6H9a.75.75 0 010-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="focus-content">
                    <h4>Clean Energy &amp; Digital Access</h4>
                    <p>Enabling sustainable livelihoods through renewable energy solutions and digital empowerment tools.</p>
                  </div>
                </div>
                <div className="focus-item">
                  <div className="focus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  </div>
                  <div className="focus-content">
                    <h4>Community-Led Impact</h4>
                    <p>Strengthening rural ecosystems by unlocking economic opportunities and fostering inclusive growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="region-highlight">
              <div className="focus-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path fillRule="evenodd" d="M11.54 22.351a.75.75 0 00.92 0c1.06-.824 4.29-3.534 6.17-6.627 1.13-1.863 1.87-3.7 1.87-5.349A7.5 7.5 0 0012 3a7.5 7.5 0 00-7.5 7.375c0 1.649.74 3.486 1.87 5.349 1.88 3.093 5.11 5.803 6.17 6.627zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="region-text">
                <p><strong>Rooted in Northeast India:</strong> We collaborate deeply with communities across the region to create scalable, inclusive development models that respect and amplify local knowledge and resources.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <img
                src="/assets/img/Dhar Atta.JPG"
                alt="Community development in rural India - BPSV team working with local entrepreneurs"
                loading="lazy"
              />
              <div className="image-overlay">
                <span>Building Sustainable Futures Together</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Area */}

      {/* Start Services Area */}
      <div id="services" className="services-area icon-multi-color carousel-shadow default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="site-heading text-center">
                <h4>Our Expertise</h4>
                <h2>Core <strong>Services</strong></h2>
                <p>
                  BPSV provides integrated solutions for sustainable rural development through technology,
                  community engagement, and capacity building.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="services-items text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="services-carousel-4-col owl-carousel owl-theme">
                  <div className="item">
                    <div className="icon"><i className="flaticon-architect"></i></div>
                    <h4>CFAD Ecosystem Building</h4>
                    <p>Community-driven development centers that accelerate local enterprise growth through training, resources, and market linkages.</p>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="flaticon-software"></i></div>
                    <h4>DRE Solutions</h4>
                    <p>Decentralized Renewable Energy systems for agri-processing, replacing diesel with sustainable solar-powered alternatives.</p>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="flaticon-testing"></i></div>
                    <h4>Enterprise Support</h4>
                    <p>End-to-end support for rural entrepreneurs including technology implementation, maintenance services, and business development.</p>
                  </div>
                  <div className="item">
                    <div className="icon"><i className="flaticon-update"></i></div>
                    <h4>Consulting &amp; Evaluation</h4>
                    <p>Monitoring, evaluation, and consulting services for development organizations and government bodies on sustainable rural development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Services Area */}

      {/* Start Fun Fact Area */}
      <div className="fun-fact-area text-center default-padding">
        <div className="container">
          <div className="fun-fact-items">
            <div className="row">
              <div className="col-md-4 item">
                <div className="fun-fact">
                  <i className="flaticon-support"></i>
                  <div className="timer" data-to="3" data-speed="5000">3</div>
                  <span className="medium">Active Projects</span>
                </div>
              </div>
              <div className="col-md-4 item">
                <div className="fun-fact">
                  <i className="flaticon-planet-earth"></i>
                  <div className="timer" data-to="4" data-speed="5000">4</div>
                  <span className="medium">States of Operation</span>
                </div>
              </div>
              <div className="col-md-4 item">
                <div className="fun-fact">
                  <i className="flaticon-countdown"></i>
                  <div className="timer" data-to="25" data-speed="5000">25</div>
                  <span className="medium">number of enterprises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Fun Fact Area */}

      {/* Start Work Process Area */}
      <div id="overview" className="process-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6 thumb">
              <img src="/assets/img/5.png" alt="CFAD Approach Illustration" />
            </div>
            <div className="col-md-6 info">
              <h4>Our Methodology</h4>
              <h2>How CFAD <strong>Works</strong></h2>
              <div className="tab-navigation text-center">
                <ul className="nav nav-pills">
                  <li className="active"><a data-toggle="tab" href="#tab1" aria-expanded="true">Incubation</a></li>
                  <li><a data-toggle="tab" href="#tab2" aria-expanded="false">DRE</a></li>
                  <li><a data-toggle="tab" href="#tab3" aria-expanded="false">Digital</a></li>
                </ul>
              </div>
              <div className="tab-content">
                <div id="tab1" className="tab-pane fade active in">
                  <div className="info">
                    <p>We identify local challenges and incubate community-led ideas through needs assessment, mentoring, and ecosystem support.</p>
                    <ul>
                      <li><h5>Problem Identification</h5>Understanding community needs and local opportunities</li>
                      <li><h5>Idea Incubation</h5>Supporting early-stage solutions and social enterprises</li>
                      <li><h5>Capacity Building</h5>Strengthening skills, leadership, and governance</li>
                    </ul>
                  </div>
                </div>
                <div id="tab2" className="tab-pane fade">
                  <div className="info">
                    <p>We deploy decentralized renewable energy solutions to enable livelihoods, essential services, and local enterprises.</p>
                    <ul>
                      <li><h5>Clean Energy Solutions</h5>Solar-powered systems for productive and community use</li>
                      <li><h5>Enterprise Enablement</h5>Linking energy access to income generation</li>
                      <li><h5>Local Operations</h5>Training communities for ownership and maintenance</li>
                    </ul>
                  </div>
                </div>
                <div id="tab3" className="tab-pane fade">
                  <div className="info">
                    <p>We integrate digital tools to improve access, transparency, and scalability of community programs.</p>
                    <ul>
                      <li><h5>Digital Platforms</h5>Tools for monitoring, reporting, and service delivery</li>
                      <li><h5>Data-Driven Decisions</h5>Using insights to improve outcomes and impact</li>
                      <li><h5>Scalable Models</h5>Replicable frameworks for wider adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Work Process Area */}

      {/* Start Portfolio */}
      <div id="portfolio" className="portfolio-area default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="site-heading text-center">
                <h4>Our Impact</h4>
                <h2>Current <strong>Projects</strong></h2>
                <p>BPSV's work is funded through strategic partnerships with development organizations focused on sustainable rural development and climate adaptation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="portfolio-items text-light magnific-mix-gallery masonary portfolio-carousel-3-col owl-carousel owl-theme">
            <div className="pf-item">
              <div className="item-effect">
                <div className="thumb">
                  <img src="/assets/img/empower.png" alt="Empowering Rural Entrepreneurs" />
                  <a href="/assets/img/empower.png" className="item popup-link"><i className="fa fa-plus"></i></a>
                </div>
                <div className="icons">
                  <h4><Link href="/projects/efficiency-for-access-enabling-dre-agribusiness">Empowering Rural Entrepreneurs</Link></h4>
                  <div className="cat">
                    <Link href="/projects/efficiency-for-access-enabling-dre-agribusiness">Meghalaya (Apr 2024 - Dec 2025) — CLASP</Link>
                  </div>
                  <p>Diesel replacement of agri-processing machinery with sustainable solar-powered alternatives.</p>
                </div>
              </div>
            </div>
            <div className="pf-item">
              <div className="item-effect">
                <div className="thumb">
                  <img src="/assets/img/Sanghamitra 3.png" alt="CFAD Expansion" />
                  <a href="/assets/img/Sanghamitra 3.png" className="item popup-link"><i className="fa fa-plus"></i></a>
                </div>
                <div className="icons">
                  <h4><a href="#!">CFAD Expansion</a></h4>
                  <div className="cat"><a href="#!">Assam &amp; Nagaland (Feb 2024 - Jan 2025) — CLASP</a></div>
                  <p>Scaling up the Centre for Accelerated Development through ecosystem building in Northeast India.</p>
                </div>
              </div>
            </div>
            <div className="pf-item">
              <div className="item-effect">
                <div className="thumb">
                  <img src="/assets/img/climate.png" alt="SELCO Foundation" />
                  <a href="/assets/img/climate.png" className="item popup-link"><i className="fa fa-plus"></i></a>
                </div>
                <div className="icons">
                  <h4><a href="#!">Climate Adaptation Initiative</a></h4>
                  <div className="cat"><a href="#!">Dharwad, Karnataka (Jan - Mar 2025) — SELCO Foundation</a></div>
                  <p>Community-based climate adaptation through renewable energy solutions.</p>
                </div>
              </div>
            </div>
            <div className="pf-item">
              <div className="item-effect">
                <div className="thumb">
                  <img src="/assets/img/rural.png" alt="Delta Prize - Aahar Bazaar" />
                  <a href="/assets/img/rural.png" className="item popup-link"><i className="fa fa-plus"></i></a>
                </div>
                <div className="icons">
                  <h4><a href="#!">Delta Prize — Aahar Bazaar</a></h4>
                  <div className="cat"><a href="#!">Recognition / Initiative</a></div>
                  <p>Recognition for innovative approach to rural enterprise development and market linkages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      {/* End Portfolio */}

      {/* Start Testimonials Area */}
      <div className="testimonials-area default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="site-heading text-center">
                <h4>Strategic Partnerships</h4>
                <h2>Our <strong style={{ color: 'beige' }}>Collaborators</strong></h2>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="testimonial-items testimonial-carousel owl-carousel owl-theme">
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="/assets/img/clasplogo.png" alt="CLASP Partnership" />
                  </div>
                  <div className="col-md-7 info">
                    <i className="ti-hand-open"></i>
                    <h4>CLASP</h4>
                    <span>Collaborative Labeling and Appliance Standards Program</span>
                    <p>Primary funding partner for CFAD expansion and rural entrepreneur projects. Supporting our work in Northeast India with sustainable energy solutions and enterprise development initiatives.</p>
                    <Link href="/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises" style={{ display: 'inline-block', marginTop: '10px', color: '#fff', fontWeight: '600', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.03em' }}>
                      Learn More <i className="fa fa-arrow-right" style={{ fontSize: '11px', color: '#fff' }}></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="/assets/img/selco.png" alt="SELCO Foundation Partnership" />
                  </div>
                  <div className="col-md-7 info">
                    <i className="ti-hand-open"></i>
                    <h4>SELCO Foundation</h4>
                    <span>Renewable Energy &amp; Climate Adaptation</span>
                    <p>Supporting climate adaptation work in Karnataka through community-based renewable energy solutions. Partnering for sustainable rural development and climate resilience initiatives.</p>
                    <Link href="/projects" style={{ display: 'inline-block', marginTop: '10px', color: '#fff', fontWeight: '600', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.03em' }}>
                      Learn More <i className="fa fa-arrow-right" style={{ fontSize: '11px', color: '#fff' }}></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="/assets/img/deltalogo.png" alt="Delta Prize - Aahar Bazaar Project" />
                  </div>
                  <div className="col-md-7 info">
                    <i className="ti-hand-open"></i>
                    <h4>Delta Prize</h4>
                    <span>Aahar Bazaar Project</span>
                    <p>Aahar Bazaar focuses on strengthening local food systems by connecting small producers with markets, improving access to affordable nutrition, and promoting sustainable livelihoods at the community level.</p>
                    <Link href="/projects/doorstep-business-services" style={{ display: 'inline-block', marginTop: '10px', color: '#fff', fontWeight: '600', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.03em' }}>
                      Learn More <i className="fa fa-arrow-right" style={{ fontSize: '11px', color: '#fff' }}></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="/assets/img/unitedwayhyderabad.png" alt="United Way Hyderabad" />
                  </div>
                  <div className="col-md-7 info">
                    <i className="ti-hand-open"></i>
                    <h4>United Way Hyderabad</h4>
                    <span>Community Impact Initiatives</span>
                    <p>United Way Hyderabad works to improve lives by mobilizing communities and resources to address critical issues in education, health, and livelihood, creating sustainable and inclusive development for underserved populations.</p>
                    <Link href="/projects" style={{ display: 'inline-block', marginTop: '10px', color: '#fff', fontWeight: '600', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.03em' }}>
                      Learn More <i className="fa fa-arrow-right" style={{ fontSize: '11px', color: '#fff' }}></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials Area */}

      {/* Start Contact Area */}
      <div id="contact" className="contact-area default-padding">
        <div className="container">
          <div className="contact-items">
            <div className="row">
              <div className="col-md-6 faq">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div className="acd-items acd-arrow">
                  <div className="panel-group symb" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#ac1">
                            <strong>01</strong> What is the CFAD approach?
                          </a>
                        </h4>
                      </div>
                      <div id="ac1" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>The Centre for Accelerated Development (CFAD) is our community-driven model for rural enterprise development. It combines technology implementation with ecosystem building, local capacity development, and sustainable business models to accelerate community-led development in Northeast India.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#ac2">
                            <strong>02</strong> How do you select communities for projects?
                          </a>
                        </h4>
                      </div>
                      <div id="ac2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>We use participatory assessment methods to identify communities with strong local leadership, existing enterprises that could benefit from DRE solutions, and alignment with our partners' geographic priorities. Community willingness to co-invest time and resources is crucial for sustainable impact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#ac4">
                            <strong>03</strong> Can organizations partner with BPSV?
                          </a>
                        </h4>
                      </div>
                      <div id="ac4" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>Yes, we actively seek partnerships with development organizations, foundations, government agencies, and technology providers. We offer consulting services, project implementation partnerships, and joint research opportunities in sustainable rural development and DRE solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-theme effect btn-sm" onClick={() => scrollTo('contact')}>Ask another question</button>
              </div>
              <div className="col-md-6 contact-forms">
                <div className="form-items bg-cover shadow dark-hard text-light">
                  <h2>Partner With <strong>Us</strong></h2>
                  <p>Interested in collaboration, funding opportunities, or learning more about our work?</p>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group cf-input-wrap">
                          <span className="cf-icon"><i className="fa fa-user"></i></span>
                          <input className="form-control" name="name" placeholder="Full Name *" type="text" value={formData.name} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group cf-input-wrap">
                          <span className="cf-icon"><i className="fa fa-envelope"></i></span>
                          <input className="form-control" name="email" placeholder="Email Address *" type="email" value={formData.email} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group cf-input-wrap">
                          <span className="cf-icon"><i className="fa fa-phone"></i></span>
                          <input className="form-control" name="phone" placeholder="Phone Number *" type="tel" value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group cf-input-wrap">
                          <span className="cf-icon"><i className="fa fa-building"></i></span>
                          <input className="form-control" name="organization" placeholder="Organization / Company" type="text" value={formData.organization} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group cf-input-wrap cf-select-wrap">
                          <span className="cf-icon"><i className="fa fa-tag"></i></span>
                          <select className="form-control" name="interest" value={formData.interest} onChange={handleChange}>
                            <option value="">Select Interest Area</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="funding">Funding / Investment</option>
                            <option value="consulting">Consulting Services</option>
                            <option value="volunteer">Volunteer / Internship</option>
                            <option value="other">Other Inquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group comments cf-input-wrap cf-textarea-wrap">
                          <span className="cf-icon"><i className="fa fa-pencil"></i></span>
                          <textarea className="form-control" name="comments" placeholder="Tell us about your inquiry *" value={formData.comments} onChange={handleChange} required></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <button type="submit" disabled={formStatus === 'sending'}>
                          <i className="fa fa-paper-plane"></i> {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 alert-notification">
                      {formStatus === 'success' && (
                        <div className="alert-msg" style={{ color: '#5cb85c', marginTop: '12px' }}>
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}
                      {formStatus === 'error' && (
                        <div className="alert-msg" style={{ color: '#e05555', marginTop: '12px' }}>
                          Something went wrong. Please try again or email us directly.
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Area */}
    </>
  )
}
