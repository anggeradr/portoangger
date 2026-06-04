export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8F5F0]/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-xl">
          Angger Adrian
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}