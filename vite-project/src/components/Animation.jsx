import React from "react";
import { motion } from "framer-motion";
import "./Animation.css";

function Animation() {
  return (
    <div className="container">
      <motion.div
        className="square"
        animate={{
          scale: [3, 2, 1, 1],
          x: [0, 0, 0, 500],
        }}
        transition={{ repeat: Infinity }}
      ></motion.div>
      <div></div>
    </div>
  );
}

export default Animation;
