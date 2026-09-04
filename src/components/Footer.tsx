import { Camera, SquarePlay, Music2, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionLinks = [
    { label: 'Actividades', href: '#activities' },
    { label: 'Eventos', href: '#events' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Impacto', href: '#impact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a
              href="#hero"
              className="footer__logo"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            >
              <span className="footer__logo-mark"></span>
              <span>Leaders of Tomorrow</span>
            </a>
            <p className="footer__desc">
              Jovenes lideres ansiosos por hacer un cambio.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Camera size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <Music2 size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <SquarePlay size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <MessageCircle size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Plataforma</h4>
            <ul className="footer__links">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Recursos</h4>
            <ul className="footer__links">
              {['Blog', 'Guías', 'FAQ', 'Contacto'].map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Legal</h4>
            <ul className="footer__links">
              {['Términos', 'Privacidad', 'Cookies'].map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Angel. Todos los derechos reservados.</p>
          <p>Hecho para jóvenes que quieren cambiar el mundo.</p>
        </div>
      </div>
    </footer>
  );
}
