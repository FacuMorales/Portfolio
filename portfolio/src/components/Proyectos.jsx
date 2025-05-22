import React from "react";
import projects from "../assets/projects";
import ProjectsCards from "./ProjectsCards";

const Proyectos = () => {
    return(
        <section id="projects" className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl">
            <h1 className="text-4xl text-gray-700">Proyectos</h1>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {projects.map(project => (
                    <div key={project.id} className="">
                        <ProjectsCards nombre={project.nombre} descripcion={project.descripcion} imagen={project.imagen} url={project.url} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Proyectos;