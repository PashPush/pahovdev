import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import First from './First';
import Second from './Second';
import Third from './Third';

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');
      const xPercent = isMobile ? -112.52 : -100;
      const canvas = document.querySelector('canvas#neuro');
      const skillsElement = skillsRef.current;

      if (!skillsElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#skills',
          pin: true,
          scrub: 1,
          anticipatePin: isMobile ? 1 : 0,
          fastScrollEnd: true,
          preventOverlaps: true,
          end: () => '+=' + skillsElement.offsetWidth,
          invalidateOnRefresh: false, // Don't recalculate on window resize
        },
      });

      tl.to({}, { duration: 0.1 });

      tl.to(horizontalSections, {
        xPercent: xPercent * (horizontalSections.length - 1),
        ease: 'none',
      });

      tl.to(canvas, {
        display: 'block',
        duration: 0.1,
      });

      tl.to({}, { duration: 0.1 });
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <main id="skills" ref={skillsRef}>
      <div className="skills-word">
        <h1>
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
