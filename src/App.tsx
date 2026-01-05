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
import { useViewportHeight } from './hooks/useViewportHeight';

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
  useViewportHeight();

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
