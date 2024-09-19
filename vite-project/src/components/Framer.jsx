import React, { useState } from "react";
// React
import { easeOut, motion, spring } from "framer-motion";
import "./Framer.css";
function Framer() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <motion.div
        className="circle"
        animate={{ scale: [3, 2, 1, 1], x: [0, 0, 0, 500] }}
      ></motion.div>
    </div>
  );
}

export default Framer;
