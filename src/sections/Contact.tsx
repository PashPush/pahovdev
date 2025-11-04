import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (isMobile) return;

    const canvas = document.querySelector('canvas#neuro');
    if (!canvas) return;

    gsap.set(canvas, { display: 'none' });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => gsap.set(canvas, { display: 'block' }),
      onLeaveBack: () => gsap.set(canvas, { display: 'none' }),
      onEnterBack: () => gsap.set(canvas, { display: 'block' }),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="contact" ref={sectionRef} className="h-[100vh]">
      <div className="flex-center h-[50vh] sm:text-9xl text-5xl">Контакты</div>
      <div className="flex-center h-[50vh] sm:text-6xl text-3xl z-50 relative text-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
        Telegram: @pahovdev
      </div>
    </div>
  );
};

export default Contact;
