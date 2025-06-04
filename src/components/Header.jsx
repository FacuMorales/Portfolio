import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full py-4 px-8 shadow-md relative z-50 bg-white"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[160px] h-[80px]">
          <a href="/">
            <img
              src={logo}
              alt="Facundo Morales"
              className=""
            />
          </a>
        </div>

        {/* Enlaces - Desktop */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <a href="/#projects" className="text-gray-700 hover:text-[#1ad69d] transition">Proyectos</a>
          <a href="/#about" className="text-gray-700 hover:text-[#1ad69d] transition">Sobre mí</a>
          <a href="/#experience" className="text-gray-700 hover:text-[#1ad69d] transition">Experiencia</a>
        </nav>

        {/* Botones - Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="CV.pdf"
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
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-gray-100 transition-colors duration-600">
              ➜
            </span>
          </a>
        </div>

        {/* Botón hamburguesa - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 space-y-4">
          <a href="/#projects" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#1ad69d]">Proyectos</a>
          <a href="/#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#1ad69d]">Sobre mí</a>
          <a href="/#experience" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#1ad69d]">Experiencia</a>
          <a
            href="public/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block border rounded-3xl px-6 py-2 font-bold text-gray-700 hover:text-black hover:bg-gray-100 transition text-center"
          >
            Ir a CV
          </a>
          <a
            href="mailto:facu44515119@gmail.com"
            onClick={() => setIsOpen(false)}
            className="block bg-[#1CEDAE] rounded-3xl px-6 py-2 font-bold text-center hover:bg-[#1ad69d]"
          >
            Contáctame
          </a>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
