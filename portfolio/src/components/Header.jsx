import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md">
      {/* Logo o Nombre */}
      <h1 className="text-2xl font-bold">FM</h1>

      {/* Enlaces */}
      <nav className="md:flex space-x-6">
        <a href="#projects" className="text-gray-700 hover:text-black">Proyectos</a>
        <a href="#about" className="text-gray-700 hover:text-black">Sobre mí</a>
        <a href="#experience" className="text-gray-700 hover:text-black">Experiencia</a>
      </nav>

      {/* Botones */}
      <div className="flex space-x-4">
        <a href="/cv.pdf" className="md:block border px-4 py-2 rounded-lg hover:bg-gray-100">
          Ir a CV
        </a>
        <a href="#contact" className="bg-yellow-400 px-4 py-2 rounded-lg text-white hover:bg-yellow-500">
          Contáctame
        </a>
      </div>
    </header>
  );
};

export default Header;
