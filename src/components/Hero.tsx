"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/utils";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-5xl sm:text-7xl font-bold text-lightestSlate mb-4"
        variants={fadeUpVariants}
      >
        Nabil SOUMANOU
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl font-bold text-foreground mb-6"
        variants={fadeUpVariants}
      >
        Développeur Full-Stack
      </motion.h2>

      <motion.p
        className="max-w-xl text-foreground mb-12"
        variants={fadeUpVariants}
      >
        Conçois des applications élégantes, accessibles et intuitives.
      </motion.p>

      <motion.div variants={fadeUpVariants}>
        <a
          href="#work"
          className="inline-block px-5 md:px-7 py-3  md:py-5 border border-secondary text-secondary font-mono  text-xs md:text-sm
                   rounded hover:bg-secondary/10 transition-colors"
        >
          Parcourez mes projets!
        </a>
      </motion.div>
    </motion.section>
  );
}
