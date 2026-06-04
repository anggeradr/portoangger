export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Education
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-2xl font-semibold">
            Universitas Dian Nuswantoro
          </h3>

          <p>Bachelor of Informatics Engineering</p>

          <p>2022 - 2026</p>

          <p>GPA: 3.41 / 4.00</p>
          <div className="mt-6"> <h4 className="font-semibold mb-3"> Relevant Coursework </h4> <div className="flex flex-wrap gap-2"> <span className="px-3 py-1 rounded-full bg-gray-100"> Web Programming </span> <span className="px-3 py-1 rounded-full bg-gray-100"> Database Systems </span> <span className="px-3 py-1 rounded-full bg-gray-100"> Computer Networks </span> <span className="px-3 py-1 rounded-full bg-gray-100"> Internet of Things </span> <span className="px-3 py-1 rounded-full bg-gray-100"> Cyber Security </span> </div>
        </div>
        </div>
      </div>
    </section>
  );
}