/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <Head>
          <title>Smit Dasadia</title>
          <meta name="description" content="Smit Dasadia Portfolio Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

        {/* heder */}
        <Header />

        {/* hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* about */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* exprience */}
        <section id="experince" className="snap-center">
          <Experience/>
        </section>

        {/* projects */}
        <section id="projects" className="snap-start">
          <Projects/>
        </section>


        {/* contact me */}

        <section id="contact" className="snap-start">
          <Contact/>
        </section>

        {/* <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="items-end justify-end">
              <img
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1671458865~exp=1671459465~hmac=73eb0a4774b1a662f6d4e7300592233eeae53bba3d20cb84878f9c17554ac30c" alt="" />
            </div>
          </footer>
        
        </Link> */}
      </div>
    </>
  );
}
