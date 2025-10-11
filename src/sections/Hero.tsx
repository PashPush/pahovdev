import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Button from '../components/Button';
import { words } from '../constants';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.4, duration: 1, ease: 'power2.inOut' }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Превращаю
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>в Реальные Проекты</h1>
              <h1>приносящие Результаты</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Привет, меня зовут Павел и я люблю пилить <span className="text-span">интерфейсы</span> 🪚
            </p>

            <Button text="смотреть работы" className="md:w-80 md:h-16 md:mt-6 mt-4 w-70 h-12" id="work" />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
