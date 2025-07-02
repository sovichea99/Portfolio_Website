import { h1, p, section } from "framer-motion/client";
import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me"
          sub="⭐️ Feedback Highlights"
        />
        <div className="lg:columns-3 md:columns-1 columns-1 mt-16 ">
          {testimonials.map(({ imgPath, name, review, mentions }) => (
            <GlowCard card={{ review }}>
              <div className="flex items-center gap-3">
                <div className="mb-5 w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img src={imgPath} alt={name} />
                </div>
                <div className="mb-5">
                  <p className="font-bold">{name}</p>
                  <p className="dark:text-white-50 text-gray-700">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
