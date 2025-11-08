import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import CurvedLine from './icons/CurvedLine';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });

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

    const offsetEnd = isMobile ? 50 : 500;
    if (!isMobile) {
      gsap.to(endRef.current, {
        translateY: 0,
        transformOrigin: 'center center',
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top',
          end: `bottom top-=${offsetEnd}%`,
          scrub: 1,
        },
      });
    }

    const svg = document.querySelector('#curved-line');
    const line = svg && svg.querySelector('path');

    if (line) {
      const offsetLineStart = isMobile ? 50 : 150;
      const offsetLineEnd = isMobile ? 50 : 300;
      const lineLength = line.getTotalLength();
      gsap.set(line, { strokeDasharray: lineLength });

      gsap.fromTo(
        line,
        {
          strokeDashoffset: -lineLength,
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
          delay: 0.7 * (index + 1),
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
        <CurvedLine />
        <div className="processes">
          <div className="sticker">
            <h3>To Do</h3>
            <p>Анализирую требования и цели</p>
          </div>
          <div className="sticker">
            <h3>In Progress</h3>
            <p>Пишу надёжный, понятный код</p>
          </div>
          <div className="sticker">
            <h3>Code Review</h3>
            <p>Открыт к обсуждению и улучшениям</p>
          </div>
          <div className="sticker">
            <h3>Ready for Release</h3>
            <p>Готово к внедрению без доработок</p>
          </div>
        </div>
      </div>
      {!isMobile && (
        <>
          <div className="h-[100vh] w-1/4 flex-center bg-amber-900">Goodbye 11111</div>
          <div ref={endRef} className="second-end">
            Goodbye
          </div>
        </>
      )}

      <div className="noise"></div>
    </section>
  );
};

export default Second;
