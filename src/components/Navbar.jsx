import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { navItems } from '../data/siteData'
import astitvaLogo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
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
        <a className="brand" href="#home" aria-label="Astitva home">
          <img className="brand-logo" src={astitvaLogo} alt="" />
          <span>Astitva</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? 'active' : ''}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button href="#contact" onClick={() => setOpen(false)}>Book a Consultation</Button>
        </nav>
      </div>
    </header>
  )
}
