import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import CurvedLine from './icons/CurvedLine';
import { stickers } from '../../constants';
import CurvedLineMobile from './icons/CurvedLineMobile';
import Hands from './Hands';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const smallScreen = useMediaQuery({ maxWidth: 1024 });

  const getRotate = (index: number) => {
    switch (index) {
      case 0:
        return -1;

      case 1:
        return 2;

      case 2:
        return 1;

      default:
        return -1;
    }
  };

  useGSAP(() => {
    const triggerEl =
      sectionRef && typeof sectionRef === 'object' && 'current' in sectionRef ? sectionRef.current : document.body;

    const svg = document.querySelector(smallScreen ? '#curved-line-mobile' : '#curved-line');
    const line = svg && svg.querySelector('path');

    if (line) {
      const offsetLineStart = isMobile ? 60 : smallScreen ? 100 : 150;
      const offsetLineEnd = isMobile ? 0 : smallScreen ? 100 : 250;
      const lineLength = line.getTotalLength();
      gsap.set(line, { strokeDasharray: lineLength });

      gsap.fromTo(
        line,
        {
          strokeDashoffset: smallScreen ? lineLength : -lineLength,
        },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerEl,
            start: `top+=${offsetLineStart}%`,
            end: `bottom top-=${offsetLineEnd}%`,
            scrub: 1,
          },
        }
      );
    }

    const stickers = document.querySelectorAll('.sticker');

    stickers.forEach((sticker, index) => {
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
          delay: 0.5 * (index + 1),
          scrollTrigger: {
            trigger: sticker,
            start: 'top bottom-=1000',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex flex-row justify-between">
      <div className="processes-wrapper">
        {smallScreen ? <CurvedLineMobile /> : <CurvedLine />}
        <div className="processes">
          {stickers.map(({ title, description }) => (
            <div key={title} className="sticker">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="noise sm:w-3/4"></div>
      {!isMobile && <Hands />}
    </section>
  );
};

export default Second;
