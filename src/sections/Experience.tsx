import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { expCards } from '../constants';
import TitleHeader from '../components/TitleHeader';
import BlinkCard from '../components/BlinkCard';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const timelineHeight = isMobile ? '90%' : '70%';

  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach(card => {
      gsap.from(card as HTMLElement, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top 80%',
        },
      });
    });

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: `${timelineHeight} center`,
        once: true,
        onUpdate: self => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray('.expText').forEach(text => {
      gsap.from(text as HTMLElement, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text as HTMLElement,
          start: 'top 60%',
        },
      });
    }, '<');
  }, []);

  return (
    <section id="experience" className="app-experience">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Опыт работы" sub="💼 Моя карьера" />
        <div className="md:mt-32 mt-20 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.logoPath} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <BlinkCard index={index} card={card} className="timeline-card">
                    <a href={card.url} target="_blank" className="relative z-10">
                      <img src={card.imgPath} alt={card.logoAlt} />
                    </a>
                  </BlinkCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={card.logoAlt} />
                      </div>
                      <div>
                        <h2 className="font-semibold sm:text-3xl text-2xl">{card.title}</h2>
                        <p className="my-5 text-white-50">{card.date}</p>
                        {card.responsibilities.length > 0 && <p className="text-[#899aae] italic">{card.subtitle}</p>}
                        <ul className="exp-ul">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
