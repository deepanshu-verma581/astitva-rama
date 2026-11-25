export default function TestimonialCard({ quote, image, name, detail }) {
  return (
    <article className="testimonial-card">
      <span className="quote" aria-hidden="true">“</span>
      <p>{quote}</p>
      <div className="testimonial-person">
        <img className="avatar" src={image} alt="Illustrative sample portrait" />
        <div>
          <strong>{name}</strong>
          <span>{detail}</span>
        </div>
      </div>
    </article>
  )
}
