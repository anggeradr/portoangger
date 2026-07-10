import Image from "next/image";

type Project = {
  number: string;
  title: string;
  category: string;
  color: string;
  description: string;
  technologies: string[];
  github?: string;
  image?: string;
  publication?: string;
};

export default function Projects() {
  const webProjects: Project[] = [
    {
      number: "01",
      title: "Gifty",
      category: "Web Development",
      color: "bg-[#FF8FAB]",
      image: "/projects/gifty1.png",
      description:
        "Developed a gift recommendation web application with filtering and preference-based recommendation features to help users discover suitable gift ideas.",
      technologies: ["Laravel", "PHP", "MySQL"],
      github: "https://github.com/anggeradr/gifty",
    },
    {
      number: "02",
      title: "Basket Monitoring Application",
      category: "Web Development",
      color: "bg-[#6C9CFF]",
      image: "/projects/basket.png",
      description:
        "Developed a basketball player monitoring platform with performance tracking and statistical analysis features for monitoring athlete development.",
      technologies: ["Laravel", "PHP", "MySQL"],
      github: "https://github.com/anggeradr/basket",
    },
  ];

  const otherProjects: Project[] = [
    {
      number: "03",
      title: "Cybersecurity Research",
      category: "Research Publication",
      color: "bg-[#FF8FAB]",
      description:
        "Conducted cybersecurity research on a hybrid multilayer architecture for Drive-by-Download Malvertising detection, published in a SINTA 3 indexed journal.",
      technologies: ["Suricata", "Wazuh", "CTI", "Threat Detection"],
      publication: "https://doi.org/10.33395/sinkron.v10i1.15616",
    },
    {
      number: "04",
      title: "Smart Trash Bin IoT",
      category: "Internet of Things",
      color: "bg-[#C4A7FF]",
      description:
        "Developed an IoT-based smart waste monitoring prototype using water-level sensors to detect liquid accumulation and potential odor conditions.",
      technologies: ["IoT", "Sensors", "Monitoring"],
    },
  ];

  return (
    <section
      id="projects"
      className="border-b-4 border-black bg-[#FFFDF5] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="inline-block w-fit -rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]">
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Projects
            </h2>
          </div>

          <div className="max-w-md border-[3px] border-black bg-[#6C9CFF] px-5 py-3 font-bold shadow-[5px_5px_0_#000]">
            Selected projects across web development, cybersecurity research,
            and Internet of Things.
          </div>
        </div>

        <div>
          <div className="mb-10 inline-block border-[3px] border-black bg-black px-5 py-2 text-xl font-black uppercase text-white">
            Web Development
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {webProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col border-4 border-black bg-white shadow-[10px_10px_0_#000]"
              >
                <div className="border-b-4 border-black bg-[#FFD93D] p-4">
                  <div className="overflow-hidden border-[3px] border-black bg-white">
                    <Image
                      src={project.image!}
                      alt={`${project.title} screenshot`}
                      width={800}
                      height={500}
                      className="h-[280px] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div
                  className={`${project.color} flex items-start justify-between gap-5 border-b-4 border-black p-5`}
                >
                  <div>
                    <p className="mb-2 text-sm font-black uppercase">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-black uppercase">
                      {project.title}
                    </h3>
                  </div>

                  <span className="shrink-0 border-[3px] border-black bg-white px-3 py-1 font-black shadow-[3px_3px_0_#000]">
                    {project.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 font-semibold leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border-2 border-black bg-[#FFFDF5] px-3 py-1 font-bold"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 w-fit border-[3px] border-black bg-black px-5 py-3 font-black text-white shadow-[5px_5px_0_#6C9CFF] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      VIEW ON GITHUB
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 inline-block border-[3px] border-black bg-black px-5 py-2 text-xl font-black uppercase text-white">
            Research & IoT
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col border-4 border-black bg-white shadow-[8px_8px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#000]"
              >
                <div
                  className={`${project.color} flex items-start justify-between gap-5 border-b-4 border-black p-5`}
                >
                  <div>
                    <p className="mb-2 text-sm font-black uppercase">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-black uppercase md:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <span className="shrink-0 border-[3px] border-black bg-white px-3 py-1 font-black">
                    {project.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 font-semibold leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border-2 border-black bg-[#FFFDF5] px-3 py-1 font-bold"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.publication && (
                    <a
                      href={project.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 w-fit border-[3px] border-black bg-black px-5 py-3 font-black text-white shadow-[5px_5px_0_#FFD93D] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      VIEW PUBLICATION
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}