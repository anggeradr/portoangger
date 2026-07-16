"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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

const zoom: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const pop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
    },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen border-b-4 border-black bg-[#FFFDF5] px-6 py-24"
    >
      <motion.div
        className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-5xl items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
    once:false,
    amount:0.4,
}}
      >
        <div className="w-full">
          {/* Heading */}
          <motion.div
            variants={fadeLeft}
            className="mb-12 inline-block -rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]"
          >
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Education
            </h2>
          </motion.div>

          {/* Education Card */}
          <motion.div
    variants={zoom}
    className="relative"
>

            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="relative border-4 border-black bg-white shadow-[10px_10px_0_#000]"
            >
              <div className="flex flex-col justify-between gap-5 border-b-4 border-black bg-[#6C9CFF] p-6 md:flex-row md:items-center">
                <div>
                  <p className="mb-2 font-black uppercase">
                    University
                  </p>

                  <h3 className="text-2xl font-black uppercase md:text-4xl">
                    Universitas Dian Nuswantoro
                  </h3>
                </div>

                <div className="w-fit border-[3px] border-black bg-[#FFD93D] px-5 py-3 font-black shadow-[4px_4px_0_#000]">
                  SEP 2022 — FEB 2026
                </div>
              </div>

              <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
                <motion.div
                variants={fadeLeft}
                  whileHover={{
                    scale: 1.04,
                    rotate: -2,
                  }}
                  className="border-[3px] border-black bg-[#FFFDF5] p-5"
                >
                  <p className="mb-2 text-sm font-black uppercase">
                    Degree
                  </p>
                  <p className="text-xl font-black">
                    Bachelor of Informatics Engineering
                  </p>
                </motion.div>

                <motion.div
                variants={fadeRight}
                  whileHover={{
                    scale: 1.04,
                    rotate: 2,
                  }}
                  className="border-[3px] border-black bg-[#7EE787] p-5"
                >
                  <p className="mb-2 text-sm font-black uppercase">
                    Grade Point Average
                  </p>
                  <p className="text-3xl font-black">
                    3.41 <span className="text-lg">/ 4.00</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeLeft} className="mt-14">
            <h3 className="mb-7 text-2xl font-black uppercase">
              Certifications
            </h3>

            <motion.div
              variants={container}
              className="grid gap-6 md:grid-cols-3"
            >
              <motion.div
                variants={pop}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  boxShadow:"12px 12px 0 #000",
y:-8,
                }}
                className="border-4 border-black bg-[#FFD93D] p-6 shadow-[6px_6px_0_#000]"
              >
                <p className="text-xl font-black uppercase">
                  BNSP Certified Web Developer
                </p>
                <p className="mt-3 font-bold">
                  LSP Universitas Dian Nuswantoro
                </p>
                <p className="mt-2 font-semibold">
                  April 2026
                </p>
              </motion.div>

              <motion.div
                variants={pop}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow:"12px 12px 0 #000",
y:-8,
                }}
                className="border-4 border-black bg-[#6C9CFF] p-6 shadow-[6px_6px_0_#000]"
              >
                <p className="text-xl font-black uppercase">
                  English Proficiency Assessment
                </p>
                <p className="mt-3 font-bold">
                  CFLT — Score 483
                </p>
                <p className="mt-2 font-semibold">
                  Valid until January 2028
                </p>
              </motion.div>

              <motion.div
                variants={pop}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  boxShadow:"12px 12px 0 #000",
y:-8,
                }}
                className="border-4 border-black bg-[#7EE787] p-6 shadow-[6px_6px_0_#000]"
              >
                <p className="text-xl font-black uppercase">
                  Internship Certificate
                </p>
                <p className="mt-3 font-bold">
                  Dinas Kominfo Kota Semarang
                </p>
                <p className="mt-2 font-semibold">
                  January — February 2025
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}