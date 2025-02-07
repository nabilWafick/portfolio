"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isArchive = pathname === "/archive";
  const isProjects = pathname?.split("/")[1] === `projects`;

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
      <nav
        className={` flex ${
          isProjects ? "" : "max-w-6xl mx-auto"
        }  items-center justify-between`}
      >
        <Link
          href="/"
          className="text-secondary relative z-[1000] font-semibold text-2xl"
        >
          NS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map(({ id, name, number }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                className={`group flex items-center gap-1  text-sm ${
                  activeSection === id
                    ? "text-secondary"
                    : "text-lightestSlate hover:text-secondary"
                }`}
              >
                <span className="text-secondary">{number}.</span>
                <span>{name}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/archive"
              className={`group flex items-center gap-1 text-sm ${
                isArchive
                  ? "text-secondary"
                  : "text-lightestSlate hover:text-secondary"
              }`}
            >
              <span className="text-secondary">05.</span>
              <span>Archive</span>
            </Link>
          </li>

          <li>
            <Link
              href="/resume-fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-sm text-lightestSlate hover:text-secondary"
            >
              <span>Résumé</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary relative z-[1000]"
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
                className="fixed inset-y-0 right-0 w-[75%] max-w-sm bg-lightNavy shadow-lg z-[998]"
              >
                <nav className="flex h-screen w-full flex-col items-center justify-center bg-lightNavy py-10">
                  <ul className="space-y-6 w-full">
                    {sections.map(({ id, name, number }) => (
                      <li key={id} className="text-center">
                        <Link
                          href={`/#${id}`}
                          onClick={handleLinkClick}
                          className={`group flex flex-col items-center gap-1.5  text-base ${
                            activeSection === id
                              ? "text-secondary"
                              : "text-lightestSlate hover:text-secondary"
                          }`}
                        >
                          <span className="text-secondary text-sm">
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
                        className={`group flex flex-col items-center gap-1.5  text-base ${
                          isArchive
                            ? "text-secondary"
                            : "text-lightestSlate hover:text-secondary"
                        }`}
                      >
                        <span className="text-secondary text-sm">05.</span>
                        <span>Archive</span>
                      </Link>
                    </li>
                    <li className=" text-center">
                      <Link
                        href="/resume-fr.pdf"
                        className="group flex items-center justify-center text-lightestSlate hover:text-secondary pt-5"
                      >
                        <span>Résumé</span>
                      </Link>
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
