import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import {
  SiCodechef,
  SiLeetcode,
  SiHackerearth,
  SiHackerrank,
  SiReplit,
} from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="sticky top-0 p-2 flex items-start  justify-between max-w-7xl mx-auto z-30 xl:items-center md:text-lg">
        {/* Profiles */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center m-6 mx-3 cursor-pointer"
        >
          <BsLinkedin
            className="mx-3 text-lg  border border-[#242424] rounded-full  uppercase  tracking-widest  transition-all hover:border-[white]/80
        hover:text-[#F7AB0A]/40"
            color="grey"
          />

          <BsGithub className="mx-3 text-lg" color="grey" />

          <SiReplit className="mx-3 text-lg" color="grey" />

          <SiCodechef className="mx-3 text-lg" color="grey" />

          <SiLeetcode className="mx-3 text-lg" color="grey" />

          <SiHackerearth className="mx-3 text-lg" color="grey" />

          <SiHackerrank className="mx-3 text-lg" color="grey" />
        </motion.div>

        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center m-6 mx-3 cursor-pointer"
          >
            <MdOutlineMail className="mx-3 text-lg" color="grey" />
            <p className="uppercase hidden md:inline-flex text-lg text-gray-400">
              Get in touch
            </p>
          </motion.div>
        </Link>
      </header>
    </>
  );
}
