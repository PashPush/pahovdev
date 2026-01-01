import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Approach from './sections/Approach';
import Review from './sections/Review';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);

gsap.config({
  nullTargetWarn: false,
  force3D: true,
});

ScrollTrigger.config({
  ignoreMobileResize: true,
});

console.log('%cЗдравствуй, дорогой друг!', 'color: #2cc800; font-weight: bold; font-size: 20px;');

const App = () => {
  const horizontal = useMediaQuery({ maxHeight: 600 });
  const isMobile = useMediaQuery({ maxWidth: 460 });

  useEffect(() => {
    const setViewportHeight = (maxHeight: number) => {
      const vh = maxHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight(window.innerHeight);

    let lastHeight = window.innerHeight;
    let resizeTimeout: number | null = null;

    const handleResize = () => {
      const maxHeight = Math.max(window.innerHeight, lastHeight);

      if (maxHeight > window.innerHeight) return;

      lastHeight = maxHeight;
      setViewportHeight(maxHeight);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    const debouncedResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }

      resizeTimeout = window.setTimeout(() => {
        handleResize();
      }, 200);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      window.removeEventListener('resize', debouncedResize);
    };
  }, [horizontal, isMobile]);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Approach />
      <Review />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
