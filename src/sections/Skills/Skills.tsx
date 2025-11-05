import gsap from 'gsap';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import First from './First';
import Second from './Second';
import Third from './Third';

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');
      const xPercent = isMobile ? -112.52 : -100;
      const canvas = document.querySelector('canvas#neuro');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#skills-screen',
          pin: true,
          scrub: 1,
          end: () => '+=' + (document.querySelector('#skills-screen') as HTMLElement).offsetWidth,
        },
      });

      tl.to({}, { duration: 0.1 });

      tl.to(horizontalSections, {
        xPercent: xPercent * (horizontalSections.length - 1),
        ease: 'none',
      });

      tl.to(canvas, { display: isMobile ? 'none' : 'block', duration: 0.2 });
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <main id="skills-screen">
      <div className="skills-word">
        <h1 id="skills">
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </h1>
      </div>
      <section className="horizontal-section">
        <First />
      </section>

      <section className="horizontal-section">
        <Second />
      </section>

      <section className="horizontal-section">
        <Third />
      </section>
    </main>
  );
};

export default Skills;
