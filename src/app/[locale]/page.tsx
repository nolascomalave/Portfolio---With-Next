import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero id="home"/>
      <About id="about"/>
      <Experience id="experience"/>
      <Contact id="contact"/>
    </>
  );
}
