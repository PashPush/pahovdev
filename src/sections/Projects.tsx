import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Projects = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
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
            start: 'top bottom-=70',
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
              <img src="/images/project-pt.webp" alt="Power Thesaurus" />
            </div>
            <div className="text-content">
              <h2>Power Thesaurus</h2>
              <p className="text-white-50 md:text-xl">Стек: React, React Native, Plasmo.</p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper project-index">
                <img src="/images/project-index.webp" alt="Index Marketing" />
              </div>
              <h2>Индекс Маркетинг</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper project-sagama">
                <img src="/images/project-sagama.webp" alt="Sagama" />
              </div>
              <h2>Sagama Group</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
