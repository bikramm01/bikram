"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["software", "products", "systems", "growth", "story"];

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
      Work and thinking at the intersection of{" "}
      <span className="relative inline-block w-[8ch] text-white">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-0 top-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      .
    </h1>
  );
}
