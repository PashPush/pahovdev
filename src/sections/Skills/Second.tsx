import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const triggerEl =
      sectionRef && typeof sectionRef === 'object' && 'current' in sectionRef ? sectionRef.current : document.body;

    const offset = isMobile ? 50 : 500;
    gsap.to(endRef.current, {
      translateX: 0,
      transformOrigin: 'center center',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top',
        end: `bottom top-=${offset}%`,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex flex-row justify-between">
      <div className="h-[100vh] w-3/4 flex-center">Hi</div>
      <div ref={endRef} className="second-end">
        Goodbye
      </div>
    </section>
  );
};

export default Second;
