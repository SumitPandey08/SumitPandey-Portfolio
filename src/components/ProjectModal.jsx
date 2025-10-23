
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "./Icon";
import useKeyPress from "./useKeyPress";

const ProjectModal = ({ project, onClose }) => {
    useKeyPress("Escape", () => onClose());
    if (!project) return null;
    return (
      <AnimatePresence>
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className="max-w-4xl w-full bg-[#151229] rounded-2xl p-8 border border-purple-700/50 shadow-[0_0_40px_rgba(147,51,234,0.3)]">
            <div className="flex justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-md text-gray-300 mt-2">{project.desc}</p>
                <div className="mt-4 flex gap-2">
                  {project.tags.map((t) => <span key={t} className="px-3 py-1 text-sm bg-cyan-900/50 text-cyan-300 rounded-full border border-cyan-700/40">{t}</span>)}
                </div>
              </div>
              <button onClick={onClose} aria-label="Close modal" data-cursor-hover="true" className="p-2 rounded-full hover:bg-white/10 transition"><XIcon size={30} /></button>
            </div>
  
            <div className="grid md:grid-cols-2 gap-8">
              <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-xl shadow-xl" />
              <div>
                <h4 className="font-bold text-xl text-cyan-300">Technical Highlights</h4>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">Demo description and technical highlights go here. Explain the architecture, tech choices, challenges solved, and outcomes. Focus on what makes this project unique and scalable.</p>
                <div className="mt-6 flex gap-3">
                  <a href="#" className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:bg-cyan-300 transition" data-cursor-hover="true">Live Demo</a>
                  <a href="#" className="px-5 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 transition" data-cursor-hover="true">View Code</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  export default ProjectModal;
