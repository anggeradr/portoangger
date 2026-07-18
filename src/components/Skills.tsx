"use client";

import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Languages",
      color: "bg-[#FFD93D]",
      skills: ["Python", "PHP", "JavaScript", "SQL"],
    },
    {
      number: "02",
      title: "IT Support",
      color: "bg-[#6C9CFF]",
      skills: [
        "Software Installation",
        "Hardware Troubleshooting",
        "Technical Support",
      ],
    },
    {
      number: "03",
      title: "Cybersecurity",
      color: "bg-[#FF8FAB]",
      skills: [
        "Suricata",
        "Wazuh",
        "Cyber Threat Intelligence",
        "Security Monitoring",
        "Threat Detection",
      ],
    },
    {
      number: "04",
      title: "Networking",
      color: "bg-[#7EE787]",
      skills: [
        "LibreNMS",
        "Computer Networks",
        "Network Monitoring",
      ],
    },
    {
      number: "05",
      title: "Operating Systems",
      color: "bg-[#C4A7FF]",
      skills: ["Linux", "Windows", "Kali Linux", "Ubuntu"],
    },
    {
      number: "06",
      title: "Soft Skills",
      color: "bg-[#FFD93D]",
      skills: [
        "Time Management",
        "Adaptability",
        "Fast Learning",
        "Problem Solving",
      ],
    },
  ];

  const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const badge: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
};

  return (
    <section
      id="skills"
      className="min-h-screen border-b-4 border-black bg-[#FFD93D] px-6 py-24"
    >
      <motion.div
  className="mx-auto max-w-6xl"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{
    once: false,
    amount: 0.2,
  }}
>
       <motion.div
  variants={fadeDown}
  className="mb-14 inline-block -rotate-1 border-4 border-black bg-white px-6 py-3 shadow-[6px_6px_0_#000]"
>
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            Skills
          </h2>
        </motion.div>

        <motion.div
  variants={container}
  className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
>
          {skillCategories.map((category) => (
            <motion.div
  key={category.title}
  variants={fadeScale}
  whileHover={{
    y: -8,
    scale: 1.02,
    rotate: -1,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }}
              className="border-4 border-black bg-white shadow-[8px_8px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#000]"
            >
              <div
                className={`${category.color} flex items-center justify-between border-b-4 border-black p-5`}
              >
                <h3 className="text-xl font-black uppercase">
                  {category.title}
                </h3>

                <motion.span
  whileHover={{
    rotate: 15,
    scale: 1.1,
  }} className="border-[3px] border-black bg-white px-3 py-1 font-black">
                  {category.number}
                </motion.span>
              </div>

              <div className="flex flex-wrap gap-3 p-6">
                {category.skills.map((skill) => (
                  <motion.span
  key={skill}
  variants={badge}
  whileHover={{
    y: -5,
    rotate: -2,
    scale: 1.05,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
                    className="border-2 border-black bg-[#FFFDF5] px-3 py-2 font-bold shadow-[3px_3px_0_#000]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}