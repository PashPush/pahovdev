import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Approach from './sections/Approach';
import Skills from './sections/Skills/Skills';
import Review from './sections/Review';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
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
