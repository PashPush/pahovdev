import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import BlinkCard from '../components/BlinkCard';
import { feedbacks } from '../constants';

const Review = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    const cards = gsap.utils.toArray('.feedback-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.4,
        ease: 'power2.out',
      }
    );
  }, []);
  return (
    <div ref={sectionRef} className="review">
      <div className="review-wrapper">
        {feedbacks.map((feedback, index) => (
          <BlinkCard card={feedback} key={index} icon={feedback.icon} index={index} className="feedback-card">
            <div className="flex items-center gap-3">
              <div>
                <img src={feedback.imgPath} alt={feedback.name} className="rounded-full md:w-20 w-15" />
              </div>
              <div>
                <p className="font-bold">{feedback.name}</p>
                <p className="text-white-50 sm:text-base text-sm">{feedback.position}</p>
              </div>
            </div>
          </BlinkCard>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 bg-gradient-to-b to-black w-full h-full"></div>
    </div>
  );
};

export default Review;
