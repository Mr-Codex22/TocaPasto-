import { MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type EventStatus = 'upcoming' | 'open' | 'limited';

interface EventItem {
  date: string;
  month: string;
  title: string;
  location: string;
  status: EventStatus;
}

const STATUS_MAP: Record<EventStatus, { label: string; className: string; color: string }> = {
  upcoming: { label: 'Próximamente', className: '', color: 'var(--primary-light)' },
  open: { label: 'Inscripciones abiertas', className: 'event-item__status--open', color: 'var(--primary)' },
  limited: { label: 'Últimos cupos', className: 'event-item__status--limited', color: 'var(--accent)' },
};

const EVENTS: EventItem[] = [
  { date: '15', month: 'Sep', title: 'Debate abierto', location: 'Centro cultural', status: 'open' },
  { date: '20', month: 'Sep', title: 'Voluntariado de los juegos centroamericanos', location: 'Parque Mirador Sur', status: 'limited' },
  { date: '25', month: 'Sep', title: 'Taller de Huerto Urbano', location: 'Huerto El Nido', status: 'open' },
  { date: '28', month: 'Sep', title: 'Fotografía Analógica', location: 'Zona Colonial', status: 'limited' },
  { date: '05', month: 'Oct', title: 'Fogata y Historias Acústicas', location: 'Campamento Las Hojas', status: 'upcoming' },
  { date: '12', month: 'Oct', title: 'Limpieza de Río y Picnic', location: 'Ribera del Río Haina', status: 'upcoming' },
];

export default function UpcomingEvents() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="events" className="events section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Calendario</span>
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-subtitle">
            Mantente al día con todas nuestras actividades. ¡No te pierdas ninguna oportunidad!
          </p>
        </div>

        <div className="events__timeline">
          {EVENTS.map((event, index) => {
            const status = STATUS_MAP[event.status];
            return (
              <div
                key={`${event.title}-${event.date}`}
                className={`event-item reveal reveal-delay-${Math.min(index + 1, 6)}`}
              >
                <div className="event-item__dot" style={{ background: status.color, color: status.color }} />
                {index < EVENTS.length - 1 && <div className="event-item__line" />}

                <div className="event-item__date">
                  <span className="event-item__day" style={{ color: status.color }}>{event.date}</span>
                  <span className="event-item__month">{event.month}</span>
                </div>

                <div className="event-item__card">
                  <div className="event-item__info">
                    <h3 className="event-item__title">{event.title}</h3>
                    <div className="event-item__location">
                      <MapPin size={13} strokeWidth={1.75} />
                      {event.location}
                    </div>
                  </div>
                  <span className={`event-item__status ${status.className}`}>
                    {status.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
