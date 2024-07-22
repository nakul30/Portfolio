import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Testimonials />
      <Projects />
      <Skills />

      <Contact />
    </div>
  );
}

export default App;
