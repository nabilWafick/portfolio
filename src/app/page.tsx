import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* <Nav /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
