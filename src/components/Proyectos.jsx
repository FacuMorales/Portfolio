import React from "react";
import projects from "../assets/projects";
import ProjectsCards from "./ProjectsCards";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Proyectos = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl"
    >
      <h1 className="text-4xl text-gray-700">Proyectos</h1>

      <motion.div
        className="grid grid-cols-2 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectsCards
              nombre={project.nombre}
              descripcion={project.descripcion}
              imagen={project.imagen}
              url={project.url}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Proyectos;
