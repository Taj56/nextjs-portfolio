import { StickyScroll } from "./ui/Sticky"
import { StickyScrollRevealDemo } from "./ui/StickyScrollReveal"


const Projects = () => {
  return (
    <section className="h-[80vh] sm:h-auto w-full p-2 bg-black" id="projects">
      <h1 className="text-center md:text-5xl text-3xl text-white">Some <span className="text-emerald-500">Projects</span></h1>
        <StickyScrollRevealDemo />
    </section>
  )
}

export default Projects