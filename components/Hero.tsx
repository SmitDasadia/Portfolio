/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCricle from "./BackgroundCricle";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Smit Dasadia",
      "<ForntEndDeveloper/>",
      "Convert-Tea-Into-Code.js",
      "<Lets-Works-Together/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCricle />

        <img
          src={
            "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1671458865~exp=1671459465~hmac=73eb0a4774b1a662f6d4e7300592233eeae53bba3d20cb84878f9c17554ac30c"
          }
          alt="heroimg"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />

        <h2 className="text-sm uppercase text-gray-500 tracking-[6px] text-center">
          Junior ForntEnd Developer
        </h2>

        <div className="z-20">
          <h1 className="pt-1 text-center lg:5xl font-semibold px-10 md:text-4xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-3">
            <Link href="#about">
              <button className="heroButton">About Me</button>
            </Link>
            <Link href="#experince">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
            <Link href="#contact">
              <button className="heroButton">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
