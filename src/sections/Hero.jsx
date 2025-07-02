import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import SplitText from "../components/SplitText";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

           <div className="dark:text-white-50   lg:text-2xl md:text-xl z-10 relative pointer-event-none">
              <SplitText/>
            </div>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        <div className="hero-3d-layout border-red-100 border-0 flex items-center justify-center">
            <img
              src="/images/vichea.jpg"
              alt="Sovichea"
              className="rounded-4xl object-cover shadow-lg xl:w-[350px] xl:h-[350px] lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] w-[150px] h-[150px]"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;