/* eslint-disable no-unused-vars */
import React from "react";
import DataImage, { listTools } from "../../data";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      className="about py-20 dark:bg-zinc-800 bg-zinc-200 px-6 lg:px-20"
      id="about">
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: 0.2,
        }}
        className="deskripsi mx-auto p-7 bg-zinc-300 rounded-lg xl:w-2/3 lg:w-3/4 w-full">
        <p className="text-base/loose mb-10 text-zinc-800 ">
          Hi, my name Muhammad Ari Arfandi, a web-developer soul rooted in
          Pontianak, Indonesia. Since my first line of code I've been fascinated
          by how pixels can turn into experiences—where creative design meets
          rock-solid functionality. From crafting pixel-perfect UIs to
          architecting scalable back-ends, I love transforming ideas into
          digital realities that not only look stunning but also solve
          real-world problems and elevate user happiness. This portfolio is a
          living diary of that journey: each project a milestone, each commit a
          lesson learned. Dive in, and lets build something remarkable together.
        </p>
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-4xl mb-1 text-zinc-800">
              5<span className="text-violet-500">+</span>
            </h1>
            <p className="text-zinc-800">completed projects</p>
          </div>
          <div>
            <h1 className="text-4xl mb-1 text-zinc-800">
              2<span className="text-violet-500 ">+</span>
            </h1>
            <p className="text-zinc-800">years of experience</p>
          </div>
        </div>
      </motion.div>
      <div className="tools mt-14 text-zinc-200">
        <motion.h1
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5,
            delay: 0.4,
          }}
          className="text-4xl/snug mb-4 font-bold dark:text-zinc-200 text-zinc-800 text-center">
          Tools Used
        </motion.h1>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 hover:cursor-pointer dark:text-zinc-200 text-zinc-800">
          {listTools.map((tool) => (
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.5,
                delay: tool.id * 0.2,
              }}
              className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md dark:hover:bg-zinc-700 hover:bg-zinc-300"
              key={tool.id}>
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 dark:bg-zinc-700 bg-zinc-300 p-1 dark:group-hover:bg-zinc-800 group-hover:bg-zinc-200 rounded-sm"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
