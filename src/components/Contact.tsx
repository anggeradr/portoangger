import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const contactItems = [
    {
      label: "Phone",
      value: "+62 895 4015 72545",
      href: "tel:+62895401572545",
      icon: <FaPhoneAlt />,
      color: "bg-[#FFD93D]",
    },
    {
      label: "Email",
      value: "nairdareggna@gmail.com",
      href: "mailto:nairdareggna@gmail.com",
      icon: <FaEnvelope />,
      color: "bg-[#FF8FAB]",
    },
    {
      label: "LinkedIn",
      value: "Aurell Zulfa Angger Adrian",
      href: "https://www.linkedin.com/in/aurell-zulfa-angger-adrian-99b1663b3/",
      icon: <FaLinkedin />,
      color: "bg-[#6C9CFF]",
    },
    {
      label: "GitHub",
      value: "anggeradr",
      href: "https://github.com/anggeradr",
      icon: <FaGithub />,
      color: "bg-[#7EE787]",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#7EE787] px-6 py-24"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center">
        <div className="w-full">
          <div className="mb-14 inline-block -rotate-1 border-4 border-black bg-[#FFD93D] px-6 py-3 shadow-[6px_6px_0_#000]">
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Contact
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between border-4 border-black bg-black p-8 text-white shadow-[10px_10px_0_#FFD93D]">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">
                  Get In Touch
                </p>

                <h3 className="mt-5 text-4xl leading-tight font-black uppercase md:text-6xl">
                  Aurell Zulfa Angger Adrian
                </h3>

                <p className="mt-7 text-lg font-semibold leading-relaxed">
                  Open to opportunities in Software Development, IT Support,
                  and Network Operations.
                </p>
              </div>

              <p className="mt-12 border-t-2 border-white pt-6 font-black uppercase">
                Pemalang, Indonesia
              </p>
            </div>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "LinkedIn" || item.label === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label === "LinkedIn" || item.label === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`${item.color} flex items-center gap-5 border-4 border-black p-5 shadow-[7px_7px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000]`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-black bg-white text-2xl">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-black uppercase">
                      {item.label}
                    </p>

                    <p className="mt-1 break-words text-lg font-black">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <footer className="mt-16 flex flex-col justify-between gap-3 border-t-4 border-black pt-6 font-bold md:flex-row">
            <p>Aurell Zulfa Angger Adrian</p>
            <p>Portfolio 2026</p>
          </footer>
        </div>
      </div>
    </section>
  );
}