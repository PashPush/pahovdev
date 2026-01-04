import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Button from '../components/Button';
// @ts-expect-error jsx
import ShaderPhoto from '../components/ShaderPhoto';
import Interface from '../components/active/Interface';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 460 });
  useGSAP(() => {
    gsap.fromTo('.title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.4, duration: 1, ease: 'power2.inOut' });
  });

  return (
    <>
      <section className="h-[92vh]">
        <div id="hero"></div>
        <div className="hero-layout">
          <h1 className="title">
            <span>Frontend</span> <span>Developer</span>
          </h1>
        </div>
        <div className="hero-text">
          <div className="subtitle">
            Привет,
            <br />
            меня зовут Павел
            <br />Я люблю пилить
            {isMobile ? <br /> : ' '}
            <Interface />
            <br />
            <span className="strong-team">Готов усилить Вашу команду</span>
            <br />
          </div>
          <Button text="проекты" className="hero-button" id="work" />
        </div>
      </section>
      <ShaderPhoto />
    </>
  );
};

export default Hero;
