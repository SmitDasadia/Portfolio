/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <>
      <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 snap-center p-10 w-[500px] md:w-[600px] bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
          className="w-10 h-10 rounded-full xl:h-[50px] xl:w-[50px] object-center object-cover"
          src="https://th.bing.com/th/id/OIP.Y9COKMQqkN_C_i0LHHqwDAHaFP?pid=ImgDet&rs=1" alt=""
         
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
          className="px-0 md:px-10"
        >
          <h4 className="text-4xl font-light md:text-xl">
            Junior Softwere Developer
          </h4>
          <p className="font-semibold text-2xl mt-1">Adobe</p>
          <p className="uppercase py-5 text-gray-300">Dec 20 2022-Present</p>
          <ul className="list-disc space-y-4 ml-5 text-sm">
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
          </ul>
        </motion.div>
      </article>

      <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 snap-center p-10 w-[500px] md:w-[600px] bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
          className="w-10 h-10 rounded-full xl:h-[50px] xl:w-[50px] object-center object-cover"
          src="https://th.bing.com/th/id/OIP.Y9COKMQqkN_C_i0LHHqwDAHaFP?pid=ImgDet&rs=1" alt=""
         
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
          className="px-0 md:px-10"
        >
          <h4 className="text-4xl font-light md:text-xl">
            Junior Softwere Developer
          </h4>
          <p className="font-semibold text-2xl mt-1">Adobe</p>
          <p className="uppercase py-5 text-gray-300">Dec 20 2022-Present</p>
          <ul className="list-disc space-y-4 ml-5 text-sm">
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
          </ul>
        </motion.div>
      </article>

      <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 snap-center p-10 w-[500px] md:w-[600px] bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
          className="w-10 h-10 rounded-full xl:h-[50px] xl:w-[50px] object-center object-cover"
          src="https://th.bing.com/th/id/OIP.Y9COKMQqkN_C_i0LHHqwDAHaFP?pid=ImgDet&rs=1" alt=""
         
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
          className="px-0 md:px-10"
        >
          <h4 className="text-4xl font-light md:text-xl">
            Junior Softwere Developer
          </h4>
          <p className="font-semibold text-2xl mt-1">Adobe</p>
          <p className="uppercase py-5 text-gray-300">Dec 20 2022-Present</p>
          <ul className="list-disc space-y-4 ml-5 text-sm">
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
          </ul>
        </motion.div>
      </article>

       

     
    </>
  );
}
