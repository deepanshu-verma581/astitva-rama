import { HeartHandshake, ShieldCheck, UserRound, Brain } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import astitvaLogo from '../assets/astitva.jpeg'

export default function About() {
  const values = [
    ['Compassion', HeartHandshake],
    ['Integrity', ShieldCheck],
    ['Respect', UserRound],
    ['Confidentiality', Brain],
  ]

  return (
    <section className="section section-tinted" id="about">
      <div className="section-container">
        <SectionHeading eyebrow="About Us" title="About Astitva" />
        <div className="about-grid">
          <div className="about-copy">
            <div className="about-identity">
              <img src={astitvaLogo} alt="Astitva Counselling & Wellness Centre logo" />
              <div>
                <h3>Astitva</h3>
                <p>
                  Astitva means existence, identity, and individuality. It reflects our
                  belief that every person has a unique journey, deserves acceptance,
                  and holds the potential to grow beyond their challenges.
                </p>
              </div>
            </div>
            <h3>Our Story</h3>
            <p>
              Astitva Counselling &amp; Wellness Centre was born from the belief that
              everyone deserves a safe space to be heard, understood, and accepted. We
              aim to help individuals reconnect with themselves, navigate life&apos;s
              challenges, and embrace personal growth through compassionate
              psychological support.
            </p>
            <h3>Our Philosophy</h3>
            <p>
              We believe Astitva is not just about existing; it is about understanding,
              accepting, and embracing who you are.
            </p>
            <p className="about-tagline">Astitva – Discover. Heal. Grow.</p>
          </div>
        </div>
        <div className="values-panel">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {values.map(([label, Icon]) => (
              <div className="value-item" key={label}>
                <Icon size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
