import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-3xl mx-auto w-full">

        <h2 className="text-5xl font-bold uppercase text-[#8b7355] mb-3">
          ANGGER ADRIAN
        </h2>

        <div className="border-b-2 border-[#8b7355] mb-10"></div>

        <div className="space-y-8 text-xl text-[#8b7355]">

          <div className="flex items-center gap-5">
  <FaPhoneAlt />
  <span>
    +62 895 4015 72545
  </span>
</div>

          <div className="flex items-center gap-5">
            <FaEnvelope />
            <a href="mailto:nairdareggna@gmail.com">
              nairdareggna@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/aurell-zulfa-angger-adrian-99b1663b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/aurell-zulfa-angger-adrian-99b1663b3/
            </a>
          </div>

          <div className="flex items-center gap-5">
            <FaGithub />
            <a
              href="https://github.com/anggeradr"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/anggeradr
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}