import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { counterItems } from "../../constants";

const CounterItem = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-zinc-900 items-center shadow-lg rounded-lg p-10 flex flex-col justify-center"
    >
      <div className="counter-number dark:text-white-50  text-4xl font-bold mb-2">
        {isInView ? (
          <CountUp
            end={value}
            duration={2}
            suffix={` ${suffix}`}
            start={0}
            key={label} // ensures re-run on remount
          />
        ) : (
          0
        )}
      </div>
      <div className="dark:text-white-50  text-md">{label}</div>
    </div>
  );
};

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg  xl:mt-0 mt-0 ">
      <div className="mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
        {counterItems.map((item) => (
          <CounterItem
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
