
import React from "react";
import { motion } from "framer-motion";

const APP = {
    services: [
        { title: "Web Development", desc: "Responsive, accessible frontends using React." },
        { title: "Backend APIs", desc: "Robust Node.js APIs and database design." },
        { title: "Design Systems", desc: "Reusable component libraries and scalable design systems." },
        { title: "Cloud & DevOps", desc: "CI/CD, deployments and observability." },
      ],
}

const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
  };
  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

const Services = () => (
    <section id="services" className="py-20 bg-[#0f0b1a]/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4">Core Services</h2>
        <p className="text-gray-400 text-lg mb-12">End-to-end development and design systems focused on performance and accessibility.</p>
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APP.services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }} className="p-6 rounded-xl bg-[#151229]/60 border border-gray-700/50 transition-shadow">
              <div className="font-bold text-xl text-cyan-300">{s.title}</div>
              <div className="text-sm text-gray-400 mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  export default Services;
