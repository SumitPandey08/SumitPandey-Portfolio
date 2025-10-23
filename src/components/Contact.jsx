
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [state, setState] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Mock submission
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setState({ name: "", email: "", message: "" }); // Reset form
      }, 3500);
    };
  
    return (
      <section id="contact" className="py-24 bg-[#0f0b1a]/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-extrabold">Let's Build Something Amazing</h2>
            <p className="text-gray-400 mt-4 text-lg">Reach out for collaborations, freelance projects, or full-time opportunities. I'm always open to discussing new ideas.</p>
  
            <div className="mt-8 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-cyan-300 w-20">Email:</span> 
                <a href="mailto:sp.sumitpandey@gmail.com" className="text-white hover:text-cyan-300 transition" data-cursor-hover="true">sp.sumitpandey06@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-cyan-300 w-20">Phone:</span> 
                <a href="tel:+919876543210" className="text-white hover:text-cyan-300 transition" data-cursor-hover="true">+91 9876543210</a>
              </div>
              <div className="pt-4">
                <h4 className="font-bold text-xl text-purple-400 mb-2">Follow My Work</h4>
                <div className="flex gap-6 mt-2 text-gray-300 text-lg">
                  <a href="https://leetcode.com/u/SumitPandey08/" className="hover:text-cyan-300 transition" data-cursor-hover="true">LeetCode</a>
                  <a href="https://www.linkedin.com/in/sumit-pandey-250271290/" className="hover:text-cyan-300 transition" data-cursor-hover="true">LinkedIn</a>
                  <a href="https://github.com/SumitPandey08" className="hover:text-cyan-300 transition" data-cursor-hover="true">GitHub</a>
                  <a href="https://www.instagram.com/_sumitpandey08/" className="hover:text-cyan-300 transition" data-cursor-hover="true">Instagram</a>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <form onSubmit={handleSubmit} className="bg-[#151229] p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
              <label className="block text-sm text-gray-300 font-medium">Name
                <input required value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} className="mt-2 w-full p-4 rounded-lg bg-[#0f0b1a] border border-gray-600 focus:border-cyan-400 outline-none transition text-white" />
              </label>
              <label className="block text-sm text-gray-300 font-medium mt-4">Email
                <input required type="email" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} className="mt-2 w-full p-4 rounded-lg bg-[#0f0b1a] border border-gray-600 focus:border-cyan-400 outline-none transition text-white" />
              </label>
              <label className="block text-sm text-gray-300 font-medium mt-4">Message
                <textarea required value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} rows={5} className="mt-2 w-full p-4 rounded-lg bg-[#0f0b1a] border border-gray-600 focus:border-cyan-400 outline-none transition text-white" />
              </label>
              <div className="mt-6 flex items-center gap-4">
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover="true"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 font-bold text-black shadow-lg hover:shadow-cyan-400/50 transition"
                >
                  Send Message
                </motion.button>
                {sent && <div className="text-sm font-semibold text-green-400">✅ Message sent (mock)</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
