import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { featureLists, goodLists } from '../constants/index.ts';
import { classNames } from '../lib/classNames.ts';

const Approach = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
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
        anticipatePin: isMobile ? 1 : 0,
        fastScrollEnd: true,
        preventOverlaps: true,
      },
    });

    const contentAnimation = isMobile
      ? { translateX: 20, stagger: 0.8, ease: 'power1.inOut' }
      : { scale: 1.2, stagger: 0.8, ease: 'power1.inOut' };

    const translateY = isSmallMobile ? 100 : 0;

    maskTimeline
      .to('.will-grow', contentAnimation)
      .to({}, { duration: 2 })
      .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', {
        scale: 2,
        maskSize: isMobile ? '450%' : '300%',
        translateY: translateY,
        duration: 1,
        ease: 'power1.inOut ',
      })
      .fromTo('#masked-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.inOut' })
      .to('.masked-span', { opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.inOut' })
      .to('.masked-p', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  }, []);

  return (
    <div id="approach">
      <div>
        <h2 className="will-fade">
          <span>Мой</span>
          ПОДХОД
        </h2>

        <div className="content">
          <ul className="space-y-4 will-fade will-grow sm:mr-50 z-10">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className={classNames('approach-img', { 'approach-mobile': isMobile })}>
            <img
              src="/images/pavel.webp"
              alt="my approach"
              className={classNames('abs-center masked-img size-full object-contain', {
                'masked-img-mobile': isMobile,
              })}
              loading="lazy"
              width={isMobile ? 300 : 400}
              height={isMobile ? 300 : 400}
            />
          </div>

          <ul className="space-y-4 will-fade will-grow sm:ml-50 z-10">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="sm:w-fit w-70">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">
            Нормально делай
            <br />
            Нормально будет
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
