import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, Fadeup } from '../utility/animation';
import TitleHeader from '../components/TitleHeader';
const ShowcaseSection = () => {
  return (
    <section id="work" className="app-showcase ">
      <div className="w-full items-center">
        <div className="showcaselayout">
          {/* Left Side */}
          <motion.div
            className="first-project-wrapper"
            variants={Fadeup(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            <div className="image-wrapper">
              <img src="./images/Luxe_Living_App.png" alt="" />
            </div>
            <div className="mt-10">
              <h2>
                On-Demand Tenh Made Simple With a Powerful, User-Friendly Web Called Tenh
              </h2>
              <p className="dark:text-white-50 md:text-xl text-black-50">
                A Website built with HTML, CSS and JavaScript for a fast, user-friendly experience
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="project-list-wrapper overflow-hidden">
            <motion.div
              className="project"
              variants={Fadeup(0.3)}
              initial="hidden"
              whileInView="visible"
              
            >
              <div className="image-wrapper bg-[#ffefbd]">
                <img src="./images/furniture_web.png" alt="" />
              </div>
              <h2>Library Management Platform</h2>
            </motion.div>

            <motion.div
              className="project"
              variants={Fadeup(0.4)}
              initial="hidden"
              whileInView="visible"
              
            >
              <div className="image-wrapper bg-[#f3e600]">
                <img src="./images/minishop.png" alt="" />
              </div>
              <h2>Library Management Platform</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
