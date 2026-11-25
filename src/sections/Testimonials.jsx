import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'

export default function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="section-container">
        <SectionHeading eyebrow="Sample Experiences" title="Testimonials" align="center" />
        <div className="testimonial-grid">
          <TestimonialCard
            quote="I felt listened to and supported from the very first conversation. The sessions helped me understand what I was feeling and take things one step at a time."
            image="/testimonial-sample-1.svg"
            name="Sample Client"
            detail="Illustrative sample"
          />
          <TestimonialCard
            quote="The space felt calm and welcoming. I appreciated having time to reflect without feeling judged, and I left with practical ways to care for myself."
            image="/testimonial-sample-2.svg"
            name="Sample Client"
            detail="Illustrative sample"
          />
          <TestimonialCard
            quote="The guidance helped me see my challenges more clearly and move forward at my own pace. I am grateful for the kindness and care I received."
            image="/testimonial-sample-3.svg"
            name="Sample Client"
            detail="Illustrative sample"
          />
        </div>
        <p className="testimonial-note">Illustrative sample testimonials and portraits. Replace with verified, consented client feedback before publishing.</p>
      </div>
    </section>
  )
}
