import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
          duration: 1,
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
    <div id="projects" ref={sectionRef} className="app-projects">
      <div className="w-full">
        <div className="projects-layout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper bg-[#168be8]">
              <img src="/images/project1.png" alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>Заголовок проекта 1</h2>
              <p className="text-white-50 md:text-xl">Стек: React, React Native, Plasmo.</p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffdaf6]">
                <img src="/images/project2.png" alt="Project 2" />
              </div>
              <h2>Заголовок проекта 2</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#b7f4b6]">
                <img src="/images/project3.png" alt="Project 3" />
              </div>
              <h2>Заголовок проекта 3</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
