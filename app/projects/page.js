'use client'

import { useState } from 'react'
import Link from 'next/link'

const projectsStyles = `
.projects-hero {
   position: relative;
   background: linear-gradient(135deg, rgba(8,42,58,0.95) 0%, rgba(21,91,104,0.92) 55%, rgba(43,164,170,0.85) 100%),
               url("/assets/img/empower.png") center/cover no-repeat;
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

#noResults {
   text-align: center;
   padding: 48px 20px;
   color: #889;
   font-size: 15px;
   width: 100%;
}
`

const ALL_PROJECTS = [
  {
    category: 'women',
    img: '/assets/img/rural.png',
    alt: 'DRIVE – Doorstep Business Services for Women Foodpreneurs',
    status: 'Active',
    statusClass: 'status-active',
    cardCategory: 'AgriTech \u00a0·\u00a0 Women Empowerment',
    title: 'DRIVE – Doorstep Business Services for Women Foodpreneurs',
    description: 'Agent-led incubation delivering 18 doorstep services to 100 women foodpreneurs in Assam, Karnataka & Odisha to bridge the last-mile incubation gap.',
    meta: [
      { icon: 'fa-map-marker', text: 'Assam, Karnataka & Odisha' },
      { icon: 'fa-users', text: 'The Nudge Foundation' },
      { icon: 'fa-calendar', text: 'Dec 2025 – Aug 2026' }
    ],
    link: '/projects/doorstep-business-services',
    linkText: 'View Project →'
  },
  {
    category: 'dre',
    img: '/assets/img/empower.png',
    alt: 'Efficiency for Access: Enabling DRE Agribusiness',
    status: 'Active',
    statusClass: 'status-active',
    cardCategory: 'DRE \u00a0·\u00a0 Agribusiness \u00a0·\u00a0 Renewable Energy',
    title: 'Efficiency for Access: Enabling DRE Agribusiness',
    description: 'Demonstrating how solar-powered Distributed Renewable Energy transforms rural agribusinesses through productive-use appliances in Meghalaya.',
    meta: [
      { icon: 'fa-map-marker', text: 'Meghalaya, India' },
      { icon: 'fa-users', text: 'CLASP' },
      { icon: 'fa-calendar', text: 'Apr 2024 – Dec 2025' }
    ],
    link: '/projects/efficiency-for-access-enabling-dre-agribusiness',
    linkText: 'View Project →'
  },
  {
    category: 'dre',
    img: '/assets/img/Sanghamitra 3.png',
    alt: 'CLASP MAF – Scaling DRE through Ecosystem Building',
    status: 'Completed',
    statusClass: 'status-completed',
    cardCategory: 'DRE \u00a0·\u00a0 Ecosystem Building',
    title: 'CLASP MAF – Scaling DRE through Ecosystem Building',
    description: 'Using PURE appliances in livelihood enterprises across Assam & Nagaland, strengthening local NGO incubation capacity to scale clean-energy rural businesses.',
    meta: [
      { icon: 'fa-map-marker', text: 'Assam & Nagaland' },
      { icon: 'fa-users', text: 'CLASP MAF' },
      { icon: 'fa-calendar', text: 'Feb 2024 – Jan 2025' }
    ],
    link: '/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises',
    linkText: 'View Project →'
  },
  {
    category: 'climate',
    img: '/assets/img/climate.png',
    alt: 'Climate Adaptation Initiative',
    status: 'Completed',
    statusClass: 'status-completed',
    cardCategory: 'Climate Adaptation \u00a0·\u00a0 Renewable Energy',
    title: 'Climate Adaptation Initiative',
    description: 'Community-based climate adaptation through renewable energy solutions and rural enterprise strengthening in Dharwad, Karnataka — implemented with SELCO Foundation.',
    meta: [
      { icon: 'fa-map-marker', text: 'Dharwad, Karnataka' },
      { icon: 'fa-users', text: 'SELCO Foundation' },
      { icon: 'fa-calendar', text: 'Jan – Mar 2025' }
    ],
    link: null,
    linkText: 'Details Coming Soon'
  },
  {
    category: 'women',
    img: '/assets/img/rural.png',
    alt: 'Delta Prize – Aahar Bazaar',
    status: 'Recognition',
    statusClass: 'status-award',
    cardCategory: 'Recognition \u00a0·\u00a0 Rural Enterprise',
    title: 'Delta Prize — Aahar Bazaar',
    description: "National recognition for BPSV's innovative approach to rural enterprise development and market linkages, highlighting the impact-driven methodology of the Aahar Bazaar challenge.",
    meta: [
      { icon: 'fa-trophy', text: 'Award / Recognition' }
    ],
    link: null,
    linkText: 'Details Coming Soon'
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects = activeFilter === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: projectsStyles }} />

      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
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

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">States Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Enterprises Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Funding Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="projects-grid-section">
        <div className="container">

          {/* Filter Buttons */}
          <div className="filter-bar">
            <button className={`filter-btn${activeFilter === 'all' ? ' active' : ''}`} onClick={() => setActiveFilter('all')}>All Projects</button>
            <button className={`filter-btn${activeFilter === 'dre' ? ' active' : ''}`} onClick={() => setActiveFilter('dre')}>DRE / Renewable Energy</button>
            <button className={`filter-btn${activeFilter === 'women' ? ' active' : ''}`} onClick={() => setActiveFilter('women')}>Women Empowerment</button>
            <button className={`filter-btn${activeFilter === 'climate' ? ' active' : ''}`} onClick={() => setActiveFilter('climate')}>Climate Adaptation</button>
          </div>

          {/* Cards */}
          <div className="projects-grid" id="projectsGrid">
            {visibleProjects.length === 0 && (
              <div id="noResults">No projects found for this filter.</div>
            )}
            {visibleProjects.map((project, idx) => (
              <div className="project-card-wrap" key={idx}>
                <div className="project-card">
                  <div className="card-thumb">
                    <img src={project.img} alt={project.alt} />
                    <span className={`card-status ${project.statusClass}`}>{project.status}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-category">{project.cardCategory}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="card-meta">
                      {project.meta.map((m, i) => (
                        <span className="card-meta-item" key={i}>
                          <i className={`fa ${m.icon}`}></i> {m.text}
                        </span>
                      ))}
                    </div>
                    {project.link
                      ? <Link href={project.link} className="card-link">{project.linkText}</Link>
                      : <span className="card-link-ghost">{project.linkText}</span>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <h2>Interested in <strong>Working Together?</strong></h2>
          <p>
            BPSV partners with development organizations, foundations, and enterprises to co-design
            and implement high-impact rural development programmes.
          </p>
          <Link href="/contact" className="cta-btn">Get in Touch</Link>
        </div>
      </div>
    </>
  )
}
