import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Process />
        <Experience />
        <WhyWorkWithMe />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
