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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallDisplay = useMediaQuery({ maxWidth: 1400 });
  const lineWidth = isSmallDisplay ? 700 : 962;

  useGSAP(() => {
    const triggerEl =
      sectionRef && typeof sectionRef === 'object' && 'current' in sectionRef ? sectionRef.current : document.body;

    const offsetEnd = isMobile ? 50 : 500;
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

    const svg = document.querySelector('#curved-line');
    const line = svg && svg.querySelector('path');
    if (!line) return;
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
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex flex-row justify-between">
      <div className="h-[100vh] w-3/4 flex justify-center" id="content">
        <CurvedLine size={lineWidth} />
        <div className="processes">
          <div className="post-it">
            <h3>To Do</h3>
            <p>Анализирую требования и цели</p>
          </div>
          <div className="post-it">
            <h3>In Progress</h3>
            <p>Пишу надёжный, понятный код</p>
          </div>
          <div className="post-it">
            <h3>Code Review</h3>
            <p>Открыт к обсуждению и улучшениям</p>
          </div>
          <div className="post-it">
            <h3>Ready for Release</h3>
            <p>Готово к внедрению без доработок</p>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-1/4 flex-center bg-amber-900">Goodbye 11111</div>
      <div ref={endRef} className="second-end">
        Goodbye
      </div>
    </section>
  );
};

export default Second;
