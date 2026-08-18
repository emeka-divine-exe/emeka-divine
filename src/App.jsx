import Nav from './components/Nav'
import PageLoader from './components/PageLoader'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import ArcShowcase from './components/ArcShowcase'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <PageLoader />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <ArcShowcase />
      <Services />
      <Skills />
      <Projects />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
