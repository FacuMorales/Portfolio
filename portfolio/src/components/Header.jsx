import logo from "../assets/logo2.png"

const Header = () => {
  return (
    <header className="w-full py-4 px-8 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo o Nombre */}
        <div className="w-[200px] h-[80px]">
          <img
            src={logo}
            alt="Facundo Morales"
            className="absolute 2xl:w-[170px] 2xl:h-[170px] 2xl:bottom-213 2xl:left-77 w-[160px] h-[160px] bottom-137 left-38"
          />
        </div>

        {/* Enlaces */}
        <nav className="md:flex space-x-8 ml-[120px] font-semibold">
          <a href="#projects" className="text-gray-700 hover:text-[#1ad69d] transition duration-200">Proyectos</a>
          <a href="#about" className="text-gray-700 hover:text-[#1ad69d] transition duration-200">Sobre mí</a>
          <a href="#experience" className="text-gray-700 hover:text-[#1ad69d] transition duration-200">Experiencia</a>
        </nav>

        {/* Botones */}
        <div className="space-x-4 flex items-center">
          <a
            href="public\CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative border rounded-3xl px-10 py-4 font-bold flex items-center text-gray-700 hover:text-black hover:bg-gray-100 transition group"
          >
            Ir a CV
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-[#1ad69d] transition-colors duration-600">
              ➜
            </span>
          </a>
          <a
            href="mailto:facu44515119@gmail.com"
            className="relative flex items-center px-10 py-4 bg-[#1CEDAE] rounded-3xl font-bold transition hover:bg-[#1ad69d] group"
          >
            Contáctame
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-[#1ad69d] transition-colors duration-600 border rounded-full border-[#1CEDAE] group-hover:border-gray-100 group-hover:bg-gray-100">
              ➜
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
