const ITEMS = [
  'Liderazgo',
  'Debate',
  'Oratoria',
  'Voluntariado',
  'Innovación',
  'Networking',
  'Comunicación',
  'Emprendimiento',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
