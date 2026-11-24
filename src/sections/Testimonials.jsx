import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'

export default function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="section-container">
        <SectionHeading eyebrow="Shared Experiences" title="Testimonials" align="center" />
        <div className="testimonial-grid">
          {[1, 2, 3].map(item => <TestimonialCard key={item} />)}
        </div>
      </div>
    </section>
  )
}
