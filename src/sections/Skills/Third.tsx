import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  IoSparklesOutline,
  IoRocketOutline,
  IoLanguageSharp,
  IoColorPaletteOutline,
  IoCompassSharp,
  IoReaderOutline,
} from 'react-icons/io5';
import { classNames } from '../../lib/classNames';
import { useMediaQuery } from 'react-responsive';

const Third = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontal = useMediaQuery({ maxHeight: 600 });

  const languages = [
    { name: 'English', level: 'C1', levelText: 'Advanced', flag: '🇬🇧', percentage: 89 },
    { name: 'Español', level: 'B1', levelText: 'Intermediate', flag: '🇪🇸', percentage: 61 },
    { name: 'Русский', level: 'NS', levelText: 'Native Speaker', flag: '🇷🇺', percentage: 100 },
  ];

  const drives = [
    {
      icon: IoRocketOutline,
      title: 'Изучение новых технологий и паттернов',
      description: 'Постоянно развиваюсь, следя за трендами и best practices',
    },
    {
      icon: IoColorPaletteOutline,
      title: 'UX/UI дизайн и внимание к деталям',
      description: 'Создаю не просто код, а продуманный пользовательский опыт',
    },
    {
      icon: IoReaderOutline,
      title: 'Саморазвитие и непрерывное обучение',
      description: 'Читаю техническую литературу, изучаю документацию, экспериментирую',
    },
    {
      icon: IoCompassSharp,
      title: 'Баланс между жизнью и кодом',
      description: 'Языки, спорт, игра на фортепиано — источники вдохновения и креативности',
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    const additionals = sectionRef.current.querySelectorAll('.additional > div');
    const beyondCode = sectionRef.current.querySelector('.beyond-code');
    const langEffective = sectionRef.current.querySelector('.lang-effective');
    const callGrow = sectionRef.current.querySelector('.call-grow');

    gsap.delayedCall(0.2, () => {
      const mainTrigger = ScrollTrigger.getAll().find(st => st.trigger && st.trigger.id === 'skills');

      if (!mainTrigger) {
        return;
      }

      additionals.forEach((additional, index) => {
        gsap.fromTo(
          additional,
          {
            opacity: 0,
            transformOrigin: 'center top',
          },
          {
            opacity: 1,
            duration: 1,
            delay: 0.5 * (index + 1),
            scrollTrigger: {
              trigger: sectionRef.current,
              containerAnimation: mainTrigger.animation,
              start: 'left 70%',
            },
          }
        );
      });

      gsap.fromTo(
        beyondCode,
        {
          y: -80,
          opacity: 0,
          transformOrigin: 'center top',
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: sectionRef.current,
            containerAnimation: mainTrigger.animation,
            start: 'left 70%',
          },
        }
      );

      gsap.fromTo(
        langEffective,
        {
          x: 50,
          opacity: 0,
          transformOrigin: 'center top',
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            containerAnimation: mainTrigger.animation,
            start: 'left 60%',
          },
        }
      );

      gsap.fromTo(
        callGrow,
        {
          y: 80,
          opacity: 0,
          transformOrigin: 'center top',
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            containerAnimation: mainTrigger.animation,
            start: 'left 45%',
          },
        }
      );
      // Animate language cards
      const langCards = sectionRef?.current?.querySelectorAll('.lang-card');
      if (langCards) {
        langCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              x: 150,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.5 * index,
              scrollTrigger: {
                trigger: sectionRef.current,
                containerAnimation: mainTrigger.animation,
                start: 'left 60%',
              },
            }
          );
        });
      }

      // Animate drive cards
      const driveCards = sectionRef?.current?.querySelectorAll('.drive-card');
      if (driveCards) {
        driveCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              x: 150,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.6 * index,
              scrollTrigger: {
                trigger: sectionRef.current,
                containerAnimation: mainTrigger.animation,
                start: 'left 60%',
              },
            }
          );
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="third-wrapper">
      <div className="max-w-7xl w-full">
        <div className="noise opacity-[0.03]"></div>
        {!horizontal && <h2 className="beyond-code">Не только код</h2>}

        <div className="additional">
          <div className="languages">
            <div className="card-title">
              <div className="lang-title-icon">
                <IoLanguageSharp className="sm:size-6 size-5 text-blue-200" />
              </div>
              <h3>Владение языками</h3>
            </div>

            <div className="flex sm:block flex-row gap-2 justify-between">
              {languages.map((lang, index) => (
                <div key={index} className="group lang-card">
                  <div className="flex sm:justify-between justify-center lg:mb-4 mb-2">
                    <div className="flex items-center lg:gap-x-4 gap-x-2 flex-wrap">
                      <span className="text-4xl">{lang.flag}</span>
                      <h4 className="text-xl text-white hidden sm:block">{lang.name}</h4>

                      <div className="flex items-center lg:gap-4 gap-2">
                        <span
                          className={classNames('lang-badge group-hover:border-white/80', {
                            'bg-green-400/40': index === 0,
                            'bg-yellow-300/40': index === 1,
                            'bg-blue-400/40': index === 2,
                          })}
                        >
                          {lang.level}
                        </span>
                        {!horizontal && (
                          <span className="text-slate-100 text-sm hidden sm:block">{lang.levelText}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative h-2 bg-[#4b1c54] rounded-full overflow-hidden">
                    <div
                      className={classNames(
                        'absolute inset-y-0 left-0 bg-gradient-to-r rounded-full transition-all duration-1000',
                        {
                          'from-[#42857b] to-[#26ccb7]': index === 0,
                          'from-[#b6784b] to-[#f3c925]': index === 1,
                          'from-[#2555b1] to-[#d0e2ff]': index === 2,
                        }
                      )}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {!horizontal && (
              <div className="lang-effective">
                <p>Умею эффективно работать с международными командами и заказчиками</p>
              </div>
            )}
          </div>

          <div className="drive">
            <div className="card-title">
              <div className="drive-title-icon">
                <IoSparklesOutline className="sm:size-6 size-5 text-purple-300" />
              </div>
              <h3>Что меня драйвит</h3>
            </div>

            {drives.map((drive, index) => {
              const Icon = drive.icon;
              return (
                <div key={index} className="group drive-card">
                  <div className="flex sm:gap-4 gap-2">
                    <div className="flex-shrink-0">
                      <div className="drive-icon-wrapper group-hover:border-white/80">
                        <Icon className="drive-icon group-hover:text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="drive-title group-hover:text-white">{drive.title}</h4>
                      {!horizontal && (
                        <p className="text-slate-200 md:text-sm xl:text-base text-xs leading-relaxed">
                          {drive.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="call-grow">
          <div>
            <p>
              Ищу возможности для роста и создания
              <span> значимых продуктов</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
