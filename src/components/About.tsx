import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Photo */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Aurell"
            width={350}
            height={350}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            I am an Informatics Engineering graduate with
            experience in web development, networking,
            IoT, and cybersecurity research. During my
            internship at Dinas Kominfo Kota Semarang,
            I contributed to the redevelopment of the
            WisSemar tourism platform and managed GIS-based
            public datasets covering more than 600 schools.
          </p>

          <p className="text-lg leading-8 text-gray-600 mt-4">
            In addition to web application development
            using Laravel, PHP, MySQL, JavaScript, and
            Next.js, I have worked on IoT-based solutions,
            network monitoring implementation, and
            cybersecurity research published in a
            SINTA 3 indexed journal.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            

            <div className="border rounded-xl p-4 bg-white">
              <h3 className="text-2xl font-bold">
                1
              </h3>
              <p className="text-gray-600">
                Internship
              </p>
            </div>

            <div className="border rounded-xl p-4 bg-white">
              <h3 className="text-2xl font-bold">
                4+
              </h3>
              <p className="text-gray-600">
                Projects
              </p>
            </div>

            <div className="border rounded-xl p-4 bg-white">
              <h3 className="text-2xl font-bold">
                SINTA 3
              </h3>
              <p className="text-gray-600">
                Publication
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}