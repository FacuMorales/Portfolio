import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo o Nombre */}
        <h1 className="text-2xl font-bold ml-[150px]">FM</h1>

        {/* Enlaces */}
        <nav className="md:flex space-x-6 ml-[120px] font-semibold">
          <a href="#projects" className="text-gray-700 hover:text-black">Proyectos</a>
          <a href="#about" className="text-gray-700 hover:text-black">Sobre mí</a>
          <a href="#experience" className="text-gray-700 hover:text-black">Experiencia</a>
        </nav>

        {/* Botones */}
        <div className="space-x-4 flex items-center">
          <a
            href="#cv"
            className="relative border rounded-3xl px-10 py-4 font-bold flex items-center text-gray-700 hover:text-black hover:bg-gray-100 transition group"
          >
            Ir a CV
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-yellow-400 transition-colors duration-600">
              ➜
            </span>
          </a>
          <a
            href="#contacto"
            className="relative flex items-center px-10 py-4 bg-yellow-300 rounded-3xl font-bold transition hover:bg-yellow-400 group"
          >
            Contáctame
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-yellow-600 transition-colors duration-600 border rounded-full border-yellow-300 group-hover:border-gray-100 group-hover:bg-gray-100">
              ➜
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
