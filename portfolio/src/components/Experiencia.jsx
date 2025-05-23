import React from "react";
import experiencia from "../assets/experiencia"

const Experiencia = () => {
  return (
    <section id="experience" className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl">
      <h1 className="text-4xl text-gray-700 mb-8">Experiencia</h1>
      <div className="space-y-6">
        {experiencia.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">
                {exp.cargo} – <span className="text-gray-700">{exp.empresa}</span>
              </h3>
              <span className="text-sm text-gray-500">{exp.fecha}</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{exp.descripcion}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Skills:</span> {exp.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;