import { HeartHandshake } from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionHeading from '../components/SectionHeading'

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
                To provide compassionate, ethical and professional psychological support
                in a safe and welcoming environment.
              </p>
            </div>
          </article>
          <article className="mission-card vision">
            <div>
              <h3>Our Vision</h3>
              <p>
                To create a world where mental health is valued, emotional well-being is
                prioritized, and everyone feels empowered to seek support.
              </p>
            </div>
            <ImagePlaceholder className="mission-image" aspectRatio="4 / 3" />
          </article>
        </div>
      </div>
    </section>
  )
}
