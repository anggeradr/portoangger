"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen border-b-4 border-black bg-[#6C9CFF] px-6 py-24"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{
  opacity: 0,
  x: -80,
  scale: 0.9,
}}

whileInView={{
  opacity: 1,
  x: 0,
  scale: 1,
}}
          viewport={{
  once: false,
  amount: 0.4,
}}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 12,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-full w-full border-4 border-black bg-[#FFD93D]" />

            <motion.div
  whileHover={{
    y: -12,
    rotate: 2,
    scale: 1.04,
    boxShadow: "16px 16px 0 #000",
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 15,
  }}
  className="relative -rotate-2 border-4 border-black bg-white p-4 shadow-[10px_10px_0_#000]"
>
              <Image
                src="/profile.jpeg"
                alt="Aurell Zulfa Angger Adrian"
                width={400}
                height={400}
                className="h-[400px] w-[400px] border-4 border-black object-cover"
              />

              <div className="border-x-4 border-b-4 border-black bg-[#FF8FAB] p-4 text-center">
                <p className="text-xl font-black uppercase">
                  Aurell Zulfa Angger Adrian
                </p>
                <p className="mt-1 font-bold">
                  Informatics Engineering Graduate
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div>
          {/* Title */}
          <motion.div
            initial={{
    opacity:0,
    y:-40
}}

whileInView={{
    opacity:1,
    y:0
}}
            viewport={{
  once: false,
  amount: 0.4,
}}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 14,
            }}
            className="mb-8 inline-block rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]"
          >
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              About Me
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{
    opacity:0,
    y:50
}}

whileInView={{
    opacity:1,
    y:0
}}
            viewport={{
  once: false,
  amount: 0.4,
}}
            transition={{
              duration: 0.8,
            }}
            className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000]"
          >
            <p className="text-lg leading-8 font-semibold">
  I am an Informatics Engineering graduate with experience in web
  application development, IT support, and network monitoring. I
  develop applications using Laravel, PHP, MySQL, JavaScript, and
  Next.js.
</p>

<p className="mt-5 text-lg leading-8 font-semibold">
  I also have hands-on experience in hardware and software
  troubleshooting, network configuration, and system monitoring
  using LibreNMS.
</p>

<p className="mt-5 text-lg leading-8 font-semibold">
  During my internship at Dinas Kominfo Kota Semarang, I worked on
  website development and public data management. I have also
  published cybersecurity research in a SINTA 3 indexed journal.
</p>
          </motion.div>

          {/* Stats */}
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              {
                value: "1",
                label: "Internship",
                color: "#FFD93D",
              },
              {
                value: "6+",
                label: "Projects",
                color: "#FF8FAB",
              },
              {
                value: "SINTA 3",
                label: "Publication",
                color: "#7EE787",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
  once: false,
  amount: 0.4,
}}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{
                  y: -12,
                  rotate: index % 2 === 0 ? -4 : 4,
                  scale: 1.08,
                  boxShadow:
"12px 12px 0 #000"
                }}
                className="border-4 border-black p-5 shadow-[6px_6px_0_#000]"
                style={{ backgroundColor: item.color }}
              >
                <h3 className="text-3xl font-black">{item.value}</h3>
                <p className="font-black uppercase">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}