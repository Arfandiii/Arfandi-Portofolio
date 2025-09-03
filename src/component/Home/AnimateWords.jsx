/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
const AnimateWord = ({ title, style }) => {
  const ref = useRef(null);

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };
  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className="flex flex-col overflow-hidden text-center text-[55px] font-extrabold leading-[0.85em] text-zinc-700 dark:text-zinc-200 sm:leading-[0.95em] md:text-[120px] lg:text-[200px]">
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden">
            <motion.span className={style} variants={wordAnimation}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimateWord;

AnimateWord.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};
