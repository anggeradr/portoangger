"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "education",
      "career",
      "skills",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    ["About", "#about"],
    ["Education", "#education"],
    ["Experience", "#career"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full border-b-4 border-black bg-[#FFD93D] transition-all duration-300 ${
        scrolled
          ? "shadow-[0_6px_0_#000]"
          : "shadow-[0_2px_0_#000]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={() => setActive("hero")}
          whileHover={{
            rotate: -2,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="border-[3px] border-black bg-white px-4 py-2 text-xl font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Angger Adrian
        </motion.a>

        {/* Menu */}
        <ul className="hidden items-center gap-2 md:flex">
          {menus.map(([label, href]) => {
            const id = href.replace("#", "");

            return (
              <li key={label} className="relative">
                <motion.a
  href={href}
  whileHover={{
    y: -2,
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="relative block rounded-sm px-3 py-2 font-bold"
>
  {active === id && (
    <motion.div
      layoutId="active-nav"
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 28,
      }}
      className="absolute inset-0 rounded-sm border-2 border-black bg-white shadow-[3px_3px_0_#000]"
    />
  )}

  <span
    className={`relative z-10 transition-colors ${
      active === id ? "text-black" : ""
    }`}
  >
    {label}
  </span>

  {active !== id && (
    <span className="absolute inset-0 rounded-sm border-2 border-transparent transition-all hover:border-black hover:bg-white" />
  )}
</motion.a>
              </li>
            );
          })}

          {/* Contact */}
          <li>
            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`ml-2 block border-[3px] border-black bg-[#FF8FAB] px-4 py-2 font-black transition-all shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
                active === "contact"
                  ? "ring-2 ring-black ring-offset-2 ring-offset-[#FFD93D]"
                  : ""
              }`}
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}