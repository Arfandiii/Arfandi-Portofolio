/* eslint-disable no-unused-vars */
import React from "react";
import ParallaxText from "./ParallaxText";
import HeroText from "./HeroText";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
      className="hero scroll-mt-20 bg-zinc-200 dark:bg-zinc-800"
      id="home">
      <HeroText />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1,
            easings: "easeInOut",
          },
        }}
        className="parallax">
        <ParallaxText direction={500} baseVelocity={-1}>
          Web Developer
        </ParallaxText>
      </motion.div>
    </section>
  );
};

export default Home;
