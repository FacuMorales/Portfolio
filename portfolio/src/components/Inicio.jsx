import React from "react";
import foto from "../assets/perfil.jpg";
import technologies from "../assets/technologies";


const Inicio = () => {

  const carrouselTech = [...technologies, ...technologies];
  
  return (
    <section className="flex flex-col items-center text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl">
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
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 3xl:">
          <img
            src={foto}
            alt="Facundo Morales"
            className="w-84 h-84 object-cover rounded-full border-4 border-gray-300 shadow-lg 2xl:w-110 2xl:h-110"
          />
        </div>
      </div>

      {/* Carrusel de tecnologías */}
      <div className="w-full mt-12 overflow-hidden border-t pt-6">
        <div className="overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap animate-scroll w-max">
            {[...technologies, ...technologies].map((tech, index) => (
              <img key={index} src={tech} alt="tech" className="h-15 mx-[50px] w-40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
