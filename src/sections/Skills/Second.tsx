import { useRef, memo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import CurvedLine from './icons/CurvedLine';
import { stickers } from '../../constants';
import CurvedLineMobile from './icons/CurvedLineMobile';
import Hands from './Hands';

const Sticker = memo(({ title, description }: { title: string; description: string }) => (
  <div className="sticker">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

Sticker.displayName = 'Sticker';

const Second = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const smallScreen = useMediaQuery({ maxWidth: 1024 });

  const isSafari = useRef(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

  const getRotate = (index: number) => {
    const rotations = [-1, 2, 1];
    return rotations[index] ?? -1;
  };

  useGSAP(() => {
    const triggerEl = sectionRef.current || document.body;

    const svg = document.querySelector(smallScreen ? '#curved-line-mobile' : '#curved-line');
    const line = svg?.querySelector('path');

    if (line && !isSafari.current) {
      const offsetLineStart = isMobile ? 60 : smallScreen ? 100 : 150; // todo: compute by screen width
      const offsetLineEnd = isMobile ? 0 : smallScreen ? 100 : 230; // todo: compute by screen width
      const lineLength = line.getTotalLength();

      gsap.set(line, { strokeDasharray: lineLength });

      gsap.fromTo(
        line,
        { strokeDashoffset: smallScreen ? lineLength : -lineLength },
        {
          strokeDashoffset: 0,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: triggerEl,
            start: `top+=${offsetLineStart}%`,
            end: `bottom top-=${offsetLineEnd}%`,
            scrub: 1,
            // fastScrollEnd: true,
          },
        }
      );
    }

    const stickers = sectionRef.current?.querySelectorAll('.sticker');

    stickers?.forEach((sticker, index) => {
      gsap.fromTo(
        sticker,
        {
          x: 30,
          opacity: 0,
          rotate: -10,
          transformOrigin: 'center top',
        },
        {
          x: 0,
          rotate: getRotate(index),
          opacity: 1,
          duration: 0.7,
          delay: 0.4 * (index + 1),
          scrollTrigger: {
            trigger: sticker,
            start: 'top bottom-=1000',
          },
        }
      );
    });
  }, [isMobile, smallScreen]);

  return (
    <section ref={sectionRef} className="w-full flex flex-row justify-between">
      <div className="processes-wrapper">
        {smallScreen ? <CurvedLineMobile /> : <CurvedLine />}
        <div className="processes">
          {stickers.map(({ title, description }) => (
            <Sticker key={title} title={title} description={description} />
          ))}
        </div>
      </div>
      <div className="noise sm:w-3/4"></div>
      {!isMobile && <Hands />}
    </section>
  );
};

export default memo(Second);
