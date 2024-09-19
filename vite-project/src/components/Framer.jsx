import React from "react";
// React
import { motion } from "framer-motion";
import "./Framer.css";
function Framer() {
  return (
    <div className="container">
      <motion.div className="circle"></motion.div>
    </div>
  );
}

export default Framer;
