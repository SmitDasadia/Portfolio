/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";

type Props = {};

export default function Contact({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-5 mt-36">
          <motion.h4 
         initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
          className="text-3xl font-semiblod text-center">
            I have got just what you need.{" "}
            <p className="decoration-[#F7AB0A]/60 underline">Lets Talk.</p>
          </motion.h4>

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
         
          className="space-y-10">
            <div className="flex items-center space-x-5 justify-center animate-pulse">
              <HiPhone className="w-6 h-6" color="#F7AB0A" />
              <p className="text-lg">+91 0000000000</p>
            </div>
          </motion.div>

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
          
          className="space-y-10">
            <div className="flex items-center space-x-5 justify-center animate-pulse">
              <MdMail className="w-6 h-6" color="#F7AB0A" />
              <p className="text-lg">smitweb@gmail.com</p>
            </div>
          </motion.div>

          <motion.form
          
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          action="#" className="flex flex-col space-y-2 w-fit mx-auto md:mx-10">
            <div className="flex space-x-4">
              <input
                className="contactInput"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="contactInput"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <input
              className="contactInput"
              type="text"
              placeholder="Your Subject"
            />
            <textarea className="contactInput" placeholder="Your Message" />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-lg text-black font-bold text-lg"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
}
