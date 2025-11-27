import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { featureLists, goodLists } from '../constants/index.ts';
import { classNames } from '../lib/classNames.ts';

const Approach = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallMobile = useMediaQuery({ maxWidth: 460 });

  useGSAP(() => {
    const start = isMobile ? 'top 1%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#approach',
        start,
        end: '+=2000',
        scrub: 1.5,
        pin: true,
      },
    });

    const contentAnimation = isMobile
      ? { stagger: 0.8, translateX: 20, ease: 'power1.inOut' }
      : { scale: 1.2, stagger: 0.8, ease: 'power1.inOut' };

    const translateY = isSmallMobile ? 130 : 0;

    maskTimeline
      .to('.will-grow', contentAnimation)
      .to({}, { duration: 2 })
      .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', {
        scale: 2,
        maskSize: '450%',
        translateY: translateY,
        duration: 1,
        ease: 'power1.inOut ',
      })
      .fromTo('#masked-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.inOut' })
      .to('.masked-span', { opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.inOut' })
      .to('.masked-p', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <div id="approach">
      <div className="col-between md:pt-12 container mx-auto h-full pt-14">
        <h2 className="will-fade">
          <span>Мой</span>
          ПОДХОД
        </h2>

        <div className="content">
          <ul className="space-y-4 will-fade will-grow md:mr-50 z-10">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="approach-img">
            <img
              src="/images/pavel7.jpg"
              alt="my approach"
              className={classNames('abs-center masked-img size-full object-contain', {
                'masked-img-mobile': isMobile,
              })}
            />
          </div>

          <ul className="space-y-4 will-fade will-grow md:ml-50 z-10">
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
            <h3>
              <span className="masked-span">Команда.</span>
              <span className="masked-span">Процесс.</span>
              <span className="masked-span">Результат.</span>
            </h3>
            <p className="masked-p">
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
export default Approach;
