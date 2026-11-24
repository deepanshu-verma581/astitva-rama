import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import MissionVision from './sections/MissionVision'
import Services from './sections/Services'
import Team from './sections/Team'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
