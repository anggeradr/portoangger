export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen border-b-4 border-black bg-[#FFFDF5] px-6 py-24"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-5xl items-center">
        <div className="w-full">
          <div className="mb-12 inline-block -rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]">
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Education
            </h2>
          </div>

          <div className="relative">
            <div className="absolute -top-5 -left-5 h-full w-full border-4 border-black bg-[#FF8FAB]" />

            <div className="relative border-4 border-black bg-white shadow-[10px_10px_0_#000]">
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
                <div className="border-[3px] border-black bg-[#FFFDF5] p-5">
                  <p className="mb-2 text-sm font-black uppercase">
                    Degree
                  </p>
                  <p className="text-xl font-black">
                    Bachelor of Informatics Engineering
                  </p>
                </div>

                <div className="border-[3px] border-black bg-[#7EE787] p-5">
                  <p className="mb-2 text-sm font-black uppercase">
                    Grade Point Average
                  </p>
                  <p className="text-3xl font-black">
                    3.41 <span className="text-lg">/ 4.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-7 text-2xl font-black uppercase">
              Certifications
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-4 border-black bg-[#FFD93D] p-6 shadow-[6px_6px_0_#000]">
                <p className="text-xl font-black uppercase">
                  BNSP Certified Web Developer
                </p>
                <p className="mt-3 font-bold">
                  LSP Universitas Dian Nuswantoro
                </p>
                <p className="mt-2 font-semibold">April 2026</p>
              </div>

              <div className="border-4 border-black bg-[#6C9CFF] p-6 shadow-[6px_6px_0_#000]">
                <p className="text-xl font-black uppercase">
                  English Proficiency Assessment
                </p>
                <p className="mt-3 font-bold">CFLT — Score 483</p>
                <p className="mt-2 font-semibold">
                  Valid until January 2028
                </p>
              </div>

              <div className="border-4 border-black bg-[#7EE787] p-6 shadow-[6px_6px_0_#000]">
                <p className="text-xl font-black uppercase">
                  Internship Certificate
                </p>
                <p className="mt-3 font-bold">
                  Dinas Kominfo Kota Semarang
                </p>
                <p className="mt-2 font-semibold">
                  January — February 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}