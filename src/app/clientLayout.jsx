"use client";

import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLayout({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
