import { HeartHandshake } from 'lucide-react'
import { navItems, serviceItems } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark"><HeartHandshake size={20} /></span>
            <span>ASTIVA</span>
          </div>
          <p>Compassionate counselling and psychological support for every step of your journey.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </div>
        <div>
          <h3>Services</h3>
          {serviceItems.slice(0, 5).map(([title]) => <a key={title} href="#services">{title}</a>)}
        </div>
        <div>
          <h3>Contact</h3>
          <p>Phone number placeholder</p>
          <p>Email address placeholder</p>
          <p>Address placeholder</p>
          <div className="socials">
            <a href="#home" aria-label="Instagram">Ig</a>
            <a href="#home" aria-label="Facebook">Fb</a>
            <a href="#home" aria-label="LinkedIn">In</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} ASTIVA – Counselling &amp; Wellness Centre. All rights reserved.
      </div>
    </footer>
  )
}
