import type { CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SpotlightCard from './SpotlightCard';

interface Testimonial {
  initials: string;
  name: string;
  age: string;
  role: string;
  text: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'OS',
    name: 'Osiris',
    age: '17 años',
    role: 'Estudiante de secundaria',
    text: 'Nunca imaginé que podría hablar en público sin miedo. Este concurso de oratoria cambió mi vida. Ahora soy delegada de mi clase y ayudo a otros a expresarse.',
    color: '#2563EB',
  },
  {
    initials: 'BJ',
    name: 'Benjamin',
    age: '21 años',
    role: 'Universitario',
    text: 'El taller de liderazgo me dio las herramientas que necesitaba para liderar mi equipo de voluntarios. Hoy coordino proyectos que ayudan a más de 100 personas.',
    color: '#F97316',
  },
  {
    initials: 'M',
    name: 'mia',
    age: '19 años',
    role: 'Emprendedora juvenil',
    text: 'Gracias a la feria de innovación conocí a mis primeros mentores. Mi proyecto ganó el primer lugar y ahora tengo una beca para desarrollarlo.',
    color: '#8B5CF6',
  },
  {
    initials: 'TN',
    name: 'tony Castillo',
    age: '16 años',
    role: 'Estudiante de bachillerato',
    text: 'Pensé que las actividades extracurriculares eran aburridas, pero aquí conocí a mis mejores amigos. Aprendí que salir de casa vale la pena.',
    color: '#22C55E',
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="testimonials" className="testimonials section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Voces de nuestra comunidad</h2>
          <p className="section-subtitle">
            Historias reales de jóvenes que transformaron su vida a través de nuestras actividades.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, index) => (
            <SpotlightCard
              key={t.name}
              as="article"
              className={`testimonial-card reveal reveal-delay-${index + 1}`}
              style={{ '--card-color': t.color } as CSSProperties}
            >
              <div className="testimonial-card__quote" style={{ color: t.color }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: `${t.color}1A`, color: t.color }}>
                  {t.initials}
                </div>
                <div className="testimonial-card__info">
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__role">{t.role} · {t.age}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
