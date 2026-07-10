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

  return (
    <section
      id="skills"
      className="min-h-screen border-b-4 border-black bg-[#FFD93D] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 inline-block -rotate-1 border-4 border-black bg-white px-6 py-3 shadow-[6px_6px_0_#000]">
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            Skills
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border-4 border-black bg-white shadow-[8px_8px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#000]"
            >
              <div
                className={`${category.color} flex items-center justify-between border-b-4 border-black p-5`}
              >
                <h3 className="text-xl font-black uppercase">
                  {category.title}
                </h3>

                <span className="border-[3px] border-black bg-white px-3 py-1 font-black">
                  {category.number}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 p-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-[#FFFDF5] px-3 py-2 font-bold shadow-[3px_3px_0_#000]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}