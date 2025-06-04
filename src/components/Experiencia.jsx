import React from "react";
import experiencia from "../assets/experiencia"
import { motion } from "framer-motion";

const Experiencia = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section id="experience" className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto mt-20 mb-40 px-8 2xl:max-w-screen-xl">
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-4xl text-gray-700 mb-8"
      >
        Experiencia
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: isMobile ? 0 : 0.4 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
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
      </motion.div>
    </section>
  );
};

export default Experiencia;