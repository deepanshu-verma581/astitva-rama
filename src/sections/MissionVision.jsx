import { HeartHandshake } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import visionIllustration from '../assets/our-vision.png'

export default function MissionVision() {
  return (
    <section className="section" id="mission">
      <div className="section-container">
        <SectionHeading eyebrow="Purpose" title="Mission &amp; Vision" align="center" />
        <div className="mission-grid">
          <article className="mission-card">
            <div className="mission-icon"><HeartHandshake /></div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To provide a safe, empathetic, and non-judgmental space where individuals
                can understand themselves, navigate life&apos;s challenges, and develop
                emotional well-being through compassionate, evidence-based counselling.
              </p>
            </div>
          </article>
          <article className="mission-card vision">
            <div>
              <h3>Our Vision</h3>
              <p>
                To create a world where mental well-being is valued, emotional growth is
                encouraged, and every individual feels empowered to discover their true
                self and live a meaningful life.
              </p>
            </div>
            <img className="mission-image" src={visionIllustration} alt="Illustration representing personal growth and self-discovery" />
          </article>
        </div>
      </div>
    </section>
  )
}
