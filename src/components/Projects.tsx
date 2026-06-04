import Image from "next/image";

export default function Projects() {
  const projects: any[] = [
    {
      title: "Hospital Information System",
      image: "/projects/hospital.png",
      objective:
        "Develop a web-based hospital management system for patient records, healthcare services, and administrative workflows.",
      role: [
        "Designed and developed patient management features",
        "Created relational database structures using MySQL",
        "Implemented CRUD operations and reporting modules",
      ],
      result: [
        "Centralized patient record management",
        "Improved administrative efficiency",
      ],
      github: "https://github.com/anggeradr/ProjectBK",
    },

    {
      title: "Gifty",
      images: [
        "/projects/gifty1.png",
        "/projects/gifty2.png",
      ],
      objective:
        "Develop a gift recommendation platform that helps users find suitable gift ideas.",
      role: [
        "Built recommendation and filtering features",
        "Designed database schema",
        "Developed responsive user interface",
      ],
      result: [
        "Faster gift discovery process",
        "User-friendly recommendation system",
      ],
      github: "https://github.com/anggeradr/gifty",
    },

    {
      title: "Basket Monitoring Application",
      image: "/projects/basket.png",
      objective:
        "Create a basketball player performance monitoring platform.",
      role: [
        "Developed player statistics dashboard",
        "Implemented performance tracking features",
      ],
      result: [
        "Centralized athlete performance monitoring",
        "Improved statistical analysis process",
      ],
      github: "https://github.com/anggeradr/basket",
    },

    {
      title: "Hirakata Learning Application",
      image: "/projects/hirakata.png",
      objective:
        "Build an interactive web application for learning Hiragana and Katakana.",
      role: [
        "Designed learning modules and exercises",
        "Developed quiz functionality",
      ],
      result: [
        "Interactive learning experience",
        "Improved user engagement",
      ],
      github: "https://github.com/anggeradr/hirakata-app",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-20">
          Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="grid md:grid-cols-2 gap-12 items-center mb-32"
          >
            {index % 2 === 0 ? (
              <>
                {/* IMAGE */}
                <div className="space-y-4">
                  {project.images ? (
                    project.images.map((img: string) => (
                      <Image
                        key={img}
                        src={img}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="rounded-2xl border shadow-md"
                      />
                    ))
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="rounded-2xl border shadow-md"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-6xl font-bold text-gray-300 mb-4">
                    PROJECT {(index + 1).toString().padStart(2, "0")}
                  </h3>

                  <h4 className="text-3xl font-semibold mb-8">
                    {project.title}
                  </h4>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">
                      Objective
                    </h5>

                    <p className="text-gray-600">
                      {project.objective}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">
                      Role
                    </h5>

                    <ul className="text-gray-600 space-y-2">
                      {project.role.map((item: string) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-semibold mb-2">
                      Result
                    </h5>

                    <ul className="text-gray-600 space-y-2">
                      {project.result.map((item: string) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                
                </div>
              </>
            ) : (
              <>
                {/* TEXT */}
                <div>
                  <h3 className="text-6xl font-bold text-gray-300 mb-4">
                    PROJECT {(index + 1).toString().padStart(2, "0")}
                  </h3>

                  <h4 className="text-3xl font-semibold mb-8">
                    {project.title}
                  </h4>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">
                      Objective
                    </h5>

                    <p className="text-gray-600">
                      {project.objective}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">
                      Role
                    </h5>

                    <ul className="text-gray-600 space-y-2">
                      {project.role.map((item: string) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-semibold mb-2">
                      Result
                    </h5>

                    <ul className="text-gray-600 space-y-2">
                      {project.result.map((item: string) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  
                </div>

                {/* IMAGE */}
                <div className="space-y-4">
                  {project.images ? (
                    project.images.map((img: string) => (
                      <Image
                        key={img}
                        src={img}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="rounded-2xl border shadow-md"
                      />
                    ))
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="rounded-2xl border shadow-md"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}