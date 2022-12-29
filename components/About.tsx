/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
          About Me
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-54 md:h-85 xl:w-[300px] xl:h-[400px] md:mt-20 mt-20"
          src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=740&t=st=1671462033~exp=1671462633~hmac=7756b51e72175d838daed1a0cd39ae3211d7eb9787862fcd6ab9f50644307289"
          alt="aboutimg"
        />

        <motion.div 
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        
        className="space-y-10 px-0 md:px-10">
          <h4 className="text-3xl font-semibold">
            Text Here{" "}
            <span className="underline decoration-[#F7AB0A]">little</span> for
            About
          </h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            reprehenderit tenetur corrupti praesentium. Quae beatae, officiis
            illum asperiores cupiditate possimus facilis. Dolorem, dolore
            repudiandae.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
