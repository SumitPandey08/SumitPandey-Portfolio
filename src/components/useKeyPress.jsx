
import { useEffect, useRef } from "react";

// Hook with stable handler reference for key presses
const useKeyPress = (key, handler) => {
    const handlerRef = useRef(handler);
    useEffect(() => {
      handlerRef.current = handler;
    }, [handler]);
  
    useEffect(() => {
      const onKey = (e) => {
        if (e.key === key) handlerRef.current(e);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [key]); 
  };

  export default useKeyPress;
