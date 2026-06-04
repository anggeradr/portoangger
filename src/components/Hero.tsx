export default function Hero() {
  return (
    <section
  id="hero"
  className="min-h-screen flex items-center px-6"
>
  <div className="max-w-4xl mx-auto">

    <p className="text-gray-500 mb-3">
      Hello, I'm
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Aurell Zulfa Angger Adrian
    </h1>

    <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
      Informatics Engineer | Web Developer
    </h2>

    <p className="text-gray-600 max-w-2xl mb-8">
      Informatics Engineering graduate with experience
      in web development, IoT, networking, and
      cybersecurity research.
    </p>

    <div className="flex gap-4">
      <a
        href="#projects"
        className="px-6 py-3 rounded-lg bg-black text-white"
      >
        View Projects
      </a>

      <a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-lg border"
>
  View CV
</a>
    </div>

  </div>
</section>
  );
}