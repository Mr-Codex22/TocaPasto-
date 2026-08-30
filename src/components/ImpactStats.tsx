import type { ComponentType } from 'react';
import { useScrollReveal, useAnimatedCounter } from '../hooks/useScrollReveal';
import { Heart, Compass, Clock, Sprout } from 'lucide-react';

const STATS = [
  { value: 500, label: 'Jóvenes que han desconectado', icon: Heart, color: 'var(--primary)' },
  { value: 80, label: 'Encuentros al aire libre', icon: Compass, color: 'var(--accent)' },
  { value: 1200, label: 'Horas de conversación offline', icon: Clock, color: 'var(--purple)' },
  { value: 10, label: 'Áreas verdes recuperadas', icon: Sprout, color: 'var(--green)' },
];

function StatCard({
  value,
  label,
  icon: Icon,
  color,
}: {
  value: number;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  color: string;
}) {
  const counterRef = useAnimatedCounter(value);

  return (
    <div className="stat-card">
      <div className="stat-card__icon" style={{ color }}>
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <span
        className="stat-card__value"
        ref={counterRef}
        style={{ color }}
      >
        +0
      </span>
      <span className="stat-card__label">{label}</span>
    </div>
  );
}

export default function ImpactStats() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="impact" className="impact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Nuestro Impacto</span>
          <h2 className="section-title">Resultados que importan</h2>
          <p className="section-subtitle">
            Cada cifra representa momentos reales de risas, exploración e iniciativas que marcan la diferencia fuera de la red.
          </p>
        </div>

        <div className="impact__grid">
          {STATS.map((stat, index) => (
            <div key={stat.label} className={`reveal reveal-delay-${index + 1}`}>
              <StatCard value={stat.value} label={stat.label} icon={stat.icon} color={stat.color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
