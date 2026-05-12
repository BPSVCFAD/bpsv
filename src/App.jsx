import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import EfficiencyForAccess from './pages/projects/EfficiencyForAccess'
import ClaspMaf from './pages/projects/ClaspMaf'
import DoorstepServices from './pages/projects/DoorstepServices'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppInner() {
  useEffect(() => {
    const pre = document.querySelector('.se-pre-con')
    if (pre) {
      pre.style.opacity = '0'
      setTimeout(() => { pre.style.display = 'none' }, 600)
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/efficiency-for-access-enabling-dre-agribusiness" element={<EfficiencyForAccess />} />
        <Route path="/projects/using-PURE-appliances-in-the-Livelihoods-Enterprises" element={<ClaspMaf />} />
        <Route path="/projects/doorstep-business-services" element={<DoorstepServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  )
}
