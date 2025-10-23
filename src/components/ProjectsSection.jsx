
import React, { useState } from "react";
import { motion } from "framer-motion";

const APP = {
    projects: [
        { title: "AI Quiz Engine", tags: ["React", "Node", "ML"], image: "https://placehold.co/600x360/1E1537/60A5FA?text=AI+Quiz+Engine", desc: "Adaptive quiz engine powered by LLMs." },
        { title: "Realtime Chat", tags: ["Socket.io", "Redis"], image: "https://placehold.co/600x360/1E1537/60A5FA?text=Realtime+Chat", desc: "Low-latency chat with presence and rooms." },
        { title: "E-commerce Platform", tags: ["MERN", "Stripe"], image: "https://placehold.co/600x360/1E1537/60A5FA?text=E-commerce", desc: "Scalable storefront with payments." },
        { title: "Docs Verify", tags: ["OCR", "Security"], image: "https://placehold.co/600x360/1E1537/60A5FA?text=Docs+Verify", desc: "Document verification with OCR & heuristics." },
      ],
}

const ProjectsSection = ({ onOpenProject }) => {
    const [filter, setFilter] = useState("All");
    const tags = ["All", ...new Set(APP.projects.flatMap((p) => p.tags))];
  
    const filtered = filter === "All" ? APP.projects : APP.projects.filter((p) => p.tags.includes(filter));
  
    return (
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8">Featured Projects</h2>
          
          {/* Filter Tags */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {tags.map((t) => (
              <motion.button
                key={t}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(t)}
                data-cursor-hover="true"
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === t ? "bg-gradient-to-r from-purple-600 to-cyan-400 text-black shadow-lg" : "bg-[#151229] text-gray-300 border border-gray-700/50 hover:bg-gray-700/20"}`}
              >
                {t}
              </motion.button>
            ))}
          </div>
  
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p, idx) => (
              <motion.article
                key={idx}
                layout
                onClick={() => onOpenProject(p)} // Entire card clicks to modal
                data-cursor-hover="true"
                whileHover={{ y: -12, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
                className="rounded-2xl overflow-hidden border border-gray-700/50 bg-[#0f0b1a]/60 cursor-pointer transition-shadow duration-300"
              >
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover transition duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-lg font-bold">VIEW DETAILS</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-white">{p.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-cyan-300">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded bg-purple-900/40 border border-purple-700/30">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3 text-sm">
                    {/* Prevent propagation so clicking links doesn't open the modal */}
                    <a href="#" onClick={(e) => e.stopPropagation()} className="text-purple-400 hover:underline">Live Demo</a>
                    <a href="#" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:underline">GitHub</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  export default ProjectsSection;
