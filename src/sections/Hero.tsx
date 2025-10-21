import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Button from '../components/Button';
// @ts-expect-error jsx
import ShaderPhoto from '../components/ShaderPhoto';
import Interface from '../components/active/Interface';
import { useMediaQuery } from 'react-responsive';
import { classNames } from '../lib/classNames';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 460 });
  useGSAP(() => {
    gsap.fromTo('.title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.4, duration: 1, ease: 'power2.inOut' });
  });

  return (
    <>
      <section id="hero" className="h-[100vh] overflow-hidden">
        <div className="hero-layout">
          <h1 className="title">
            <span>Frontend</span> <span>Developer</span>
          </h1>
        </div>
        <div className="hero-text">
          <p className={classNames('subtitle', { 'big-bottom': isMobile })}>
            Привет,
            <br />
            меня зовут Павел
            <br />Я люблю пилить
            {isMobile ? <br /> : ' '}
            <Interface />
          </p>
          <Button text="смотреть работы" className="md:w-80 md:h-16 mt-6 h-12" id="work" />
        </div>
      </section>
      <ShaderPhoto />
    </>
  );
};

export default Hero;
