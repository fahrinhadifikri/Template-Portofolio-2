import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lanyard from "./components/Lanyard";
import Cv from "./components/Cv";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Cv />
      <Lanyard />
      <Contact />
    </>
  );
}

export default App;
