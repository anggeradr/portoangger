export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen border-b-4 border-black bg-[#FFFDF5] px-6 pt-32 pb-16"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-7 inline-block -rotate-2 border-[3px] border-black bg-[#7EE787] px-5 py-2 font-black shadow-[5px_5px_0_#000]">
            HELLO, I&apos;M
          </div>

          <h1 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-tight uppercase md:text-7xl">
            Aurell Zulfa
            <span className="mt-3 block text-[#6C9CFF] [text-shadow:3px_3px_0_#000]">
              Angger Adrian
            </span>
          </h1>

          <div className="mt-8 inline-block border-[3px] border-black bg-[#FFD93D] px-5 py-3 shadow-[5px_5px_0_#000]">
            <h2 className="text-xl font-black md:text-2xl">
              Informatics Engineer
            </h2>
          </div>

          <p className="mt-9 max-w-2xl border-l-8 border-black pl-5 text-lg font-semibold leading-relaxed">
            Informatics Engineering graduate with experience in web application
            development, IT support, and network monitoring.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="border-[3px] border-black bg-[#FF8FAB] px-6 py-3 font-black shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              VIEW PROJECTS
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-black bg-white px-6 py-3 font-black shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              VIEW CV
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -top-5 -left-5 h-full w-full border-4 border-black bg-[#FF8FAB]" />

            <div className="relative space-y-5 border-4 border-black bg-[#6C9CFF] p-6 shadow-[10px_10px_0_#000]">
              <div className="rotate-2 border-[3px] border-black bg-white p-6">
                <p className="text-sm font-black uppercase">
                  Software Development
                </p>
                <p className="mt-3 font-bold">
                  Laravel • PHP • MySQL • Next.js
                </p>
              </div>

              <div className="-rotate-2 border-[3px] border-black bg-[#FFD93D] p-6">
                <p className="text-sm font-black uppercase">
                  IT Support
                </p>
                <p className="mt-3 font-bold">
                  Troubleshooting • Technical Support
                </p>
              </div>

              <div className="rotate-1 border-[3px] border-black bg-[#7EE787] p-6">
                <p className="text-sm font-black uppercase">
                  Network Operations
                </p>
                <p className="mt-3 font-bold">
                  LibreNMS • Network Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}