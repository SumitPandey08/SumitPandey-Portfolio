
import React from "react";
import { motion } from "framer-motion";

const APP = {
    skills: [
        { name: "React", percent: 90 },
        { name: "Node.js", percent: 85 },
        { name: "MongoDB", percent: 75 },
        { name: "Tailwind CSS", percent: 88 },
      ],
}

const About = () => (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-extrabold">About Me</h2>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">I am Sumit, a passionate Full Stack Developer specializing in the MERN stack. I enjoy building intuitive, high-performance applications and creating delightful interfaces. My focus is on writing clean, scalable code that meets both business goals and technical excellence.</p>
  
          <h3 className="mt-8 font-bold text-xl text-purple-400">Work History (Mock)</h3>
          <ul className="mt-4 text-gray-400 space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full flex-shrink-0"></span>
              Senior Developer, TechCorp — 2022–Present (React, AWS, Node)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full flex-shrink-0"></span>
              Full Stack Developer, Innovate Solutions — 2018–2022 (MERN, CI/CD)
            </li>
          </ul>
        </div>
  
        <div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#4C3A7A]/70 to-[#1E1537]/70 border border-purple-600/50 shadow-xl">
            <h4 className="font-bold text-2xl text-white mb-6">Technical Skills</h4>
            <div className="space-y-4">
              {APP.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-gray-200 font-medium">
                    <span>{s.name}</span>
                    <span>{s.percent}%</span>
                  </div>
                  <div className="w-full bg-[#0f0b1a] h-2 rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${s.percent}%` }} 
                      viewport={{ once: true }} 
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-600" 
                      transition={{ duration: 1.5, ease: "easeOut" }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  export default About;
