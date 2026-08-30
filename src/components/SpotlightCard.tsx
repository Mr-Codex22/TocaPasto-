import type { CSSProperties, ElementType, MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

export default function SpotlightCard({ children, className, as: Tag = 'div', style }: SpotlightCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag className={`spotlight ${className ?? ''}`} onMouseMove={handleMouseMove} style={style}>
      {children}
    </Tag>
  );
}
