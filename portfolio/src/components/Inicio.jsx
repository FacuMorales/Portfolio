import React from "react";
import { motion } from "framer-motion";
import foto from "../assets/perfil.jpg";

const technologies = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
];

const Inicio = () => {
  return (
    <section className="flex flex-col items-center text-center md:text-left max-w-screen-lg mx-auto py-20 px-8">
      {/* Contenedor de texto e imagen */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Texto */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">Facundo Morales</h1>
          <h2 className="text-2xl text-gray-700 mt-2">Full Stack Developer</h2>
          <p className="mt-4 text-gray-600">
            Desarrollador apasionado por la creación de aplicaciones web modernas,
            optimizadas y escalables.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={foto}
            alt="Facundo Morales"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
      </div>

      {/* Carrusel de tecnologías - ahora está debajo */}
      <div className="w-full mt-12 overflow-hidden border-t pt-6">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <img key={index} src={tech} alt="tech" className="h-12" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Inicio;
