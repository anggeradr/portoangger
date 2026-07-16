"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const badge: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    rotate: -10,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: -2,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 15,
    },
  },
};
const decorations = [
  { left: "8%", top: "12%" },
  { left: "22%", top: "72%" },
  { left: "40%", top: "25%" },
  { left: "58%", top: "82%" },
  { left: "72%", top: "18%" },
  { left: "88%", top: "62%" },
];

export default function Hero() {
  return (
    <section
  id="hero"
  className="relative min-h-screen border-b-4 border-black bg-[#FFFDF5] px-6 pt-32 pb-16"
>
  <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
  {decorations.map((item, i) => (
    <motion.div
      key={i}
      className="absolute h-16 w-16 border-4 border-black"
      style={{
        left: item.left,
        top: item.top,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 18 + i * 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  ))}
</div>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        {/* LEFT */}
        <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{
    once: false,
    amount: 0.4,
  }}
>
          <motion.div
  variants={badge}
  className="mb-7 inline-block -rotate-2 border-[3px] border-black bg-[#7EE787] px-5 py-2 font-black shadow-[5px_5px_0_#000]"
>
  HELLO, I'M
</motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl leading-[0.95] font-black tracking-tight uppercase md:text-7xl"
            whileHover={{
    scale:1.03,
    rotate:-1,
}}
transition={{
    type:"spring",
    stiffness:300,
}}
          >
            Aurell Zulfa
            <span className="mt-3 block text-[#6C9CFF] [text-shadow:3px_3px_0_#000]">
              Angger Adrian
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 inline-block border-[3px] border-black bg-[#FFD93D] px-5 py-3 shadow-[5px_5px_0_#000]"
            whileHover={{
    rotate:2,
    scale:1.04,
}}

transition={{
    type:"spring",
    stiffness:250,
}}
          >
            <h2 className="text-xl font-black md:text-2xl">
              Informatics Engineer
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-2xl border-l-8 border-black pl-5 text-lg font-semibold leading-relaxed"
          >
            Informatics Engineering graduate with experience in web application
            development, IT support, and network monitoring.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.a
              whileHover={{
    y:-8,
    scale:1.05,
    rotate:-2,
}}

transition={{
    type:"spring",
    stiffness:300,
}}
              href="#projects"
              className="border-[3px] border-black bg-[#FF8FAB] px-6 py-3 font-black shadow-[5px_5px_0_#000] transition-all"
            >
              VIEW PROJECTS
            </motion.a>

            <motion.a
              whileHover={{
    y:-8,
    scale:1.05,
    rotate:2,
}}
transition={{
  type: "spring",
  stiffness: 300,
}}
              whileTap={{
                scale: 0.95,
              }}
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-black bg-white px-6 py-3 font-black shadow-[5px_5px_0_#000] transition-all"
            >
              VIEW CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{
    once: false,
    amount: 0.5,
  }}
  variants={container}
  className="hidden lg:block"
>
          <div className="relative">
            <div className="absolute -top-5 -left-5 h-full w-full border-4 border-black bg-[#FF8FAB]" />

            <div className="relative space-y-5 border-4 border-black bg-[#6C9CFF] p-6 shadow-[10px_10px_0_#000]">
              <motion.div
                variants={fadeRight}
                whileHover={{
    y:-10,
    scale:1.05,
    rotate:2,
}}
transition={{
  type: "spring",
  stiffness: 250,
}}
                className="rotate-2 border-[3px] border-black bg-white p-6"
              >
                <p className="text-sm font-black uppercase">
                  Software Development
                </p>
                <p className="mt-3 font-bold">
                  Laravel • PHP • MySQL • Next.js
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                whileHover={{
    y:-10,
    scale:1.05,
    rotate:-2,
}}
transition={{
  type: "spring",
  stiffness: 250,
}}
                className="-rotate-2 border-[3px] border-black bg-[#FFD93D] p-6"
              >
                <p className="text-sm font-black uppercase">
                  IT Support
                </p>
                <p className="mt-3 font-bold">
                  Troubleshooting • Technical Support
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                whileHover={{
    y:-10,
    scale:1.05,
    rotate:3,
}}
transition={{
  type: "spring",
  stiffness: 250,
}}
                className="rotate-1 border-[3px] border-black bg-[#7EE787] p-6"
              >
                <p className="text-sm font-black uppercase">
                  Network Operations
                </p>
                <p className="mt-3 font-bold">
                  LibreNMS • Network Monitoring
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.8 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <motion.div
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
    }}
    whileHover={{
    scale:1.1,
}}
    className="flex flex-col items-center"
  >
    <span className="mb-2 text-xs font-black tracking-[3px] uppercase">
      Scroll
    </span>

    <div className="flex h-12 w-7 justify-center rounded-full border-4 border-black">
      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-2 h-3 w-3 rounded-full bg-black"
      />
    </div>
  </motion.div>
</motion.div>
    </section>
  );
}