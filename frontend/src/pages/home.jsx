import React, {useEffect} from 'react';
import Navbar from '../components/header';
import GridNowPlaying from '../components/MovieGrid';
import Loop from '../components/looped';
import ScrollTitle from '../components/Logo';
import ContentSection from '../components/contentSection.jsx';
import AboutWatchIt from '../components/aboutWatchIt.jsx';
import { gsap } from 'gsap';
const Home = () => {
  useEffect(() => {
    const hasPlayed = localStorage.getItem("homeAnimationPlayed");
    if (!hasPlayed){
    const tl = gsap.timeline();
    document.body.style.overflow = "auto";
    tl.fromTo(
      ".scroll-title",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );
    
    // Синхронизируем анимации .loop и .navbar
    tl.fromTo(
      ".loop",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "+=3"
    )
      .fromTo(
        ".navbar",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", onComplete: () => document.body.style.overflow = "auto" },
        "-=0.6" 
      );
    }
    localStorage.setItem("homeAnimationPlayed", true);
  }, []);

  
  return (
    <main className="bg-black min-h-screen flex flex-col">
   
    <div className="navbar sticky top-0 z-10 ">
      <Navbar />
    </div>
  
  
    <header className="bg-black flex flex-col justify-between min-h-screen relative"> 
  <div className="scroll-title flex items-center flex-col flex-grow">
    <ScrollTitle />
  </div>

  <div className="loop sticky bottom-0 left-0 w-full bg-gray-200"> 
    <Loop />
  </div>
</header>
  <div className = "mt-20">
    <AboutWatchIt />
    </div>
   <GridNowPlaying/>
  </main>
  );
};

export default Home;
