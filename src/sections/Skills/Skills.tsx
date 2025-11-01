import gsap from 'gsap';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import First from './First';

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section');
      const xPercent = isMobile ? -108.3 : -100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#skills-screen',
          pin: true,
          scrub: 1,
          end: () => '+=' + (document.querySelector('#skills-screen') as HTMLElement).offsetWidth,
        },
      });

      tl.to({}, { duration: 0.07 })
        .to(horizontalSections, {
          xPercent: xPercent * (horizontalSections.length - 1),
          ease: 'none',
        })
        .to('.skills-word', { opacity: 0 }, '<');
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
        {/* <h2 className="heading">БАЗА</h2> */}
        <First />
        {/* <div className="w-72 h-32 text-6xl text-white flex-center absolute bottom-0 bg-green-700">
          <p>БАЗА</p>
        </div> */}
      </section>

      <section className="horizontal-section">
        <h2 className="heading">БАЗА 2</h2>
      </section>

      <section className="horizontal-section ">
        <div className="video-mask">
          <svg viewBox="0 0 800 1500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="text-mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="40%"
                  textAnchor="middle"
                  dy=".35em"
                  fontFamily="Arial, sans-serif"
                  fontSize="300"
                  fontWeight="900"
                  fill="black"
                >
                  ПРО
                </text>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  dy=".35em"
                  fontFamily="Arial, sans-serif"
                  fontSize="300"
                  fontWeight="900"
                  fill="black"
                >
                  ЗОЖ
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
          </svg>
        </div>
      </section>

      <section className="horizontal-section">
        <h2 className="heading">ДОПОЛНИТЕЛЬНО</h2>
      </section>
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="https://cdn.pixabay.com/video/2017/09/20/12124-235051424_large.mp4" type="video/mp4" />
      </video>
    </main>
  );
};

export default Skills;
