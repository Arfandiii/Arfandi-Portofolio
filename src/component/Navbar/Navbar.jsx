/* eslint-disable no-unused-vars */
import MagnetThemeToggle from "./MagnetThemeToggle";
import RevealLink from "./RevealLink";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState(false);

  // supaya class di <html> sinkron dengan theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar flex items-center justify-between px-4 lg:px-20 py-4 dark:bg-zinc-800 bg-zinc-200 overflow-hidden z-50 relative">
      <motion.div
        className="logo hover:text-violet-700 text-zinc-700 dark:text-zinc-200 hover:-rotate-6 cursor-pointer hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
          duration: 0.5,
        }}>
        <svg
          className="w-16"
          viewBox="0 0 1200 463"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6_5)">
            <path
              d="M452.872 15.1319L337 445.97L400.848 445.97L458.909 230.551L516.971 15.1319L484.921 15.1319L452.872 15.1319Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path
              d="M716.808 105.234C716.808 101.106 715.995 97.0187 714.415 93.205C712.835 89.3914 710.52 85.9262 707.601 83.0073C704.682 80.0885 701.217 77.7732 697.404 76.1935C693.59 74.6138 689.502 73.8008 685.375 73.8008L685.375 105.234H716.808Z"
              fill="currentColor"
            />
            <path
              d="M716.808 228.502C716.808 232.629 715.995 236.717 714.415 240.531C712.835 244.344 710.52 247.809 707.601 250.728C704.682 253.647 701.217 255.962 697.404 257.542C693.59 259.122 689.502 259.935 685.375 259.935L685.375 228.502H716.808Z"
              fill="currentColor"
            />
            <path
              d="M530.674 74.4171V447.301H592.307L592.924 74.4171H530.674Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path
              d="M531.907 74.3838H685.371L716.371 104.884L716.192 228.501L685.375 259.318H473.971L490.612 197.068L655.174 198.301V136.667H531.907V74.3838Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path
              d="M592.308 259.935L665.035 259.935L735.914 382.586L663.187 382.586L592.308 259.935Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path d="M776 75H837.634V169.916H776V75Z" fill="currentColor" />
            <path
              d="M776 198.267H837.634V321.535L806.817 383.169H776V198.267Z"
              fill="currentColor"
            />
            <path d="M776 75H837.634V169.916H776V75Z" stroke="currentColor" />
            <path
              d="M776 198.267H837.634V321.535L806.817 383.169H776V198.267Z"
              stroke="currentColor"
            />
            <path
              d="M1057.98 228.24L910.32 137.664C907.814 136.297 906.561 134.474 906.561 132.195C906.561 130.828 907.016 129.347 907.928 127.752L937.322 77.166C938.689 74.4316 940.512 73.0645 942.791 73.0645C943.93 73.0645 945.298 73.5202 946.893 74.4316L1155.73 202.605C1158.01 203.973 1159.49 205.682 1160.17 207.732C1161.09 209.555 1161.54 211.72 1161.54 214.227V242.254C1161.54 244.76 1161.09 247.039 1160.17 249.09C1159.49 250.913 1158.01 252.508 1155.73 253.875L946.893 382.049C945.298 382.96 943.93 383.416 942.791 383.416C940.512 383.416 938.689 382.049 937.322 379.314L907.928 328.729C907.016 327.133 906.561 325.652 906.561 324.285C906.561 322.007 907.814 320.184 910.32 318.816L1057.98 228.24Z"
              fill="currentColor"
            />
            <path
              d="M142.023 228.24L289.68 318.816C292.186 320.184 293.439 322.007 293.439 324.285C293.439 325.652 292.984 327.133 292.072 328.729L262.678 379.314C260.855 382.049 259.032 383.416 257.209 383.416C255.614 383.416 254.247 382.96 253.107 382.049L44.2695 253.875C41.9909 252.508 40.3958 250.913 39.4844 249.09C38.8008 247.039 38.459 244.76 38.459 242.254V214.227C38.459 211.72 38.8008 209.555 39.4844 207.732C40.3958 205.682 41.9909 203.973 44.2695 202.605L253.107 74.4316C254.247 73.5202 255.614 73.0645 257.209 73.0645C259.032 73.0645 260.855 74.4316 262.678 77.166L292.072 127.752C292.984 129.347 293.439 130.828 293.439 132.195C293.439 134.474 292.186 136.297 289.68 137.664L142.023 228.24Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </motion.div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 text-zinc-800 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:dark:bg-transparent md:bg-transparent dark:bg-white/30 backdrop-blur-md md:p-0 p-4 rounded-br-2xl rounded-bl-2xl transition-all md:transition-none  ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0 dark:text-zinc-200"
        }`}>
        {["Home", "About", "Project", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: index * 0.2,
            }}>
            <a
              className="hover:text-violet-700 text-lg font-medium"
              href={`#${item.toLowerCase()}`}>
              <RevealLink text={item} />
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="theme text-zinc-700 dark:text-zinc-200"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
          duration: 0.5,
        }}>
        <MagnetThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
