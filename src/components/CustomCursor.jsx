
import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    // Use MotionValue and Spring for smooth, delayed following
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
  
    const updateMousePosition = useCallback(e => {
      mouseX.set(e.clientX - 10); // Offset by half the cursor size (20/2)
      mouseY.set(e.clientY - 10);
    }, [mouseX, mouseY]);
  
    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition);
  
      // Setup global listeners for hover state on interactive elements
      const hoverables = document.querySelectorAll('a, button, [data-cursor-hover="true"], input, textarea');
      
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
  
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        hoverables.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, [updateMousePosition]);
  
    return (
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          pointerEvents: 'none', // Critical for interaction
        }}
        className={`fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full bg-cyan-300 transition-transform duration-200 mix-blend-difference will-change-transform ${isHovering ? 'scale-[3.5]' : 'scale-100 opacity-60'}`}
      />
    );
  };

  export default CustomCursor;
