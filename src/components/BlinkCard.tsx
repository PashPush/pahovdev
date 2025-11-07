import { useRef } from 'react';

type ExperienceCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

type RewiewCard = {
  name: string;
  position: string;
  review: string;
  imgPath: string;
  icon: string;
};

type BlinkCardProps = {
  card: ExperienceCard | RewiewCard;
  index: number;
  icon?: string;
  children: React.ReactNode;
  className?: string;
};
const BlinkCard = ({ card, index, icon = 'stars', children, className = '' }: BlinkCardProps) => {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index] as HTMLElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty('--start', `${angle + 60}`);
  };

  return (
    <div
      ref={el => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className={`card card-border rounded-xl p-10 mb-5 break-inside-avoid-column ${className}`}
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1">
        {icon === 'stars' ? (
          Array.from({ length: 5 }, (_, i) => <img key={i} src="/images/star.png" alt="star" className="size-5 mb-5" />)
        ) : (
          <span className="icon">{icon}</span>
        )}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default BlinkCard;
