/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function ProjectCard({}: Props) {
  return (
    <>
      <motion.div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
        <motion.img
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="/todo1.png"
          alt="todoapp"
          className="h-[100px] w-[200px] rounded-lg"
        ></motion.img>
        <motion.div 
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 className="text-2xl font-semibold text-center">Todo App</h4>
          <p className="text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam expedita quidem excepturi magni soluta id a. Autem quidem vitae, explicabo esse sapiente sequi officiis facere fugit deserunt. Quam quae quis facilis illum sed!
          </p>
          <div className="pt-3 text-2xl font-semibold text-center">
            <Link href="#about">
              <button className="heroButton text-white">Live Demo</button>
            </Link>
            <Link href="#experince">
              <button className="heroButton text-white">Github</button>
            </Link>
            
          </div>
        </motion.div>
      </motion.div>

    
    

     
    </>
  );
}
