import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="w-full flex flex-row justify-between">
      <div className="h-[100vh] w-full flex justify-center">
        <h2 className="heading font-yeseva-one">ДОПОЛНИТЕЛЬНО</h2>
      </div>
      <div className="noise squares"></div>
    </section>
  );
};

export default Third;
