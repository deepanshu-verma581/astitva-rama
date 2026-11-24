import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="section-container">
        <SectionHeading eyebrow="People of ASTIVA" title="Our Team" align="center" />
        <div className="team-grid">
          {[1, 2, 3, 4].map(item => <TeamCard key={item} />)}
        </div>
      </div>
    </section>
  )
}
