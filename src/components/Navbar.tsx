export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b-4 border-black bg-[#FFD93D]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="border-[3px] border-black bg-white px-4 py-2 text-xl font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Angger Adrian
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {[
            ["About", "#about"],
            ["Education", "#education"],
            ["Experience", "#career"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="block border-2 border-transparent px-3 py-2 font-bold transition-all hover:border-black hover:bg-white"
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="ml-2 block border-[3px] border-black bg-[#FF8FAB] px-4 py-2 font-black shadow-[4px_4px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}