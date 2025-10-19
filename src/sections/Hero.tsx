import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Button from '../components/Button';
// @ts-expect-error jsx
import ShaderPhoto from '../components/ShaderPhoto';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.4, duration: 1, ease: 'power2.inOut' });
    // gsap.to('.react-img', { rotate: 360, repeat: -1, duration: 60, ease: 'linear' });
  });

  return (
    <>
      <section id="hero" className="h-[100vh]">
        <div className="hero-layout">
          <h1 className="title">
            <span>Frontend</span> <span>Developer</span>
          </h1>
        </div>
        <div className="hero-text">
          <p className="subtitle">
            Привет, меня зовут Павел
            <br />и я люблю пилить <span className="text-span">интерфейсы</span>
          </p>
          <Button text="смотреть работы" className="md:w-80 md:h-16 mt-6 h-12" id="work" />
          {/* <img src="/images/react.png" alt="react" className="react-img" /> */}
        </div>
      </section>
      <ShaderPhoto />
    </>
  );
};

export default Hero;
