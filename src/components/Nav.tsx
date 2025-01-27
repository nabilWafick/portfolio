"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ResumeButton from "./ResumeButton";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "about", name: "A Propos", number: "01" },
    { id: "experience", name: "Expérience", number: "02" },
    { id: "work", name: "Projets", number: "03" },
    { id: "contact", name: "Contact", number: "04" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <motion.header
      className="fixed top-0 z-[999] w-full px-6 py-4 backdrop-blur sm:px-12 bg-[#0a192f]/90"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-[#64ffda] relative z-[1000] font-semibold text-2xl"
        >
          NS
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map(({ id, name, number }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                className={`group flex items-center gap-1  text-sm ${
                  activeSection === id
                    ? "text-[#64ffda]"
                    : "text-[#ccd6f6] hover:text-[#64ffda]"
                }`}
              >
                <span className="text-[#64ffda]">{number}.</span>
                <span>{name}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/archive"
              className="group flex items-center gap-1 text-sm text-[#ccd6f6] hover:text-[#64ffda]"
            >
              <span className="text-[#64ffda]">05.</span>
              <span>Archive</span>
            </Link>
          </li>

          <li>
            <Link
              href="/resume-fr"
              className="group flex items-center gap-1 text-sm text-[#ccd6f6] hover:text-[#64ffda]"
            >
              <span>Résumé</span>
            </Link>
          </li>
          {/* <li>
            <ResumeButton />
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64ffda] relative z-[1000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-[#0a192f]/90 backdrop-blur z-[997]"
                onClick={handleLinkClick}
              />
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-y-0 right-0 w-[75%] max-w-sm bg-[#112240] shadow-lg z-[998] p-8"
              >
                <nav className="flex h-full flex-col items-center justify-center">
                  <ul className="space-y-6 w-full">
                    {sections.map(({ id, name, number }) => (
                      <li key={id} className="text-center">
                        <Link
                          href={`/#${id}`}
                          onClick={handleLinkClick}
                          className={`group flex flex-col items-center gap-1.5 font-mono text-base ${
                            activeSection === id
                              ? "text-[#64ffda]"
                              : "text-[#ccd6f6] hover:text-[#64ffda]"
                          }`}
                        >
                          <span className="text-[#64ffda] text-sm">
                            {number}.
                          </span>
                          <span>{name}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="text-center">
                      <Link
                        href="/archive"
                        onClick={handleLinkClick}
                        className="group flex flex-col items-center gap-1.5 font-mono text-base text-[#ccd6f6] hover:text-[#64ffda]"
                      >
                        <span className="text-[#64ffda] text-sm">05.</span>
                        <span>Archive</span>
                      </Link>
                    </li>
                    <li className="pt-6">
                      <Link
                        href="/resume-fr"
                        className="group flex items-center gap-1 text-sm text-[#ccd6f6] hover:text-[#64ffda]"
                      >
                        <span>Résumé</span>
                      </Link>
                      {/* <ResumeButton isMobile={true} /> */}
                    </li>
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
