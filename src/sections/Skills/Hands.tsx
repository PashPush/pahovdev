import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

const Hands = () => {
  const horizontal = useMediaQuery({ maxHeight: 600 });

  useGSAP(() => {
    gsap.delayedCall(0.2, () => {
      const mainTrigger = ScrollTrigger.getAll().find(st => st.trigger && st.trigger.id === 'skills');

      if (!mainTrigger) {
        console.log('Main horizontal ScrollTrigger not found');
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-bg',
          scrub: 1,
          containerAnimation: mainTrigger.animation,
          start: 'left 80%',
          end: 'left 0%',
        },
      });

      tl.fromTo(
        '.hit-hand',
        { scale: 3 },
        {
          scale: 1,
          translateY: 0,
          translateX: !horizontal ? 100 : 0,
          duration: 1,
        }
      )
        .to(
          '.hit-hand',
          {
            translateY: 60,
            duration: 0.2,
          },
          '>'
        )
        .to(
          '.wait-hand',
          {
            translateY: -30,
            duration: 0.2,
          },
          '<'
        )
        .to(
          '.boom-hand',
          {
            opacity: 1,
            scale: 1.5,
            duration: 0.2,
          },
          '-=0.25'
        )
        .to(
          '.second-bg',
          {
            backgroundColor: '#000',
            duration: 0.2,
          },
          '<'
        )
        .to(
          '.boom-hand',
          {
            opacity: 0,
            duration: 0.2,
          },
          '>'
        )
        .to(
          {},
          {
            duration: 0.3,
          },
          '>'
        )
        .to(
          '.hit-hand',
          {
            opacity: 0,
            duration: 0.1,
          },
          '>'
        )
        .to(
          '.wait-hand',
          {
            opacity: 0,
            duration: 0.1,
          },
          '<'
        )
        .to(
          '.like-hand',
          {
            opacity: 1,
            duration: 0.1,
          },
          '<'
        )
        .to(
          '.point-hand',
          {
            opacity: 1,
            duration: 0.1,
          },
          '<'
        )
        .to(
          {},
          {
            duration: 0.5,
          },
          '>'
        )
        .to(
          '.like-hand',
          {
            translateY: horizontal ? -50 : -140,
            translateX: -15,
            rotate: -178,
            duration: 0.3,
          },
          '>'
        )
        .to(
          '.point-hand',
          {
            translateY: horizontal ? 100 : 250,
            rotate: 0,
            duration: 1,
          },
          '<'
        )
        .to(
          {},
          {
            duration: 0.4,
          },
          '>'
        )
        .to(
          '.point-hand',
          {
            opacity: 0,
            duration: 0.1,
          },
          '>'
        )
        .to(
          '.call-hand',
          {
            opacity: 1,
            duration: 0.1,
          },
          '<'
        );
    });
  }, []);

  return (
    <div className="second-bg">
      <span className="hand wait-hand">🖐</span>
      <span className="hand like-hand">👎</span>
      <span className="hand boom-hand">💥</span>
      <span className="hand hit-hand">🤚</span>
      <span className="hand point-hand">👉</span>
      <span className="hand call-hand">🤙</span>
    </div>
  );
};

export default Hands;
