import type { CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sun, Users, Compass, Sprout } from 'lucide-react';

const REASONS = [
  {
    icon: Sun,
    title: 'Bienestar Mental',
    description: 'Desconéctate de las notificaciones constantes. Reducir el tiempo de pantalla mejora tu enfoque, reduce la ansiedad y eleva tu ánimo.',
    color: 'var(--primary)',
  },
  {
    icon: Users,
    title: 'Amistades Reales',
    description: 'Conoce a jóvenes con valores similares en persona. Construye relaciones significativas basadas en el diálogo y las risas reales.',
    color: 'var(--accent)',
  },
  {
    icon: Compass,
    title: 'Aprender y Explorar',
    description: 'Aprende habilidades de vida prácticas: orientación, botánica local, manualidades tradicionales y cocina de campo.',
    color: 'var(--purple)',
  },
  {
    icon: Sprout,
    title: 'Impacto Verde',
    description: 'Deja tu entorno mejor de como lo encontraste. Contribuye activamente a la restauración ecológica y huertos locales.',
    color: 'var(--green)',
  },
];

export default function WhyParticipate() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="why" className="why section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">¿Por qué desconectar?</span>
          <h2 className="section-title">El poder de volver a lo real</h2>
          <p className="section-subtitle">
            Tocar pasto no es solo una frase, es una necesidad. Descubre los beneficios de vivir experiencias compartidas fuera del entorno digital.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className={`why__card reveal reveal-delay-${index + 1}`}
                style={{ '--card-color': reason.color } as CSSProperties}
              >
                <div className="why__card-icon" style={{ backgroundColor: reason.color, color: 'var(--white)' }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="why__card-title">{reason.title}</h3>
                <p className="why__card-desc">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
