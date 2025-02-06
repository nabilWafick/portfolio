"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ResumeButton({ isMobile }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const resumes = [
    { lang: "English", file: "/resume-en.pdf" },
    { lang: "Français", file: "/resume-fr.pdf" },
  ];

  return (
    <div className={`relative ${isMobile ? "flex justify-center" : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 rounded border border-secondary px-4 py-2 font-mono text-sm text-secondary transition-all hover:bg-secondary/10"
      >
        Resume
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute z-50 mt-2 w-40 overflow-hidden rounded border border-[#233554] bg-lightNavy shadow-xl
                          ${
                            isMobile ? "left-1/2 -translate-x-1/2" : "right-0"
                          }`}
          >
            {resumes.map((resume) => (
              <a
                key={resume.lang}
                href={resume.file}
                download
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-[#233554] hover:text-secondary"
              >
                {resume.lang}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
