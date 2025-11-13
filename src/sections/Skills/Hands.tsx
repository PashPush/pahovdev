import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hands = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-bg',
        start: 'top+=300%',
        end: `bottom top-=500%`,
        scrub: 1,
        // once: true,
      },
    });

    tl.fromTo(
      '.hit-hand',
      { scale: 3 },
      {
        scale: 1,
        translateY: 0,
        translateX: 100,
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
          duration: 0.5,
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
          translateY: -100,
          translateX: -15,
          rotate: -175,
          duration: 0.3,
        },
        '>'
      )
      .to(
        '.point-hand',
        {
          translateY: 300,
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
