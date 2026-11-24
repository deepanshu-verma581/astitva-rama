import Button from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionHeading from '../components/SectionHeading'

export default function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Counselling &amp; Wellness Centre</span>
          <h1>A Safe Space to Discover,<br />Heal &amp; Grow</h1>
          <p>
            Welcome to ASTIVA, where your mental well-being matters. Explore compassionate
            and professional counselling services designed to support your journey towards
            emotional wellness.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Book a Consultation</Button>
            <Button href="#services" variant="secondary">Explore Our Services</Button>
          </div>
        </div>
        <ImagePlaceholder className="hero-image" aspectRatio="6 / 5" />
      </section>

      <section className="intro-grid section-pad">
        <div className="intro-card">
          <ImagePlaceholder className="intro-image" aspectRatio="16 / 9" />
          <div>
            <span className="mini-brand">ASTIVA</span>
            <p>
              At ASTIVA, we provide compassionate, ethical, and confidential support for
              individuals and couples in a safe and welcoming environment.
            </p>
          </div>
        </div>
        <div className="why-card">
          <SectionHeading title="Why Choose ASTIVA?" />
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
