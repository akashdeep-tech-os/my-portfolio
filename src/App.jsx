import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ResumePage from './pages/Resume'
import ContactPage from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-xl focus:neu-card focus:text-[var(--accent)] font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:slug' element={<ProjectDetail />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
