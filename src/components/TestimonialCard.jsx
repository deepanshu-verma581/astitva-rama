import ImagePlaceholder from './ImagePlaceholder'

export default function TestimonialCard() {
  return (
    <article className="testimonial-card">
      <span className="quote">“</span>
      <p>
        <em>
          Sample placeholder testimonial text. Replace with an appropriately consented client testimonial before publishing.
        </em>
      </p>
      <div className="testimonial-person">
        <ImagePlaceholder className="avatar" />
        <div>
          <strong>Sample Name</strong>
          <span>Sample category</span>
        </div>
      </div>
    </article>
  )
}
