import Button from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionHeading from '../components/SectionHeading'
import therapyRoom from '../assets/hero.png'
import astitva from '../assets/astitva.jpeg'

export default function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Counselling &amp; Wellness Centre</span>
          <h1>A Safe Space to Discover,<br />Heal &amp; Grow</h1>
          <p>
            Welcome to Astitva, a space to understand and accept who you are, navigate
            life&apos;s challenges, and grow through compassionate psychological support.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Book a Consultation</Button>
            <Button href="#services" variant="secondary">Explore Our Services</Button>
          </div>
        </div>
        <img className="hero-image" src={therapyRoom} alt="Warm, welcoming counselling room" />
      </section>

      <section className="intro-grid section-pad">
        <div className="intro-card">
          <ImagePlaceholder className="intro-image" aspectRatio="16 / 9" />
          <div>
            <span className="mini-brand">Astitva</span>
            <p>
              Astitva means existence, identity, and individuality. We believe every
              person has a unique journey, deserves acceptance, and holds the potential
              to grow beyond challenges.
            </p>
          </div>
        </div>
        <div className="why-card">
          <SectionHeading title="Why Choose Astitva?" />
          <ul className="check-list">
            <li><strong>Safe, private and supportive care</strong><span>We listen without judgement and protect your privacy.</span></li>
            <li><strong>Compassion-led professional approach</strong><span>Care tailored around your needs, pace and goals.</span></li>
            <li><strong>Confidential and ethical practice</strong><span>Professional standards guide every interaction.</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
