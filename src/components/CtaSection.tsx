import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CtaSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="cta section" ref={sectionRef}>
      <div className="container">
        <div className="cta__card reveal">
          <div className="cta__bg-grid" />
          <div className="cta__shape cta__shape--1" />
          <div className="cta__shape cta__shape--2" />

          <h2 className="cta__title">¿Listo para dejar el scroll y hacer algo más productivo?</h2>
          <p className="cta__text">
            Guarda tu móvil por unas horas y únete a los jóvenes que ya están explorando nuevos senderos, compartiendo y construyendo.
          </p>
          <div className="cta__actions">
            <a
              href="#activities"
              className="btn btn--primary btn--large"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver próximos encuentros
              <ArrowRight size={18} />
            </a>
            <a
              href="#testimonials"
              className="btn btn--ghost btn--large"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experiencias de la comunidad
            </a>
          </div>

          <div className="cta__trust">
            <div className="cta__trust-item">
              <CheckCircle2 size={14} strokeWidth={1.5} />
              Encuentros locales seguros
            </div>
            <div className="cta__trust-item">
              <CheckCircle2 size={14} strokeWidth={1.5} />
              Para jóvenes de 15 a 30 años
            </div>
            <div className="cta__trust-item">
              <CheckCircle2 size={14} strokeWidth={1.5} />
              100% offline y real
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
