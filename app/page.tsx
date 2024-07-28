
import About from "./components/About";
import Footer from "./components/Footer";
import { FloatingNavDemo } from "./components/FloatingNav";
import MyAproach from "./components/MyAproach";
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
    <MyAproach />
    <Footer />
    </>
  );
}
