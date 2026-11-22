import Hero from "./Hero";
import Works from "./Works";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Works />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
