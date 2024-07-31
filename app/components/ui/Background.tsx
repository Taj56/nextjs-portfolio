'use client'

import React from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import CVButton from "./CVButton";

gsap.registerPlugin(TextPlugin)

export function GridBackground() {

  useGSAP(()=>{
    gsap.to('#sub', {
      delay: 0.5,
      duration: 1.5,
      ease: 'power1.inOut',
      text: 'Front-end Developer',
    });

  },[]);

  return (
    <div className="h-screen w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center flex-col text-center" id="home">
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8 text-white">
        Passionate <br /> <span className="text-emerald-500" id="sub"></span>
      </p>
      <p className="text-2xl md:text-4xl text-white">
        Hi I'm Tajay, a <span className="text-emerald-500 mb-12">React</span>.js Developer based in Jamaica
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <Button text={'Check Out My Work'} />
        <CVButton text={'Download CV'} />
      </div>
    </div>
  );
}
