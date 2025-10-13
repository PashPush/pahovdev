import gsap from 'gsap';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#skills',
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => '+=' + (document.querySelector('#skills') as HTMLElement).offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="skills">
      <section className="horizontal-section">
        <h1 className="heading">Horizontal Scroll</h1>
      </section>

      <section className="horizontal-section">
        <h1 className="heading">01</h1>
      </section>

      <section className="horizontal-section">
        <h1 className="heading">02</h1>
      </section>

      <section className="horizontal-section">
        <h1 className="heading">03</h1>
      </section>
    </main>
  );
};

export default Skills;
