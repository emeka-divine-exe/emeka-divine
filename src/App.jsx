import { useEffect, useState } from "react";
import Hero from "./Hero";
import Works from "./Works";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectPage from "./ProjectPage";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  const project = hash.match(/^#\/work\/([\w-]+)/);
  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
      return;
    }
    if (hash.length > 1) {
      setTimeout(() => {
        try { document.querySelector(hash)?.scrollIntoView(); } catch { /* ignore */ }
      }, 50);
    }
  }, [hash]);
  if (project) return <ProjectPage slug={project[1]} />;
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
