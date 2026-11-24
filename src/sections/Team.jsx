import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'

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
        <SectionHeading eyebrow="People of Astitva" title="Our Team" align="center" />
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              expanded={expanded.includes(index)}
              onToggle={() => toggleMember(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
