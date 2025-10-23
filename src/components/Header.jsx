
import React from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "./Icon";

const Header = ({ onOpenMenu }) => {
    return (
      <header className="sticky top-0 z-40 bg-gradient-to-b from-[#0f0b1a]/70 to-transparent backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group" data-cursor-hover="true">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#553c9a] to-[#22d3ee] flex items-center justify-center text-white font-extrabold shadow-lg"
            >SP</motion.div>
            <div>
              <div className="text-sm font-semibold leading-tight">Sumit Pandey</div>
              <div className="text-xs text-gray-400">Full-stack Engineer</div>
            </div>
          </a>
  
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {["Projects", "Services", "About"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 transition" data-cursor-hover="true">{item}</a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-400 text-black font-semibold shadow-xl hover:shadow-cyan-400/30 transition" data-cursor-hover="true">Contact</a>
          </nav>
  
          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            onClick={onOpenMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
    );
  };

  export default Header;
