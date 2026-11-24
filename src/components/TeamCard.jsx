import { ChevronRight } from 'lucide-react'

export default function TeamCard({ member, expanded, onToggle }) {
  return (
    <article className="team-card">
      <img className="team-image" src={member.image} alt={member.imageAlt} />
      <h3>{member.name}</h3>
      {member.designation && <span>{member.designation}</span>}
      {member.summary && <p>{member.summary}</p>}
      {expanded && (
        <div className="team-card-extra">
          <p>{member.details}</p>
          {member.areas && (
            <>
              <h4>Areas of Expertise</h4>
              <ul>{member.areas.map(area => <li key={area}>{area}</li>)}</ul>
            </>
          )}
          {member.modalities && (
            <>
              <h4>Therapeutic Modalities and Approaches</h4>
              <ul>{member.modalities.map(modality => <li key={modality}>{modality}</li>)}</ul>
            </>
          )}
          {member.approach && <p>{member.approach}</p>}
        </div>
      )}
      <button
        className="text-button team-toggle"
        onClick={onToggle}
        type="button"
        aria-expanded={expanded}
      >
        {expanded ? 'Show Less' : 'Show More'} <ChevronRight size={15} />
      </button>
    </article>
  )
}
