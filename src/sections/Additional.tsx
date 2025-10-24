import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Additional = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);
  return (
    <div ref={sectionRef} className="h-[43vh] pb-20 relative">
      <div className="additional">
        <div ref={project1Ref}>
          Task: <span className="text-gray-300 ml-1 w-max">To do</span>
        </div>
        <div ref={project2Ref}>
          Task: <span className="text-yellow-200 ml-1 w-max">In progress</span>
        </div>
        <div ref={project3Ref}>
          Task: <span className="text-green-300 ml-1 w-max">Done</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 bg-gradient-to-b to-black w-full h-full"></div>
    </div>
  );
};

export default Additional;
