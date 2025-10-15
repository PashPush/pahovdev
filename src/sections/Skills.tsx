import gsap from 'gsap';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');

      gsap.to(horizontalSections, {
        xPercent: -110 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#skills-screen',
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => '+=' + (document.querySelector('#skills-screen') as HTMLElement).offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="skills-screen">
      <div className="h-screen w-[20vw] flex items-center justify-center pt-16">
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
        <h2 className="heading">Horizontal Scroll</h2>
      </section>

      <section className="horizontal-section">
        <h2 className="heading">01</h2>
      </section>

      <section className="horizontal-section">
        <h2 className="heading">02</h2>
      </section>
    </main>
  );
};

export default Skills;
