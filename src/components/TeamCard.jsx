import ImagePlaceholder from './ImagePlaceholder'

export default function TeamCard() {
  return (
    <article className="team-card">
      <ImagePlaceholder className="team-image" aspectRatio="4 / 3" />
      <h3>Team Member Name</h3>
      <span>Clinical Psychologist</span>
      <p>
        <strong>Professional Qualifications</strong>
        <br />
        Short biography placeholder. Add a concise, accurate professional introduction here.
      </p>
    </article>
  )
}
