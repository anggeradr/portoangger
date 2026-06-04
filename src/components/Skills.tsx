export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* Backend */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-100">PHP</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Laravel</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">SQL</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">MySQL</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-100">HTML</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">CSS</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">JavaScript</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Bootstrap</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Next.js</span>
            </div>
          </div>

          {/* Networking & Security */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Networking & Security
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-100">LibreNMS</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Suricata</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Wazuh</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">CTI</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Network Monitoring</span>
            </div>
          </div>

          {/* IoT & Tools */}
          <div className="border border-gray-700 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              IoT & Tools
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-100">Internet of Things</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">Git</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">GitHub</span>
              <span className="px-3 py-1 rounded-full bg-gray-100">VS Code</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}