"use client";
import { skills } from "@/Contants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { skillList, skillItem, textSlideLeft } from "@/utils/motion";
const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:-mt-60 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <div className="mx-auto mb-2">
          <h1 className="py-4 uppercase tracking-widest text-bluep">My Skills</h1>
        </div>
        <motion.div
          variants={skillList}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              variants={skillItem}
              whileHover={{ scale: 1.05 }}
              key={skill.id}
              className="mx-auto w-[95%] rounded-xl p-6 shadow-2xl shadow-blue-500/20 "
            >
              <div className="grid grid-cols-2 items-center justify-center gap-4 ">
                <div className="mx-auto">
                  <Image src={skill.imgSrc} alt={skill.imgAlt} width={60} height={60} />
                </div>
                <div className="mx-auto uppercase">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
