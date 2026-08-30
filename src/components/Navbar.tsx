import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: '¿Por qué?', href: '#why' },
  { label: 'Actividades', href: '#activities' },
  { label: 'Eventos', href: '#events' },
  { label: 'Impacto', href: '#impact' },
  { label: 'Testimonios', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
        >
          <span className={"navbar__logo-mark"}>TocaPasto.do</span>
        </a>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <button
            className="navbar__cta"
            onClick={() => handleNavClick('#activities')}
          >
            Explorar
            <ArrowRight size={14} />
          </button>
        </div>

        <button
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
}
