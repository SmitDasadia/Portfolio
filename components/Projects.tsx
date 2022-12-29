/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
          Projects
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
          <ProjectCard/>
        </div>
        
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] skew-y-12" />
      </motion.div>
    </>
  );
}
