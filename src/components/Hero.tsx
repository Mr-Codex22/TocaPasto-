import { ArrowRight, Compass, Sprout, Heart, Users, Sun, Trees } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import manosImg from '../assets/manos.jpeg';
import junteImg from "../assets/junte.jpeg"
import pastoImg from "../assets/pasto.jpeg"

export default function Hero() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="hero" className="hero section" ref={sectionRef}>
      <div className="hero__grid-bg" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content reveal">

            <h1 className="hero__title">
              La mejor forma de encontrar{' '}
              <span className="hero__title-underline hero__title--gradient">
                Extracurriculares
              </span>
            </h1>

            <p className="hero__subtitle">
              Aquí encontrarás actividades para mejorar tus habilidades cognitivas y de liderazgo, voluntariados, MUNs, Debates, talleres y mucho más.
            </p>

            <div className="hero__actions">
              <a
                href="#activities"
                className="btn btn--primary btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explorar actividades
                <ArrowRight size={18} />
              </a>
              <a
                href="#why"
                className="btn btn--outline btn--large"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ¿Por qué unirse?
              </a>
            </div>

            <div className="hero__metrics">
              <div className="hero__metric">
                <span className="hero__metric-value">500+</span>
                <span className="hero__metric-label">Jóvenes activos</span>
              </div>
              <div className="hero__metric-divider" />
              <div className="hero__metric">
                <span className="hero__metric-value">50+</span>
                <span className="hero__metric-label">Encuentros anuales</span>
              </div>
              <div className="hero__metric-divider" />
              <div className="hero__metric">
                <span className="hero__metric-value">100%</span>
                <span className="hero__metric-label">En persona</span>
              </div>
            </div>

            <div className="hero__note">
              <span className="hero__note-avatars">
                <span className="hero__note-avatar">VP</span>
                <span className="hero__note-avatar">CM</span>
                <span className="hero__note-avatar">SR</span>
              </span>
              <span className="hero__note-text">
                Únete a la comunidad de jóvenes que eligen vivir el presente.
              </span>
            </div>
          </div>

          <div className="hero__visual reveal reveal-delay-2">
            <div className="hero__collage">
              {/* Card 1: Desconectar */}
              <div className="collage-card collage-card--1">
                <div className="collage-card__badge" style={{ backgroundColor: 'var(--accent)' }}>
                  <Sun size={14} /> Desconectar
                </div>
                <div className="collage-card__visual" style={{ border: 'none', overflow: 'hidden', padding: 0 }}>
                  <img src={manosImg} alt="Desconectar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="collage-card__title">Respira y desconecta</h3>
                <p className="collage-card__desc">Sal del entorno digital y reconecta con el bosque, los parques y tu entorno natural.</p>
              </div>

              {/* Card 2: Compartir */}
              <div className="collage-card collage-card--2">
                <div className="collage-card__badge" style={{ backgroundColor: 'var(--primary)' }}>
                  <Users size={14} /> Compartir
                </div>
                <div className="collage-card__visual" style={{ border: 'none', overflow: 'hidden', padding: 0 }}>
                  <img src={junteImg} alt="Desconectar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="collage-card__title">Gente real</h3>
                <p className="collage-card__desc">Construye lazos significativos, debates en persona y actividades comunitarias reales.</p>
              </div>

              {/* Card 3: Crecer */}
              <div className="collage-card collage-card--3">
                <div className="collage-card__badge" style={{ backgroundColor: 'var(--purple)' }}>
                  <Sprout size={14} /> Sembrar
                </div>
                <div className="collage-card__visual" style={{ border: 'none', overflow: 'hidden', padding: 0 }}>
                  <img src={pastoImg} alt="Desconectar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="collage-card__title">Aventúrate</h3>
                <p className="collage-card__desc">Aprende sobre ecología, liderazgo grupal y exploración de senderos naturales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
