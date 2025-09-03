/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import DataImage from "../../data";
import AnimateWords from "./AnimateWords";
const HeroText = () => {
  return (
    <div className="relative flex flex-col items-center justify-center dark:bg-zinc-800">
      <AnimateWords
        title="Muhammad Ari Arfandi"
        style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
      />
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: `0em`,
          transition: {
            delay: 1.5,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        }}
        className="lg:absolute md:static cursor-pointer lg:bottom-0 bottom-0">
        <img
          src={DataImage.HeroImage}
          alt="Muhammad Ari Arfandi"
          className="grayscale hover:grayscale-0 mx-auto size-1/2 md:size-1/3 lg:size-[30%]"
        />
      </motion.div>
    </div>
  );
};

export default HeroText;
