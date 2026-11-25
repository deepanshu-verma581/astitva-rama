import { navItems, serviceItems } from '../data/siteData'
import astitvaLogo from '../assets/logo.png'

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/></svg>
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"/></svg>
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 7.8a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.6 9.3h3.2V20H3.6V9.3Zm5.2 0h3.1v1.5h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5V20H16v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H8.8V9.3Z"/></svg>
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <img className="brand-logo" src={astitvaLogo} alt="" />
            <span>Astitva</span>
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
          <p>+91 9319894833</p>
          <p>astitvacounsellingcentre@gmail.com</p>
          <p></p>
          <div className="socials">
            <span role="img" aria-label="Instagram"><InstagramIcon /></span>
            <span role="img" aria-label="Facebook"><FacebookIcon /></span>
            <span role="img" aria-label="LinkedIn"><LinkedinIcon /></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Astitva – Counselling &amp; Wellness Centre. All rights reserved.
      </div>
    </footer>
  )
}
