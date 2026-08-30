import { useState, type CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Modal from './Modal';
import { Compass, Sprout, Heart, Coffee, Camera, Flame, Calendar, MapPin, ArrowRight, Users, Ticket, Clock, Shield, CheckCircle } from 'lucide-react';

interface Activity {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  date: string;
  location: string;
  description: string;
  color: string;
  longDescription: string;
  requirements: string[];
  capacity: string;
  price: string;
  organizer: string;
  duration: string;
}

const ACTIVITIES: Activity[] = [
  {
    icon: Compass,
    title: 'MunCamp',
    date: '30 de septiembre',
    location: 'Punta Cana',
    description: 'Un Campamento donde aprenderas todo sobre modelos',
    color: 'var(--primary)',
    longDescription: 'Una experiencia de desconexión y diplomacia total. Incluye una merienda saludable de frutas locales.',
    requirements: ['Ropa Formal', 'Computadoras portatiles', 'Llegar 15 min antes (5:45 AM)'],
    capacity: '25 plazas',
    price: 'Gratis',
    organizer: 'TocaPasto RD',
    duration: '4 dias',
  },
  {
    icon: Coffee,
    title: 'Campamento Nacional Ciudadanos al 100',
    date: '7-9 de septiembre',
    location: 'Jarabacoa',
    description: 'Desarrolla habilidades de liderazgo, trabajo en equipo, comunicación efectiva, gestión del tiempo, resolución de conflictos, pensamiento crítico, inteligencia emocional y resiliencia.',
    color: 'var(--accent)',
    longDescription: 'Trae tu chaleco de agentes al 100, Insecticida, ropa deportiva y tu kit de higiene personal.',
    requirements: ['Traer un libro (de cualquier género)', 'Taza propia para el café', 'Manta para sentarse'],
    capacity: '30 participantes',
    price: 'Gratis',
    organizer: 'PLERD',
    duration: '3 días',
  },
  {
    icon: Sprout,
    title: 'Taller de Huerto Urbano',
    date: '25 de septiembre',
    location: 'Huerto Comunitario El Nido',
    description: 'Aprende las bases de la siembra orgánica, compostaje y regeneración de suelos.',
    color: 'var(--purple)',
    longDescription: 'Aprende a cultivar tus propios alimentos en espacios pequeños. En este taller práctico tocaremos tierra de verdad: prepararemos sustrato orgánico, sembraremos semillas de hortalizas de temporada y aprenderemos a mantener un compost casero sin malos olores. Te llevarás un kit de inicio de siembra.',
    requirements: ['Ropa que se pueda ensuciar', 'Gorra o sombrero', 'Guantes de jardinería (opcional)'],
    capacity: '20 plazas',
    price: '$5 (insumos)',
    organizer: 'Sembradores Locales',
    duration: '3 horas',
  },
  {
    icon: Camera,
    title: 'Fotografía Analógica',
    date: '28 de septiembre',
    location: 'Zona Colonial',
    description: 'Aprende a capturar momentos reales con rollos de película de 35mm, sin filtros digitales.',
    color: 'var(--green)',
    longDescription: 'Un recorrido fotográfico especial para reentrenar nuestra mirada. Utilizaremos cámaras mecánicas de película analógica (se prestan durante el taller) para aprender las reglas de exposición, enfoque y composición manual. Aprenderás a valorar cada disparo en un mundo donde todo es digital e inmediato.',
    requirements: ['Edad 16-29 años', 'Interés en fotografía', 'Inscripción previa'],
    capacity: '15 plazas',
    price: '$12 (rollo + revelado)',
    organizer: 'Club de Mirada Analógica',
    duration: '4 horas',
  },
  {
    icon: Flame,
    title: 'Fogata y Historias Acústicas',
    date: '5 de octubre',
    location: 'Campamento Las Hojas',
    description: 'Noche bajo las estrellas con relatos, música acústica en vivo y malvaviscos.',
    color: 'var(--pink)',
    longDescription: 'Reúnete alrededor del fuego para una noche mágica de conexión humana pura. Escucharemos historias locales de tradición oral, tocaremos guitarra acústica en vivo y compartiremos comida rústica a la brasa. Una regla estricta: todos los celulares se guardarán en un cofre al inicio del evento.',
    requirements: ['Abrigo ligero', 'Instrumento musical (si sabes tocar)', 'Mucha disposición a charlar'],
    capacity: '40 personas',
    price: 'Gratis',
    organizer: 'Noches de Fogata Dominicana',
    duration: '5 horas',
  },
  {
    icon: Heart,
    title: 'Limpieza de Río y Picnic',
    date: '12 de octubre',
    location: 'Ribera del Río Haina',
    description: 'Jornada ecológica voluntaria para limpiar el entorno natural y compartir almuerzo.',
    color: 'var(--cyan)',
    longDescription: 'Pon tu granito de arena por nuestro medio ambiente. Nos uniremos para recolectar desechos plásticos de la ribera del río, clasificándolos para reciclaje. Al finalizar el trabajo pesado, compartiremos un almuerzo campestre cortesía de la organización en agradecimiento a tu esfuerzo.',
    requirements: ['Zapatos cerrados y resistentes', 'Ropa cómoda de trabajo', 'Muchas ganas de ayudar'],
    capacity: '80 voluntarios',
    price: 'Gratis',
    organizer: 'Juventud Verde',
    duration: '6 horas',
  },
];

interface ActivityDetailModalProps {
  activity: Activity;
  onClose: () => void;
}

function ActivityDetailModal({ activity, onClose }: ActivityDetailModalProps) {
  const Icon = activity.icon;

  return (
    <div className="activity-modal">
      <div className="activity-modal__header" style={{ background: activity.color }}>
        <div className="activity-modal__icon">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="activity-modal__meta">
          <h2 className="activity-modal__title">{activity.title}</h2>
          <div className="activity-modal__chips">
            <span className="chip chip--primary">
              <Calendar size={12} /> {activity.date}
            </span>
            <span className="chip chip--primary">
              <MapPin size={12} /> {activity.location}
            </span>
            <span className="chip chip--primary">
              <Clock size={12} /> {activity.duration}
            </span>
            <span className="chip chip--primary">
              <Users size={12} /> {activity.capacity}
            </span>
            <span className="chip chip--accent">
              <Ticket size={12} /> {activity.price}
            </span>
          </div>
        </div>
      </div>

      <div className="activity-modal__body">
        <section className="activity-modal__section">
          <h3 className="activity-modal__section-title">
            <CheckCircle size={16} /> ¿De qué se trata?
          </h3>
          <p className="activity-modal__text">{activity.longDescription}</p>
        </section>

        <section className="activity-modal__section">
          <h3 className="activity-modal__section-title">
            <Shield size={16} /> Qué debes traer
          </h3>
          <ul className="activity-modal__requirements">
            {activity.requirements.map((req, i) => (
              <li key={i} className="activity-modal__requirement">
                <CheckCircle size={14} className="activity-modal__check" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="activity-modal__section">
          <h3 className="activity-modal__section-title">Organiza</h3>
          <p className="activity-modal__text">{activity.organizer}</p>
        </section>

        <div className="activity-modal__actions">
          <button className="btn btn--primary btn--large" style={{ '--card-color': activity.color } as CSSProperties}>
            Unirme al encuentro
            <ArrowRight size={18} />
          </button>
          <button className="btn btn--outline btn--large" onClick={onClose} style={{ '--card-color': activity.color } as CSSProperties}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedActivities() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  return (
    <section id="activities" className="activities section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Encuentros</span>
          <h2 className="section-title">Próximas Actividades</h2>
          <p className="section-subtitle">
            Elige un día para guardar tu móvil, salir a respirar aire puro y conectar con la comunidad en el mundo real.
          </p>
        </div>

        <div className="activities__grid">
          {ACTIVITIES.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <article
                key={activity.title}
                className={`activity-card reveal reveal-delay-${Math.min(index + 1, 6)}`}
                style={{ '--card-color': activity.color } as CSSProperties}
              >
                <div className="activity-card__icon" style={{ backgroundColor: activity.color, color: 'var(--white)' }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="activity-card__body">
                  <h3 className="activity-card__title">{activity.title}</h3>
                  <div className="activity-card__meta">
                    <span className="activity-card__meta-item">
                      <Calendar size={13} strokeWidth={1.5} />
                      {activity.date}
                    </span>
                    <span className="activity-card__meta-item">
                      <MapPin size={13} strokeWidth={1.5} />
                      {activity.location}
                    </span>
                  </div>
                  <p className="activity-card__desc">{activity.description}</p>
                  <button
                    className="activity-card__btn"
                    onClick={() => openModal(activity)}
                  >
                    Detalles e Inscripción
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
        title={selectedActivity?.title ?? ''}
        size="lg"
      >
        {selectedActivity && (
          <ActivityDetailModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
        )}
      </Modal>
    </section>
  );
}