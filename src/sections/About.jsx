import { HeartHandshake, ShieldCheck, UserRound, Brain } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

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
        <SectionHeading eyebrow="About Us" title="About ASTIVA" />
        <div className="about-grid">
          <div className="about-copy">
            <h3>Our Story</h3>
            <p>
              ASTIVA is a counselling and wellness centre created with a simple belief:
              every person deserves a safe place to pause, be heard and begin again.
            </p>
            <h3>Our Philosophy</h3>
            <p>
              We combine professional psychological care with warmth and empathy. Our
              approach respects your story, strengthens your resources and supports
              meaningful change.
            </p>
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
