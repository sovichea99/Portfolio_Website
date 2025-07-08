import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, Fadeup } from '../utility/animation';
import TitleHeader from '../components/TitleHeader';
const ShowcaseSection = () => {
  return (
    <div className="w-full h-full md:px-10 mt-10 px-5">
      <TitleHeader
        title="Work That Speaks"
        sub="✍️ Built with Precision, Designed with Purpose"
      />
      <section id="work" className="app-showcase ">

        <div className="w-full py-16 items-center px-5 md:px-10">
          <div className="showcaselayout ">
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
                <h2 className="dark:text-white-50 md:text-3xl text-xl text-black-50">
                E-Commerce Mobile App Using Flutter and Laravel
                </h2>
                <p className="dark:text-white-50 md:text-xl text-md text-black-50">
                 Engineered and integrated a secure Laravel REST API with a MongoDB backend to manage all application data.
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
                <h2>Full-Stack E-Commerce Website Using React.js and Laravel</h2>
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
                <h2>E-commerce Website Using React.js and Fake API</h2>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseSection;
