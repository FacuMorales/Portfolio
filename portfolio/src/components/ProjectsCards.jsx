import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProjectsCards = ({ imagen, nombre, descripcion, url}) => {
    return (
        <a
            href={url}
            className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
        >
            <div className="overflow-hidden rounded-3xl">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-84 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{nombre}</h3>
                    <p className="text-sm text-gray-500">{descripcion}</p>
                </div>
                <div className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-[#1ad69d] group-hover:translate-x-1 group-hover:text-white">
                    <FiArrowRight className="w-4 h-4" />
                </div>
            </div>
        </a>
    );
};

export default ProjectsCards;
