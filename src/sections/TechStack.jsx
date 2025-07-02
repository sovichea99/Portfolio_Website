import React, { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";
import { div } from "framer-motion/client";
import CountUp from "react-countup";

const TechStack = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackImgs.map((icon, index) => (
            <div
              key={icon.name}
              className="relative card-border tech-card overflow-hidden group xl:rounded-4xl rounded-3xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className="absolute left-0 bottom-[-100%] w-full bg-white-50 dark:bg-[#2D3240] group-hover:bottom-0 transition-all duration-700 z-0"
                style={{
                  height: `${icon.percent}%`,
                  // Only animate on hover if large screen
                  bottom:
                    hoveredCard === index
                      ? 0
                      : window.innerWidth > 768
                      ? "-100%"
                      : "0",
                }}
              />

              {/* Content */}
              <div className="tech-card-content relative z-10 flex flex-col items-center justify-center">
                {/* Percentage */}
                <div className="text-xl font-bold text-black dark:text-white mb-2 h-6">
                  {hoveredCard === index || window.innerWidth <= 768 || window.innerWidth <= 1024 ? (
                    <CountUp end={icon.percent} duration={1} suffix="%" />
                  ) : (
                    <span> </span> // reserve space
                  )}
                </div>

                {/* Icon */}
                <div className="tech-icon-wrapper mb-2 w-30 h-30 flex items-center justify-center">
                  <img
                    src={icon.imgPath}
                    alt={icon.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Label */}
                <div className="padding-x w-full text-center">
                  <p className="text-black dark:text-white">{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
