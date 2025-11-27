import { useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const languages = [
    { name: 'English', level: 'C1', levelText: 'Advanced', flag: '🇬🇧', percentage: 89 },
    { name: 'Español', level: 'B1', levelText: 'Intermediate', flag: '🇪🇸', percentage: 61 },
    { name: 'Русский', level: 'Native', levelText: 'Native Speaker', flag: '🇷🇺', percentage: 100 },
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

  return (
    <section ref={sectionRef} className="max-w-7xl pt-30 pb-10 sm:px-20 px-2">
      <div className="max-w-7xl w-full">
        <div className="noise"></div>
        <div className="mb-16 text-center z-20">
          <h2 className="text-5xl md:text-6xl mb-4 twxt-white font-yeseva-one">Не только код</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start z-20 relative">
          {/* Languages Section */}
          <div className="space-y-6 col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-gray-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <IoLanguageSharp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl text-white font-yeseva-one">Владение языками</h3>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/20 to-white/30 backdrop-blur-sm rounded-2xl py-3 px-6 border border-white/30 hover:border-white/80 transition-all duration-300 shadow-md shadow-black/10 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-x-4 flex-wrap">
                      <span className="text-4xl">{lang.flag}</span>
                      <h4 className="text-xl text-white mb-1">{lang.name}</h4>
                      <div className="flex items-center gap-4">
                        <span
                          className={classNames(
                            'px-3 py-1 bg-grey-500/50 rounded-full text-white font-bold text-sm border transition-all duration-300 border-white/30 group-hover:border-white/80',
                            {
                              'bg-green-400/40': index === 0,
                              'bg-yellow-300/40': index === 1,
                              'bg-blue-400/40': index === 2,
                            }
                          )}
                        >
                          {lang.level}
                        </span>
                        <span className="text-slate-100 text-sm">{lang.levelText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-[#660b66] rounded-full overflow-hidden">
                    <div
                      className={classNames(
                        'absolute inset-y-0 left-0 bg-gradient-to-r  rounded-full transition-all duration-1000',
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

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-slate-100 text-sm text-center">
                Комфортно работаю с международными командами и клиентами
              </p>
            </div>
          </div>

          <div className="space-y-6 col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <IoSparklesOutline className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-2xl text-white font-yeseva-one">Что меня драйвит</h3>
            </div>

            <div className="space-y-4">
              {drives.map((drive, index) => {
                const Icon = drive.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/20 to-white/30 backdrop-blur-sm rounded-2xl p-3 border border-white/30 hover:border-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:translate-x-1"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-[#660b66] rounded-xl border border-white/50 group-hover:border-white/80 transition-colors">
                          <Icon className="w-5 h-5 text-white-50 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-100 mb-2 group-hover:text-white transition-colors">{drive.title}</h4>
                        <p className="text-slate-200 text-sm leading-relaxed">{drive.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center z-20">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-purple-500/20">
            <p className="text-white text-lg">
              Ищу возможности для роста и создания
              <span className="text-transparent font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text">
                {' '}
                значимых продуктов
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="noise"></div> */}
    </section>
  );
};

export default Third;
