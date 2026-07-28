import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'
import LazySection from '../components/LazySection'

const Home = () => {
  return (
    <div>
      <Hero />
      <LazySection><About /></LazySection>
      <LazySection><Skills /></LazySection>
      <LazySection><Project /></LazySection>
      <LazySection><Work /></LazySection>
      <LazySection><Contact /></LazySection>
    </div>
  )
}

export default Home
