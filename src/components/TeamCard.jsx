import ImagePlaceholder from './ImagePlaceholder'
import { ChevronRight } from 'lucide-react'

export default function TeamCard({ expanded, onToggle }) {
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
      {expanded && (
        <p className="team-card-extra">
          Add the team member&apos;s areas of interest, professional approach and relevant
          experience here once verified information is available.
        </p>
      )}
      <button className="text-button team-toggle" onClick={onToggle} type="button">
        {expanded ? 'Show Less' : 'Show More'} <ChevronRight size={15} />
      </button>
    </article>
  )
}
