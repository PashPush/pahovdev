import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import CurvedLine from './icons/CurvedLine';

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallDisplay = useMediaQuery({ maxWidth: 1400 });
  const lineWidth = isSmallDisplay ? 700 : 962;

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

    const stickers = document.querySelectorAll('.sticker');

    stickers.forEach((sticker, index) => {
      gsap.fromTo(
        sticker,
        {
          x: 30,
          opacity: 0,
          rotate: -12,
          transformOrigin: 'center top',
        },
        {
          x: 0,
          rotate: getRotate(index),
          opacity: 1,
          duration: 0.9,
          delay: 0.8 * (index + 1),
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
      <div className="h-[100vh] w-full flex justify-center" id="content">
        <h2 className="heading">ДОПОЛНИТЕЛЬНО</h2>
      </div>
      {/* <div className="noise"></div> */}
    </section>
  );
};

export default Third;
