import React from "react";
import foto from "../assets/perfil.jpg";
import technologies from "../assets/technologies";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Inicio = () => {
  return (
    <section className="flex flex-col items-center text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl">
      {/* Contenedor de texto e imagen */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-2xl text-gray-700">¡Un gusto que estés aquí! 🙌</h2>
          <h1 className="text-5xl font-bold mt-6">Facundo Morales</h1>
          <h2 className="text-2xl text-gray-700 mt-2">Full Stack Web Developer</h2>
          <p className="mt-4 text-gray-600">
            Desarrollador apasionado por la creación de aplicaciones web modernas,
            optimizadas y escalables.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/facu_morales14/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1CEDAE] transition duration-600"
            >
              <FaInstagram className="text-black text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/facundo-samuel-morales-villagra-801656298/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1CEDAE] transition duration-600"
            >
              <FaLinkedinIn className="text-black text-lg" />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 3xl:">
          <img
            src={foto}
            alt="Facundo Morales"
            className="w-84 h-84 object-cover rounded-full border-4 border-gray-300 shadow-lg 2xl:w-100 2xl:h-100"
          />
        </div>
      </div>

      {/* Carrusel de tecnologías */}
      <div className="w-full mt-12 overflow-hidden border-t pt-6 fade-mask">
        <div className="overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap animate-scroll w-max">
            {[...technologies, ...technologies].map((tech, index) => (
              <img key={index} src={tech} alt="tech" className="h-22 mx-[50px] w-40" />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Inicio;
