export default function Career() {
  return (
    <section
      id="career"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12">
          Career
        </h2>

        <div className="relative border-l-2 border-gray-300 pl-8">
          <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-black"></div>

          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">
              Jan 2025 - Feb 2025
            </p>

            <h3 className="text-2xl font-semibold">
              Web Developer Intern
            </h3>

            <p className="text-lg text-gray-600 mb-4">
              Dinas Kominfo Kota Semarang
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                • Contributed to the rebranding and redevelopment
                of the WisSemar tourism website using Next.js,
                Bootstrap, HTML, and CSS.
              </li>

              <li>
                • Collected, validated, and managed GIS-based
                public datasets covering more than 600 schools
                across Semarang City.
              </li>

              <li>
                • Built responsive user interfaces supporting
                multiple screen sizes and accessibility standards.
              </li>

              <li>
                • Collaborated with government stakeholders to
                align platform functionality with public
                information requirements.
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-l-2 border-gray-300 pl-8">
          <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-black"></div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Academic & Personal Projects
            </p>

            <h3 className="text-2xl font-semibold">
              Additional Experience
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
  <li>
    • Developed an IoT-based Smart Trash Bin prototype
    integrating water-level sensors to monitor liquid
    accumulation and identify conditions that may
    cause unpleasant waste odors.
  </li>

  <li>
    • Implemented network monitoring using LibreNMS
    to observe device availability, traffic usage,
    and network performance.
  </li>

  <li>
    • Conducted cybersecurity research on
    Drive-by-Download Malvertising detection using
    Suricata, Wazuh, and Cyber Threat Intelligence.
  </li>
</ul>
          </div>
        </div>
      </div>
    </section>
  );
}