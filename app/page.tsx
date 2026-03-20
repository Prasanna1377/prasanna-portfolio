import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
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