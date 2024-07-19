"use client";
import React from "react";
import { StickyScroll } from "./Sticky";

const content = [
  {
    title: "1930 Media",
    description:
      "A professional and dynamic portfolio website made for 1930 Media a marketing agency located in Kingston Jamaica. Built with React, Tailwind, and GSAP.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        1930 Media Webside Screenshot
      </div>
    ),
  },
  {
    title: "Apple iPhone Pro",
    description:
      "A sleek and modern looking website made to showcase the Apple iPhone Pro and its new Titanium body and brand new chip. Built with React, Tailwind, and GSAP.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        iPhone Webside Screenshot
      </div>
    ),
  },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
