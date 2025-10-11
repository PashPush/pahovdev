import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Feedback from './sections/Feedback';
import Skills from './sections/Skills';
import Additional from './sections/Additional';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Feedback />
      <Skills />
      <Additional />
      <Contact />
    </>
  );
};

export default App;
