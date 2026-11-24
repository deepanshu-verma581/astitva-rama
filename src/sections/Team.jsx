import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'

export default function Team() {
  const [expanded, setExpanded] = useState([])

  const toggleMember = index => {
    setExpanded(current =>
      current.includes(index)
        ? current.filter(item => item !== index)
        : [...current, index]
    )
  }

  return (
    <section className="section" id="team">
      <div className="section-container">
        <SectionHeading eyebrow="People of ASTIVA" title="Our Team" align="center" />
        <div className="team-grid">
          {[1, 2].map((item, index) => (
            <TeamCard
              key={item}
              expanded={expanded.includes(index)}
              onToggle={() => toggleMember(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
