'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isProjects = pathname.startsWith('/projects')
  const isContact = pathname === '/contact'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header id="home">
      <nav className={`navbar navbar-default navbar-fixed white bootsnav${scrolled ? ' on' : ' no-background'}`}>
        <div className="container-full">
          <div className="attr-nav button fixed-nav">
            <ul>
              <li><Link href="/contact">Get Started</Link></li>
            </ul>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMenuOpen(o => !o)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link
              className="navbar-brand brand-premium"
              href="/"
              onClick={handleLogoClick}
            >
              <img src="/assets/img/logo-light.png" className="logo logo-display" alt="BPSV Logo" />
              <img src="/assets/img/logo1.1.png" className="logo logo-scrolled" alt="BPSV Logo" style={{ width: '60px' }} />
              <span className="logo-text logo-display">Beyond Purpose</span>
              <span className="logo-text logo-scrolled">Beyond Purpose</span>
            </Link>
          </div>
          <div className={`collapse navbar-collapse${menuOpen ? ' in' : ''}`} id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
              <li className={isHome ? 'active' : ''}>
                <Link
                  href="/"
                  onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                >
                  Home
                </Link>
              </li>
              <li className={isAbout ? 'active' : ''}>
                <Link href="/about">About</Link>
              </li>
              <li
                className={`dropdown${isProjects ? ' active' : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/projects"
                  className="dropdown-toggle"
                  onClick={() => setDropdownOpen(o => !o)}
                >
                  Projects
                </Link>
                <ul className={`dropdown-menu${dropdownOpen ? ' open' : ''}`} style={dropdownOpen ? { display: 'block' } : {}}>
                  <li className={pathname === '/projects' ? 'active' : ''}>
                    <Link href="/projects">All Projects</Link>
                  </li>
                  <li className="divider"></li>
                  <li className={pathname.includes('efficiency') ? 'active' : ''}>
                    <Link href="/projects/efficiency-for-access-enabling-dre-agribusiness">
                      Efficiency for Access: Enabling DRE Agribusiness
                    </Link>
                  </li>
                  <li className={pathname.includes('PURE') ? 'active' : ''}>
                    <Link href="/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises">
                      CLASP MAF – Scaling DRE through Ecosystem Building
                    </Link>
                  </li>
                  <li className={pathname.includes('doorstep') ? 'active' : ''}>
                    <Link href="/projects/doorstep-business-services">
                      DRIVE – Doorstep Business Services for Women Foodpreneurs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={isContact ? 'active' : ''}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
