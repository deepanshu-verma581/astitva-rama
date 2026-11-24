import { useState } from 'react'
import { Brain, Sparkles, UsersRound } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { serviceItems } from '../data/siteData'

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  const icons = [<Brain />, <Sparkles />, <UsersRound />]

  return (
    <section className="section section-tinted" id="services">
      <div className="section-container">
        <SectionHeading eyebrow="How We Can Help" title="Our Services" align="center" />
        <div className="services-grid">
          {serviceItems.map(([title, description], index) => (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              icon={icons[index % icons.length]}
              expanded={expanded === index}
              onToggle={() => setExpanded(expanded === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
