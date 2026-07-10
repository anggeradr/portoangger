import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen border-b-4 border-black bg-[#6C9CFF] px-6 py-24"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-full w-full border-4 border-black bg-[#FFD93D]" />

            <div className="relative -rotate-2 border-4 border-black bg-white p-4 shadow-[10px_10px_0_#000] transition-transform hover:rotate-0">
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
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 inline-block rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]">
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              About Me
            </h2>
          </div>

          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000]">
            <p className="text-lg leading-8 font-semibold">
              I am an Informatics Engineering graduate with experience in web
              application development, IT support, and network monitoring.
              I develop applications using Laravel, PHP, MySQL, JavaScript,
              and Next.js.
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
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="border-4 border-black bg-[#FFD93D] p-5 shadow-[6px_6px_0_#000]">
              <h3 className="text-3xl font-black">1</h3>
              <p className="font-black uppercase">Internship</p>
            </div>

            <div className="border-4 border-black bg-[#FF8FAB] p-5 shadow-[6px_6px_0_#000]">
              <h3 className="text-3xl font-black">6+</h3>
              <p className="font-black uppercase">Projects</p>
            </div>

            <div className="border-4 border-black bg-[#7EE787] p-5 shadow-[6px_6px_0_#000]">
              <h3 className="text-2xl font-black">SINTA 3</h3>
              <p className="font-black uppercase">Publication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}