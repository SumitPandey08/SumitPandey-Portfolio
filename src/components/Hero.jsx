
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const APP = {
    name: "Sumit Pandey",
    title: "Building Digital Solutions",
    subtitle:
      "Full-stack developer specializing in modern web technologies. I create scalable applications with clean code and delightful UX.",
    profileImage: "https://picsum.photos/seed/anime-dev/240/240",
    stats: [
      { value: "2+", label: "Years Coding" },
      { value: "25+", label: "Projects" },
      { value: "2+", label: "Clients" },
      { value: "95%", label: "Code Quality" },
    ],
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
  };
  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

const Hero = () => {
    const [animationState, setAnimationState] = useState("coding");

    const codingAnimation = "/coding.json";
    const greetingAnimation = "/greeting.json";
    return (
      <motion.section id="hero" variants={staggerContainer} initial="initial" animate="animate" className="relative pt-16 pb-24 overflow-hidden">
        
        {/* Dynamic Background Light Accent */}
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
              className="w-[900px] h-[900px] bg-cyan-500/10 rounded-full absolute blur-3xl"
              style={{ transformOrigin: '20% 80%' }}
          />
          <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 0.2 }}
              transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'linear', delay: 2 }}
              className="w-[700px] h-[700px] bg-purple-500/10 rounded-full absolute blur-3xl"
              style={{ transformOrigin: '80% 20%' }}
          />
        </div>
  
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tighter"
            >
              <span className="block text-white">I'm {APP.name.split(" ")[0]}</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9333ea] to-[#22d3ee]">{APP.title}</span>
            </motion.h1>
  
            <motion.p variants={fadeUp} className="mt-6 text-xl text-gray-300 max-w-xl font-light">
              {APP.subtitle}
            </motion.p>
  
            <motion.div variants={fadeUp} className="mt-10 flex gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cyan-400 text-black font-bold shadow-2xl shadow-cyan-400/30 transition hover:scale-[1.05] active:scale-100" data-cursor-hover="true">View Work</a>
              <a href="#contact" className="inline-flex px-7 py-3 rounded-full border-2 border-purple-600 text-purple-300 hover:bg-white/10 transition hover:text-white" data-cursor-hover="true">Let's Connect</a>
            </motion.div>
  
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {APP.stats.map((s, i) => (
                <motion.div 
                  variants={fadeUp} 
                  key={i} 
                  whileHover={{ scale: 1.05, rotateX: 5, z: 20 }} // Subtle 3D hover
                  className="p-5 rounded-xl bg-[#151229] border border-purple-800/40 text-center shadow-2xl transition perspective-1000"
                >
                  <div className="text-3xl font-bold text-cyan-300">{s.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
  
          <motion.div 
            variants={fadeIn}
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }} // Dramatic entry
            animate={{ opacity: 1, scale: 1, rotate: 0 }}   
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotate: 1 }} // Subtle hover effect
            className="mx-auto"
          >
            <div 
              className="w-72 h-72 md:w-96 md:h-96 p-4 rounded-[3rem] bg-gradient-to-br from-[#4C3A7A] to-[#1E1537] flex items-center justify-center border-4 border-purple-600/50 shadow-3xl"
              onClick={() => setAnimationState(animationState === "coding" ? "greeting" : "coding")}
            >
              <Player
                src={animationState === "coding" ? codingAnimation : greetingAnimation}
                className="w-full h-full"
                autoplay
                loop
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  export default Hero;
