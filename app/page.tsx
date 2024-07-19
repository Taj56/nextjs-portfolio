
import About from "./components/About";
import { FloatingNavDemo } from "./components/FloatingNav";
import { Grid } from "./components/Grid";
import Projects from "./components/Projects";
import { GridBackground } from "./components/ui/Background";
import { Spotlight } from "./components/ui/Lights";

export default function Home() {
  return (
    <>
    <Spotlight fill="#00674f"/>
    <FloatingNavDemo />
    <GridBackground />
    <About />
    <Projects />
    </>
  );
}
