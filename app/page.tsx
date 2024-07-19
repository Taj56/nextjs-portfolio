
import { Grid } from "./components/Grid";
import Projects from "./components/Projects";
import { GridBackgroundDemo } from "./components/ui/Background";
import { Spotlight } from "./components/ui/Lights";

export default function Home() {
  return (
    <>
    <Spotlight fill="#00674f"/>
    <GridBackgroundDemo />
    <Grid />
    <Projects />
    </>
  );
}
