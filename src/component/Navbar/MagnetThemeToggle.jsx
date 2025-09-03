/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const MagnetThemeToggle = ({ theme, toggleTheme }) => {
  const buttonRef = useRef(null);

  // posisi magnet
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 1.0);
    y.set(offsetY * 1.0);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={toggleTheme}
      style={{ x: springX, y: springY }}
      className="
        relative flex items-center justify-center 
        w-10 h-10 rounded-full overflow-hidden
        dark:bg-zinc-800 bg-zinc-200
        shadow-md border border-gray-300 dark:border-gray-600 
        cursor-pointer transition-colors
        group
      ">
      {/* background animasi */}
      <span
        className="
          absolute inset-0 rounded-full 
          bg-violet-700
          scale-0 group-hover:scale-100
          transition-transform duration-500 ease-out
          origin-center
          z-0
        "></span>

      {/* icon */}
      <span className="relative z-10">
        {theme === "dark" ? (
          <FaSun className="size-6" />
        ) : (
          <FaMoon className="size-6" />
        )}
      </span>
    </motion.button>
  );
};

export default MagnetThemeToggle;
