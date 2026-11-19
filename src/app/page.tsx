import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Navigation Component */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section: Hero */}
        <Hero />

        <About /> 

        {/* Section: Skills */}
        <Skills />

        {/* Section: Projects */}
        <Projects />

        {/* Section: Pricing */}
        <Pricing />

        {/* Section: FAQ */}
        <FAQ />

        {/* Section: Blogs */}
       

        {/* Section: Contact */}
        <Contact />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
