import { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {

    const hasPlayed = localStorage.getItem("logoAnimationPlayed");
    

    const tl = gsap.timeline();

    // Эффект "хайпового" появления W и I
    tl.fromTo(
      ".letter1",
      { opacity: 0, y: -200, scale: 2 },
      { color: "#DBDCD0", opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "expo.inOut" }
    )
      .fromTo(
        ".letter6",
        { opacity: 0, y: 200, scale: 2 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "expo.inOut" },
        "-=0.4"
      )
      .to(
        [".letter1", ".letter6"],
        {
          color: "#D69142",
          repeat: 4,
          yoyo: true,
          duration: 0.2,
          ease: "power1.inOut",
        },
        "+=0.5" // Задержка перед началом мерцания
      )
      .to(
        ".letter1",
        { color: "#DBDCD0", x: "-300", duration: 0.6, ease: "back.in(2)" },
        "+=0.2"
      )
      .to(
        ".letter6",
        { color: "#DBDCD0", x: "200",  duration: 0.6, ease: "back.in(2)" },
        "-=0.5"
      );

    // "Хайп"
    tl.fromTo(
      ".letterT1",
      { opacity: 0, scale: 0.5, rotate: -45, y: -100 },
      { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 0.5, ease: "expo.out" }
    )
      .fromTo(
        ".letterA",
        { opacity: 0, scale: 0.5, rotate: 45, x: 100 },
        { opacity: 1, scale: 1, rotate: 0, x: 0, duration: 0.5, ease: "expo.out" },
        "-=0.4"
      )
      .fromTo(
        ".letterT",
        { opacity: 0, y: 200, scale: 1.5 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "expo.out" },
        "-=0.4"
      )
      .fromTo(
        ".letterC",
        { opacity: 0, y: -200, scale: 1.5, rotate: -15 },
        { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.5, ease: "expo.out" },
        "-=0.4"
      )
      .fromTo(
        ".letterH",
        { opacity: 0, scale: 0.5, rotate: 90, x: -100 },
        { opacity: 1, scale: 1, rotate: 0, x: 0, duration: 0.5, ease: "expo.out" },
        "-=0.4"
      );
      localStorage.setItem("logoAnimationPlayed", "true");
    
  }, []);

  return (
    <section className="hero-section justify-center items-center text-[#DBDCD0] relative">
      <h1 className="text-[256px] font-bold flex justify-center items-center relative">
        <span className="letter1 font-bebas-neue">W</span>
      </h1>

      <h1 className="text-[256px] font-bold flex justify-center items-center relative">
        <h1 className="letterT1 absolute text-[#DBDCD0] font-bebas-neue top-[10%] left-80">T</h1>
        <h1 className="letterA absolute text-[#DBDCD0] font-bebas-neue bottom-[10%] right-52">A</h1>
        <h1 className="letterT absolute text-[#DBDCD0] font-bebas-neue bottom-[10%] right-32">T</h1>
        <h1 className="letterC absolute text-[#DBDCD0] font-bebas-neue bottom-[10%]">C</h1>
        <h1 className="letterH absolute text-[#DBDCD0] font-bebas-neue bottom-[10%] left-32">H</h1>
      </h1>

      <h1 className="text-[256px] font-bold flex justify-center items-center relative">
        <span className="letter6 font-bebas-neue">I</span>
      </h1>
    </section>
  );
};

export default HeroSection;
