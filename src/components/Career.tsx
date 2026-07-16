"use client";

import { motion } from "framer-motion";

export default function Career() {
  const experiences = [
    {
      number: "01",
      type: "Professional Experience",
      title: "Web Developer Intern",
      organization: "Dinas Kominfo Kota Semarang",
      period: "JAN 2025 — FEB 2025",
      color: "bg-[#7EE787]",
      accent: "bg-[#6C9CFF]",
      description:
        "Government agency responsible for public information systems and digital services.",
      responsibilities: [
        "Contributed to the rebranding and redevelopment of the WisSemar tourism website using Next.js, Bootstrap, HTML, and CSS.",
        "Collected, validated, and managed GIS records for 600+ schools across Semarang.",
        "Built responsive user interfaces supporting multiple device resolutions and screen sizes.",
        "Collaborated with government stakeholders to align platform functionality with public information requirements.",
      ],
    },
    {
  number: "02",
  type: "Academic Technical Experience",
  title: "IT Support & Network Administration Practice",
  organization: "University Laboratory Practice",
  period: "ACADEMIC PRACTICE",
  color: "bg-[#FFD93D]",
  accent: "bg-[#7EE787]",
  description:
    "Hands-on technical practice completed during university laboratory activities, covering computer troubleshooting, operating systems, and basic network administration.",
  responsibilities: [
    "Performed LAN cable crimping and network connectivity testing.",
    "Diagnosed and resolved basic computer, software, and network connectivity issues.",
    "Configured network settings and troubleshot local area network problems.",
    "Installed and configured Windows and Linux operating systems for academic projects.",
  ],
},
    {
  number: "03",
  type: "Academic Technical Experience",
  title: "Network Monitoring Implementation",
  organization: "University Project",
  period: "ACADEMIC PROJECT",
  color: "bg-[#6C9CFF]",
  accent: "bg-[#C4A7FF]",
  description:
    "Implemented a network monitoring environment using LibreNMS as part of university learning and technical practice.",
  responsibilities: [
    "Implemented network monitoring infrastructure using LibreNMS.",
    "Monitored device availability, bandwidth utilization, and network performance.",
    "Configured alerting and visualization dashboards.",
  ],
},
  ];
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

  return (
    <section
      id="career"
      className="border-b-4 border-black bg-[#FF8FAB] px-6 py-24"
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
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
  <motion.div
    variants={fadeLeft}
    className="inline-block w-fit rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]"
  >
    <h2 className="text-4xl font-black uppercase md:text-5xl">
      Experience
    </h2>
  </motion.div>

  <motion.div
    variants={fadeRight}
    className="max-w-md border-[3px] border-black bg-white px-5 py-3 font-bold shadow-[5px_5px_0_#000]"
  >
    Professional and hands-on technical experience across web
    development, IT support, and network operations.
  </motion.div>
</div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[22px] hidden w-1 bg-black md:block" />

          <motion.div
  variants={container}
  className="space-y-14"
>
            {experiences.map((experience) => (
              <motion.article
  key={experience.number}
  variants={
    Number(experience.number) % 2 === 0
      ? fadeRight
      : fadeLeft
  }
  className="relative md:pl-20"
>
                <motion.div
  whileHover={{
    scale:1.15,
    y:-6,
}}
  transition={{
    duration: 0.5,
  }}
  className={`${experience.color} absolute top-8 left-0 z-10 hidden h-12 w-12 items-center justify-center border-4 border-black font-black md:flex`}
>
                  {experience.number}
                </motion.div>

                <div className="relative">
                  <div
                    className={`${experience.accent} absolute -top-4 -left-4 h-full w-full border-4 border-black`}
                  />

                  <motion.div
  whileHover={{
  y: -10,
  scale: 1.015,
  rotate: -0.5,
}}
transition={{
  type: "spring",
  stiffness: 300,
  damping: 18,
}}
  className="relative border-4 border-black bg-white shadow-[10px_10px_0_#000]"
>
                    <div
                      className={`${experience.color} flex flex-col justify-between gap-5 border-b-4 border-black p-6 md:flex-row md:items-center`}
                    >
                      <div>
                        <p className="mb-2 text-sm font-black uppercase tracking-wide">
                          {experience.type}
                        </p>

                        <h3 className="text-2xl leading-tight font-black uppercase md:text-3xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-lg font-bold">
                          {experience.organization}
                        </p>
                      </div>

                      <motion.div
  whileHover={{
    rotate: -2,
    scale: 1.05,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }}
  className="w-fit shrink-0 border-[3px] border-black bg-white px-5 py-3 font-black shadow-[4px_4px_0_#000]"
>
                        {experience.period}
                      </motion.div>
                    </div>

                    <div className="p-6 md:p-8">
                      <motion.p
  variants={fadeUp}
  className="mb-8 border-l-8 border-black pl-5 text-lg font-semibold leading-relaxed"
>
                        {experience.description}
                      </motion.p>

                      <div className="grid gap-4 md:grid-cols-2">
                        {experience.responsibilities.map((item, index) => (
                          <motion.div
  key={item}
  variants={fadeUp}
  whileHover={{
    x: 8,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }}
  className="flex gap-4 border-[3px] border-black bg-[#FFFDF5] p-4"
>
                            <span
                              className={`${experience.color} flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black font-black`}
                            >
                              {index + 1}
                            </span>

                            <p className="font-semibold leading-relaxed">
                              {item}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}