"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/utils";

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
        <p className="font-mono text-[#64ffda] text-sm mb-4">04.Contact</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6">
          Contactez moi
        </h2>
        <p className="text-[#8892b0] mb-12">
          Je suis à la recherche de nouvelles opportunités, ma boîte de
          réception est toujours ouvert. Si vous avez des questions ou voulez
          que nous discutons, je ferai de mon mieux pour vous répondre.
        </p>
        <a
          href="mailto:nabilsoumanou7@gmail.com"
          className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono 
                   rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          Envoyez moi un mail !
        </a>
      </motion.div>

      <motion.footer
        className="mt-auto pt-24 text-center font-mono font-medium text-sm text-[#8892b0]"
        variants={fadeUpVariants}
      >
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition-colors"
        >
          <p>Inspiré du portfolio de Brittany Chiang</p>
        </a>
      </motion.footer>
    </motion.section>
  );
}
