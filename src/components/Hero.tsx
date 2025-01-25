'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainer } from '@/lib/utils';

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.p 
        className="font-mono text-[#64ffda] mb-5"
        variants={fadeUpVariants}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-4"
        variants={fadeUpVariants}
      >
        Brittany Chiang.
      </motion.h1>
      
      <motion.h2 
        className="text-4xl sm:text-6xl font-bold text-[#8892b0] mb-6"
        variants={fadeUpVariants}
      >
        I build things for the web.
      </motion.h2>
      
      <motion.p 
        className="max-w-xl text-[#8892b0] mb-12"
        variants={fadeUpVariants}
      >
        I'm a software engineer specializing in building (and occasionally designing) exceptional 
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at <a href="#" className="text-[#64ffda] hover:underline">Upstatement</a>.
      </motion.p>
      
      <motion.div variants={fadeUpVariants}>
        <a
          href="#work"
          className="inline-block px-7 py-5 border border-[#64ffda] text-[#64ffda] font-mono 
                   rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          Check out my work!
        </a>
      </motion.div>
    </motion.section>
  );
}
