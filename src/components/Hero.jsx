"use client";
import React from "react";
import ContactBtns from "./ContactBtns";
import { motion } from "framer-motion";
import { textSlideLeft, textSlideRight } from "@/utils/motion";
const Hero = () => {
  return (
    <div id="home" className="z-0 h-screen w-full text-center ">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <motion.h1
            variants={textSlideLeft}
            initial="hidden"
            animate="visible"
            className="py-4 "
          >
            Hi,I'm <span className="text-bluep">Oshri Moalem</span>
          </motion.h1>
          <motion.h1 variants={textSlideRight} initial="hidden" animate="visible">
            A Fullstack Developer
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,

              y: 0,
              transition: {
                opacity: { duration: 1.5 },
                delay: 0.7,
                duration: 0.5,
              },
            }}
            className="  m-auto w-full p-2 py-4 text-center text-base md:max-w-[70%] md:text-left md:text-lg "
          >
            I enjoy working <spam className="text-bluep">collaboratively</spam>, leveraging my
            communication,
            <spam className="text-bluep">teamwork, and interpersonal skills</spam>. <br />I
            approach problems with a critical and creative mindset, maintaining a strong work
            ethic and<spam className="text-bluep"> adaptability</spam>. Effective time
            management keeps me on track and contributes to project success.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,

              y: 0,
              transition: {
                opacity: { duration: 1.5 },
                delay: 1.1,
                duration: 0.5,
              },
            }}
            className="m-auto flex max-w-[330px] items-center justify-between py-4"
          >
            <ContactBtns />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
