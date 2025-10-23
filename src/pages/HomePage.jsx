
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import CustomCursor from "../components/CustomCursor";
import TopAccent from "../components/TopAccent";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import useKeyPress from "../components/useKeyPress";

export default function HomePage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
  
    useKeyPress("Escape", () => {
      setMobileOpen(false);
      setActiveProject(null);
    });
  
    // Check if pointer is fine (desktop/non-touch) to display the custom cursor
    const isPointerFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  
    return (
      <div className="min-h-screen bg-[#1E1537] text-white relative overflow-x-hidden font-inter">
        {isPointerFine && <CustomCursor />}
        
        <TopAccent />
        <Header onOpenMenu={() => setMobileOpen(true)} />
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
  
        <main>
          <Hero />
          <ProjectsSection onOpenProject={(p) => setActiveProject(p)} />
          <Services />
          <About />
          <Contact />
        </main>
  
        <Footer />
  
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
  
        {/* small fixed quick-contact button */}
        <div className="fixed right-6 bottom-6 z-30">
          <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 text-black font-semibold shadow-xl hover:scale-105 transition" data-cursor-hover="true">
            Contact
          </a>
        </div>
      </div>
    );
  }
