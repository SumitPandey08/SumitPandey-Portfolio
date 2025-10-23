
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "./Icon";

const MobileMenu = ({ open, onClose }) => {
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              className="absolute top-16 right-4 left-4 bg-[#1E1537] rounded-xl p-6 shadow-2xl border border-gray-700/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">Navigation</div>
                <button onClick={onClose} aria-label="Close menu" data-cursor-hover="true"><XIcon /></button>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#projects" onClick={onClose} className="py-2 px-3 rounded hover:bg-gray-800/40" data-cursor-hover="true">Projects</a>
                <a href="#services" onClick={onClose} className="py-2 px-3 rounded hover:bg-gray-800/40" data-cursor-hover="true">Services</a>
                <a href="#about" onClick={onClose} className="py-2 px-3 rounded hover:bg-gray-800/40" data-cursor-hover="true">About</a>
                <a href="#contact" onClick={onClose} className="py-2 px-3 rounded bg-indigo-700/60 text-white" data-cursor-hover="true">Get in touch</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default MobileMenu;
