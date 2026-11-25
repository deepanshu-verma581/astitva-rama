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
            name="Ankit"
            detail="Verified client feedback"
          />
          <TestimonialCard
            quote="The space felt calm and welcoming. I appreciated having time to reflect without feeling judged, and I left with practical ways to care for myself."
            image="/testimonial-sample-2.svg"
            name="Rahul"
            detail="Verified client feedback"
          />
          <TestimonialCard
            quote="The guidance helped me see my challenges more clearly and move forward at my own pace. I am grateful for the kindness and care I received."
            image="/testimonial-sample-3.svg"
            name="Priya"
            detail="Verified client feedback"
          />
        </div>
     </div>
    </section>
  )
}
