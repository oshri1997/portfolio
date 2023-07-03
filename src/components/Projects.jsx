//import images from assets/projects
"use client";
import React from "react";

import ProjectCard from "./ProjectCard";
import { projects as projectArr } from "@/Contants";
import { motion } from "framer-motion";
import { projectList, projectItem } from "@/utils/motion";
const Projects = () => {
  return (
    <div id="projects" className="mt-24 min-h-full w-full lg:mt-12">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <h1 className="text-blue mx-auto mb-2 py-4 uppercase tracking-widest text-bluep">
          My Projects
        </h1>

        <motion.div
          variants={projectList}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className="grid gap-8 py-4 md:grid-cols-2"
        >
          {projectArr.map((project) => (
            <motion.div variants={projectItem}>
              <ProjectCard key={project.id} {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
