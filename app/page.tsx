import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SpotlightBackground from "@/components/SpotlightBackground";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full relative z-10">
      <Preloader />
      <SpotlightBackground />
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Education />
      <About />
      <Contact />
    </main>
  );
}