"use client";
import React from "react";
import { StickyScroll } from "./Sticky";

const content = [
  {
    title: "1930 Media",
    link: "https://1930temp.netlify.app",
    description:
      "A professional and dynamic portfolio website made for 1930 Media a marketing agency located in Kingston Jamaica. Built with React, Tailwind, and GSAP.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/1930media.png" alt="" className="w-full h-[100%] object-fill"/>
      </div>
    ),
  },
  {
    title: "Apple iPhone Pro",
    link: "https://iphonegsap.netlify.app",
    description:
      "A sleek and modern looking website made to showcase the Apple iPhone Pro and its new Titanium body and brand new chip. Built with React, Tailwind, and GSAP.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="/iphone.png" alt="" className="w-full h-[100%] object-fill"/>
      </div>
    ),
  },
  {
    title: "Comic Blog",
    link: "https://myblog-tajay.vercel.app",
    description:
      "A comics blog website made with NextJS, Tailwind, and Shadcn, the CMS used was Sanity.io. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="/blog.png" alt="" className="w-full h-[100%] object-fill"/>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 ">
      <StickyScroll content={content} />
    </div>
  );
}
