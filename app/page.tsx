
import { FloatingNavDemo } from "./components/FloatingNav";
import { Grid } from "./components/Grid";
import Projects from "./components/Projects";
import { GridBackgroundDemo } from "./components/ui/Background";
import { Spotlight } from "./components/ui/Lights";

export default function Home() {
  return (
    <>
    <Spotlight fill="#00674f"/>
    <FloatingNavDemo />
    <GridBackgroundDemo />
    <Grid />
    <Projects />
    </>
  );
}
