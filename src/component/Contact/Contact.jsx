/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import RevealIcont from "./RevealIcont";

const Contact = () => {
  const socials = [
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/_riiarfndi",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Arfandiii",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/arfandiii",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://facebook.com/100022795128242",
    },
  ];

  return (
    <div
      className="overflow-hidden contact p-10 bg-zinc-200 dark:bg-zinc-800"
      id="contact">
      <motion.h1
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-4xl font-bold mb-2 text-center dark:text-zinc-200 text-zinc-800">
        Contact
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: 0.4,
        }}
        className="text-base/loose text-center mb-10 dark:opacity-50 dark:text-zinc-200 text-zinc-700">
        lets get in touch
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: 0.6,
        }}>
        <form
          action="https://formsubmit.co/muhammadariarfandi@gmail.com"
          method="POST"
          className="dark:bg-zinc-700 bg-zinc-300 p-10 w-fit mx-auto rounded-md dark:text-zinc-200"
          autoComplete="off">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.5,
                delay: 0.8,
              }}
              class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_name"
                class="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-neutral-600 border-zinc-400 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-zinc-700 dark:text-zinc-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-600 peer-focus:dark:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.5,
                delay: 1,
              }}
              class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="mail"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-neutral-600 border-zinc-400 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-zinc-700 dark:text-zinc-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-600 peer-focus:dark:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.5,
                delay: 1.2,
              }}
              class="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="floating_message"
                rows="5"
                cols="50"
                class="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-neutral-600 border-zinc-400 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                placeholder=" "
                required></textarea>
              <label
                for="floating_message"
                class="peer-focus:font-medium absolute text-sm text-zinc-700 dark:text-zinc-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your message
              </label>
            </motion.div>

            <motion.button
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.5,
                delay: 1.4,
              }}
              type="submit"
              className="bg-violet-700 text-zinc-200 p-3 rounded-lg border border-violet-600 cursor-pointer hover:bg-violet-600 font-bold">
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: 1.5,
        }}
        className="flex justify-center gap-8 text-4xl mt-14">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              duration: 0.5,
              delay: i * 0.2,
            }}
            className="hover:scale-125 hover:text-violet-700 cursor-pointer">
            <RevealIcont icon={s.icon} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
