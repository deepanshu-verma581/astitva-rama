import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="section-container">
        <SectionHeading eyebrow="People of Astitva" title="Our Team" align="center" />
        <div className="team-grid">
          {teamMembers.map(member => <TeamCard key={member.name} member={member} />)}
        </div>
      </div>
    </section>
  )
}
