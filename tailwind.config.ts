import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--green)",
        lightNavy: "var(--light-navy)",
        lightestSlate: "var(--lightest-slate)",
        lightSlate: "var(--light-slate)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
