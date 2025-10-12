import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { featureLists, goodLists } from '../constants/index.ts';

const Feedback = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? 'top 1%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#approach',
        start,
        end: 'bottom center',
        scrub: 3,
        pin: true,
      },
    });

    const contentAnimation = isMobile
      ? { stagger: 0.8, translateX: 20, ease: 'power1.inOut' }
      : { scale: 1.2, stagger: 0.8, ease: 'power1.inOut' };

    maskTimeline
      .to('.will-grow', contentAnimation)
      // .to('.will-fire', { opacity: 0.4, ease: 'power1.inOut' })
      .to({}, { duration: 2 })
      .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '420%', duration: 1, ease: 'power1.inOut ' })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <div id="approach">
      <div className="md:pt-20 container mx-auto h-full pt-16">
        <h2 className="will-fade">
          <span>Мой</span>
          ПОДХОД
        </h2>

        <div className="content">
          <ul className="space-y-4 will-fade will-grow">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="approach-img">
            <img
              src="/images/pavel-light1.jpg"
              alt="approach"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade will-grow">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-70">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">
            Нормально делай
            <br />
            Нормально будет
            {/* <img src="/images/fire.png" className="will-fire" alt="check" /> */}
          </h2>
          <div id="masked-content">
            <h3>Команда. Процесс. Результат.</h3>
            <p>
              Умею работать в ритме Kanban и Scrum.
              <br />
              Фокус на качестве, сроках и общем успехе.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
