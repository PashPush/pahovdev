import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
