// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useRef, useState, useEffect } from 'react';
import Chainsaw from './Chainsaw';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { classNames } from '../../lib/classNames';
import Chips from './Chips';

const Interface = () => {
  const isMobile = useMediaQuery({ maxWidth: 460 });
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const activeTimelinesRef = useRef([]);

  useEffect(() => {
    return () => {
      activeTimelinesRef.current.forEach(tl => {
        try {
          tl.kill();
        } catch (e) {
          // skip
        }
      });
      activeTimelinesRef.current = [];
    };
  }, []);

  const runStage = stage => {
    const container = containerRef.current;
    if (!container) return Promise.resolve();

    const chainsaw = container.querySelector('.chainsaw');
    const faces = container.querySelector('.faces');
    const chips = container.querySelector('.wood-chips');

    const tlToPromise = tl =>
      new Promise(resolve => {
        tl.eventCallback('onComplete', () => {
          resolve();
        });
        tl.eventCallback('onKill', () => {
          resolve();
        });
      });

    const createdTimelines = [];

    if (stage === 0) {
      const tl = gsap.timeline();
      createdTimelines.push(tl);

      tl.to(chainsaw, {
        translateY: -110,
        translateX: 100,
        rotate: 210,
        width: 170,
        duration: 1,
        ease: 'power2.inOut',
      })
        .to(container, {
          'clip-path': 'polygon(-200% -500%, 160% -300%, 150% 300%, 0 300%)',
          duration: 0,
        })
        .to(chainsaw, {
          translateY: -77,
          translateX: 60,
          rotate: 178,
          width: 260,
          duration: 0.8,
          ease: 'power2.inOut',
        })
        .to(chainsaw, {
          translateY: -75,
          translateX: 70,
          rotate: 169,
          duration: 1.6,
          ease: 'ease-in-out',
        })
        .to(faces, { rotate: 1, translateY: 5, duration: 0.3 });

      const chipsTl = gsap.timeline();
      createdTimelines.push(chipsTl);
      chipsTl
        .to({}, { duration: 1.7 })
        .to(chips, { opacity: 1, duration: 0.1 })
        .to(chips, { translateY: -65, duration: 1.5 });

      activeTimelinesRef.current.push(tl);
      return tlToPromise(tl);
    }

    if (stage === 1) {
      const tl = gsap.timeline();
      createdTimelines.push(tl);

      tl.to(chainsaw, {
        translateY: -70,
        translateX: 60,
        rotate: 160,
        duration: 1,
        ease: 'power3.inOut',
      })
        .to(chainsaw, {
          translateY: -40,
          translateX: 90,
          rotate: 205,
          duration: 1.5,
          ease: 'power3.inOut',
        })
        .to(chainsaw, {
          translateY: -35,
          rotate: 195,
          duration: 1,
          ease: 'power3.inOut',
        });

      const chipsTl = gsap.timeline();
      createdTimelines.push(chipsTl);
      chipsTl
        .to(chips, { translateY: -60, rotate: -5, duration: 1 })
        .to(chips, { translateY: -55, translateX: 0, rotate: 25, duration: 1.5 })
        .to(chips, { translateY: -52, translateX: -6, rotate: 18, duration: 1 });

      const facesTl = gsap.timeline();
      createdTimelines.push(facesTl);
      facesTl.to({}, { duration: 2.5 }).to(faces, { rotate: 3, translateY: 7, duration: 1 });

      activeTimelinesRef.current.push(...createdTimelines);
      return Promise.all([tlToPromise(tl), tlToPromise(facesTl)]);
    }

    if (stage === 2) {
      const maskTl = gsap.timeline();
      createdTimelines.push(maskTl);
      maskTl
        .to(chainsaw, {
          translateY: -12,
          translateX: 70,
          rotate: 172,
          duration: 1.2,
          ease: 'power3.inOut',
        })
        .to(chainsaw, {
          translateX: 66,
          rotate: 180,
          duration: 0.5,
          ease: 'ease-in-out',
        });

      const chipsTl = gsap.timeline();
      createdTimelines.push(chipsTl);
      chipsTl.to(chips, { translateY: -30, rotate: 10, duration: 0.75 }).to(chips, { display: 'none', duration: 0 });

      const facesTl = gsap.timeline();
      createdTimelines.push(facesTl);
      facesTl
        .to({}, { duration: 0.5 })
        .to(faces, { rotate: 9, translateY: 80, translateX: 5, duration: 0.5 })
        .to(faces, { rotate: 0, rotateX: 10, translateY: 71, duration: 0.2 })
        .to(faces, { rotateX: 45, translateY: 69, translateX: 8, skewX: -10, duration: 0.5 });

      activeTimelinesRef.current.push(...createdTimelines);
      return Promise.all([tlToPromise(maskTl), tlToPromise(facesTl)]);
    }

    return Promise.resolve();
  };

  const handleClick = () => {
    if (isPlayingRef.current) return;
    if (count > 2) return;

    isPlayingRef.current = true;

    runStage(count)
      .then(() => {
        setCount(prev => prev + 1);
      })
      .catch(err => {
        console.error('Animation error', err);
      })
      .finally(() => {
        isPlayingRef.current = false;
      });
  };

  return (
    <div ref={containerRef} onClick={handleClick} className={classNames('interface', { done: count > 2 })}>
      <span className={classNames('inter', { 'no-margin': isMobile })}>интер</span>
      <Chips />
      <Chainsaw />
      <span className="faces">фейсы</span>
    </div>
  );
};

export default Interface;
