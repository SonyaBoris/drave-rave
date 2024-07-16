"use client";

import { motion } from "framer-motion";

export default function TransitionModal({ children }) {
  
  return (
    <motion.div
      initial={{ x: 560 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}