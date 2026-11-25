import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import therapyRoom from '../assets/hero-counselling-room.jpg'
import therapyRoomMobile from '../assets/hero-counselling-room-mobile.jpg'
import astitva from '../assets/astitva-emblem.jpeg'

export default function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Online Counselling &amp; Wellness Centre in India</span>
          <h1>Online Counselling to Discover, Heal &amp; Grow</h1>
          <p>
            Welcome to Astitva, a supportive space to understand yourself, navigate
            life&apos;s challenges, and grow through compassionate online counselling.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Book a Consultation</Button>
            <Button href="#services" variant="secondary">Explore Our Services</Button>
          </div>
        </div>
        <img className="hero-image" src={therapyRoom} srcSet={`${therapyRoomMobile} 480w, ${therapyRoom} 952w`} sizes="(max-width: 767px) 100vw, (max-width: 900px) 46vw, 54vw" alt="A calm, welcoming space for counselling and reflection" width="952" height="716" fetchPriority="high" decoding="async" />
      </section>

      <section className="intro-grid section-pad">
        <div className="intro-card">
          <img className="intro-image" src={astitva} alt="Astitva Counselling and Wellness Centre emblem" width="400" height="400" loading="lazy" decoding="async" />
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
