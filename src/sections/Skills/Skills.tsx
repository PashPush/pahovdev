import gsap from 'gsap';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import First from './First';

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');
      const xPercent = isMobile ? -112.5 : -100;

      gsap.to(horizontalSections, {
        xPercent: xPercent * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#skills-screen',
          pin: true,
          scrub: 0,
          end: () => '+=' + (document.querySelector('#skills-screen') as HTMLElement).offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
        {/* <h2 className="heading">БАЗА</h2> */}
        <First />
        {/* <div className="w-72 h-32 text-6xl text-white flex-center absolute bottom-0 bg-green-700">
          <p>БАЗА</p>
        </div> */}
      </section>

      <section className="horizontal-section ">
        <h2 className="heading">ИНСТРУМЕНТЫ</h2>
      </section>

      <section className="horizontal-section">
        <h2 className="heading">ДОПОЛНИТЕЛЬНО</h2>
      </section>
    </main>
  );
};

export default Skills;
