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
    <div id="contact" ref={sectionRef} className="h-[200vh]">
      <div className="mt-4">Contact</div>
    </div>
  );
};

export default Contact;
