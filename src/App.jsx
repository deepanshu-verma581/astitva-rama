import { useEffect, useState } from 'react'
import {
  ArrowRight, ChevronRight, HeartHandshake, Menu, Phone, Mail, MapPin,
  Clock, UserRound, Brain, ShieldCheck,
  UsersRound, Sparkles, X
} from 'lucide-react'
import './App.css'

const serviceItems = [
  ['Individual Counselling', 'A confidential space for personal reflection, healing and meaningful growth.'],
  ['Anxiety & Stress Management', 'Practical support to understand stress and build calmer everyday routines.'],
  ['Depression Support', 'Compassionate, goal-focused care to help you feel understood and reconnect.'],
  ['Relationship Counselling', 'Improve communication, strengthen trust and navigate conflict with care.'],
  ['Family Counselling', 'Create healthier relationships through open, respectful family conversations.'],
  ['Emotional Well-being', 'Develop resilience and a deeper understanding of your emotional needs.'],
  ['Self-Esteem & Personal Growth', 'Build confidence, self-awareness and a more positive sense of self.'],
  ['Life Transitions Support', 'Thoughtful guidance through change, uncertainty and new beginnings.'],
]

const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Mission & Vision', 'mission'],
  ['Services', 'services'], ['Our Team', 'team'], ['Contact', 'contact'],
]

function ImagePlaceholder({ className = '', aspectRatio }) {
  return <div className={`image-placeholder ${className}`} style={aspectRatio ? { aspectRatio } : undefined} aria-hidden="true" />
}

function Button({ href = '#contact', children, variant = 'primary', onClick }) {
  return <a className={`button button-${variant}`} href={href} onClick={onClick}>{children}</a>
}

function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-35% 0px -55% 0px' })
    navItems.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="ASTIVA home">
          <span className="brand-mark"><HeartHandshake size={20} strokeWidth={1.6} /></span>
          <span>ASTIVA</span>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <Button href="#contact" onClick={() => setOpen(false)}>Book a Consultation</Button>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Counselling &amp; Wellness Centre</span>
          <h1>A Safe Space to Discover,<br />Heal &amp; Grow</h1>
          <p>Welcome to ASTIVA, where your mental well-being matters. Explore compassionate and professional counselling services designed to support your journey towards emotional wellness.</p>
          <div className="hero-actions">
            <Button href="#contact">Book a Consultation</Button>
            <Button href="#services" variant="secondary">Explore Our Services</Button>
          </div>
        </div>
        <ImagePlaceholder className="hero-image" aspectRatio="6 / 5" />
      </section>

      <section className="intro-grid section-pad">
        <div className="intro-card">
          <ImagePlaceholder className="intro-image" aspectRatio="16 / 9" />
          <div>
            <span className="mini-brand">ASTIVA</span>
            <p>At ASTIVA, we provide compassionate, ethical, and confidential support for individuals and couples in a safe and welcoming environment.</p>
          </div>
        </div>
        <div className="why-card">
          <SectionHeading title="Why Choose ASTIVA?" />
          <ul className="check-list">
            <li><strong>Safe, private and supportive care</strong><span>We listen without judgement and protect your privacy.</span></li>
            <li><strong>Compassion-led professional approach</strong><span>Care tailored around your needs, pace and goals.</span></li>
            <li><strong>Confidential and ethical practice</strong><span>Professional standards guide every interaction.</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

function About() {
  const values = [
    ['Compassion', HeartHandshake], ['Integrity', ShieldCheck],
    ['Respect', UserRound], ['Confidentiality', Brain],
  ]
  return (
    <section className="section section-tinted" id="about">
      <div className="section-container">
        <SectionHeading eyebrow="About Us" title="About ASTIVA" />
        <div className="about-grid">
          <div className="about-copy">
            <h3>Our Story</h3>
            <p>ASTIVA is a counselling and wellness centre created with a simple belief: every person deserves a safe place to pause, be heard and begin again.</p>
            <h3>Our Philosophy</h3>
            <p>We combine professional psychological care with warmth and empathy. Our approach respects your story, strengthens your resources and supports meaningful change.</p>
          </div>
          <div className="about-visual">
            <ImagePlaceholder className="about-image" aspectRatio="16 / 10" />
            <div className="story-caption">A welcoming space for real conversations</div>
          </div>
        </div>
        <div className="values-panel">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {values.map(([label, Icon]) => (
              <div className="value-item" key={label}><Icon size={22} /><span>{label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="section" id="mission">
      <div className="section-container">
        <SectionHeading eyebrow="Purpose" title="Mission &amp; Vision" align="center" />
        <div className="mission-grid">
          <article className="mission-card">
            <div className="mission-icon"><HeartHandshake /></div>
            <div><h3>Our Mission</h3><p>To provide compassionate, ethical and professional psychological support in a safe and welcoming environment.</p></div>
          </article>
          <article className="mission-card vision">
            <div><h3>Our Vision</h3><p>To create a world where mental health is valued, emotional well-being is prioritized, and everyone feels empowered to seek support.</p></div>
            <ImagePlaceholder className="mission-image" aspectRatio="4 / 3" />
          </article>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section className="section section-tinted" id="services">
      <div className="section-container">
        <SectionHeading eyebrow="How We Can Help" title="Our Services" align="center" />
        <div className="services-grid">
          {serviceItems.map(([title, description], index) => (
            <article className="service-card" key={title}>
              <div className="service-icon">{index % 3 === 0 ? <Brain /> : index % 3 === 1 ? <Sparkles /> : <UsersRound />}</div>
              <h3>{title}</h3>
              <p>{expanded === index ? description + ' Sessions are tailored to your goals, comfort and pace.' : description}</p>
              <button className="text-button" onClick={() => setExpanded(expanded === index ? null : index)}>
                {expanded === index ? 'Show Less' : 'Learn More'} <ChevronRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="section" id="team">
      <div className="section-container">
        <SectionHeading eyebrow="People of ASTIVA" title="Our Team" align="center" />
        <div className="team-grid">
          {[1,2,3,4].map((item) => (
            <article className="team-card" key={item}>
              <ImagePlaceholder className="team-image" aspectRatio="4 / 3" />
              <h3>Team Member Name</h3>
              <span>Clinical Psychologist</span>
              <p><strong>Professional Qualifications</strong><br />Short biography placeholder. Add a concise, accurate professional introduction here.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="section-container">
        <SectionHeading eyebrow="Shared Experiences" title="Testimonials" align="center" />
        <div className="testimonial-grid">
          {[1,2,3].map(item => (
            <article className="testimonial-card" key={item}>
              <span className="quote">“</span>
              <p><em>Sample placeholder testimonial text. Replace with an appropriately consented client testimonial before publishing.</em></p>
              <div className="testimonial-person"><ImagePlaceholder className="avatar" /><div><strong>Sample Name</strong><span>Sample category</span></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Please enter a subject.'
    if (!values.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    if (Object.keys(next).length === 0) setNotice('Thank you. This demo validates your details but does not send or store them.')
  }

  const update = ({ target }) => setValues(prev => ({ ...prev, [target.name]: target.value }))

  return (
    <section className="section section-tinted" id="contact">
      <div className="section-container">
        <SectionHeading eyebrow="Get in Touch" title="Contact Us" align="center" />
        <div className="contact-grid">
          <div className="contact-info">
            <h3>We are here to listen</h3>
            <p>Reach out with questions or to request a consultation.</p>
            <div className="contact-line"><Phone /><div><span>Phone</span><strong>Phone number placeholder</strong></div></div>
            <div className="contact-line"><Mail /><div><span>Email</span><strong>Email address placeholder</strong></div></div>
            <div className="contact-line"><MapPin /><div><span>Address</span><strong>Address placeholder</strong></div></div>
            <div className="contact-line"><Clock /><div><span>Working Hours</span><strong>Working hours placeholder</strong></div></div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label>Full Name<input name="name" value={values.name} onChange={update} />{errors.name && <small>{errors.name}</small>}</label>
              <label>Email Address<input name="email" type="email" value={values.email} onChange={update} />{errors.email && <small>{errors.email}</small>}</label>
            </div>
            <div className="form-row">
              <label>Phone Number<input name="phone" value={values.phone} onChange={update} /></label>
              <label>Subject<input name="subject" value={values.subject} onChange={update} />{errors.subject && <small>{errors.subject}</small>}</label>
            </div>
            <label>Message<textarea name="message" rows="5" value={values.message} onChange={update} />{errors.message && <small>{errors.message}</small>}</label>
            <button className="button button-primary" type="submit">Submit <ArrowRight size={16} /></button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
          </form>
        </div>
        <ImagePlaceholder className="map-placeholder" aspectRatio="24 / 6" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark"><HeartHandshake size={20} /></span><span>ASTIVA</span></div><p>Compassionate counselling and psychological support for every step of your journey.</p></div>
        <div><h3>Quick Links</h3>{navItems.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        <div><h3>Services</h3>{serviceItems.slice(0,5).map(([title]) => <a key={title} href="#services">{title}</a>)}</div>
        <div><h3>Contact</h3><p>Phone number placeholder</p><p>Email address placeholder</p><p>Address placeholder</p><div className="socials"><a href="#home" aria-label="Instagram">Ig</a><a href="#home" aria-label="Facebook">Fb</a><a href="#home" aria-label="LinkedIn">In</a></div></div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} ASTIVA – Counselling &amp; Wellness Centre. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
