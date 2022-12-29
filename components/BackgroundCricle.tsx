import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCricle({}: Props) {
  return (
    <>
     <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
       scale: [1,2,2,3,1],
       opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
       borderRadius:["20%","20%","50%","80%","70%"]
      }}
      transition={{
        duration: 2.5,
      }}
     
     className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-60 animate-ping"/>
        <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-60 "/>
        {/* <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 "/> */}
        <div className=" absolute border border-[#F7AB0A] rounded-full h-[550px] w-[550px] mt-60 animate-pulse opacity-20"/>
        {/* <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-60 "/> */}
        
    </motion.div>
    </>
  );
}
