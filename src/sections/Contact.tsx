import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {}, []);

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
