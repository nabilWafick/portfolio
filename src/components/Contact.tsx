'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/utils';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center pt-96 pb-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={fadeUpVariants}
      >
        <p className="font-mono text-[#64ffda] text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <p className="text-[#8892b0] mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:brittany.chiang@gmail.com"
          className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono 
                   rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>

      <motion.footer
        className="mt-auto pt-24 text-center font-mono text-sm text-[#8892b0]"
        variants={fadeUpVariants}
      >
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition-colors"
        >
          <p>Designed & Built by Brittany Chiang</p>
        </a>
      </motion.footer>
    </motion.section>
  );
}
