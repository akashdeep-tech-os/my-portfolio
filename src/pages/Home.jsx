import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'
import LazySection from '../components/LazySection'
import Seo from '../seo/Seo'
import { homeSchema } from '../seo/schema'
import { SITE } from '../seo/siteConfig'

const Home = () => {
  return (
    <div>
      <Seo
        description={SITE.description}
        path="/"
        type="website"
        keywords="Akash Deep, Akash Deep Portfolio, Akash Deep Python Developer, Akash Deep AI Engineer, Akash Deep Computer Vision Engineer, Akash Deep Software Engineer, Akash Deep FastAPI Developer, Akash Deep OpenCV Developer, Akash Deep React Developer, Akash Deep Machine Learning Engineer, Python Developer, Full Stack Developer, FastAPI Developer, Django Developer, React Developer, Software Engineer, AI Developer, Machine Learning Engineer, Computer Vision Developer, Web Developer India, JavaScript Developer, Python Developer India"
        schema={homeSchema()}
      />
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
