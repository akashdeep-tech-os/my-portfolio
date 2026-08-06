import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

const AboutPage = lazy(() => import('./pages/About'))
const ProjectsPage = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const ResumePage = lazy(() => import('./pages/Resume'))
const ContactPage = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

const PageFallback = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-theme-primary"
    aria-label="Loading page"
  >
    <div
      className="w-10 h-10 rounded-full border-4 border-[var(--accent)]/20 border-t-[var(--accent)] animate-spin"
      role="status"
    />
  </div>
)

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
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:slug' element={<ProjectDetail />} />
            <Route path='/resume' element={<ResumePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
