
import React from "react";

const TopAccent = () => (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/40 to-cyan-400/20 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400/20 to-purple-700/20 blur-3xl" />
    </div>
  );

  export default TopAccent;
