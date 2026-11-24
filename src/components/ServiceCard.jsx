import { ChevronRight } from 'lucide-react'

export default function ServiceCard({ title, description, icon, expanded, onToggle }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{expanded ? `${description} Sessions are tailored to your goals, comfort and pace.` : description}</p>
      <button className="text-button" onClick={onToggle}>
        {expanded ? 'Show Less' : 'Learn More'} <ChevronRight size={15} />
      </button>
    </article>
  )
}
