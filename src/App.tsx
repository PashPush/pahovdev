import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
    <h1 className="flex justify-center items-center text-5xl h-[100vh]">Pavel Khovalkin's site</h1>
	</main>
 )
}

export default App
