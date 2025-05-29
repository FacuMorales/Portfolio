import React, { useState } from "react";
import neoshopMockup from "../assets/neoshop/neoshop.png";
import neoshopMockup1 from "../assets/neoshop/neoshop-1.png";
import neoshopMockup2 from "../assets/neoshop/neoshop-2.png";
import neoshopMockup3 from "../assets/neoshop/neoshop-3.png";
import neoshopMockup4 from "../assets/neoshop/neoshop-4.png";
import neoshopMockup5 from "../assets/neoshop/neoshop-5.png";
import neoshopMockup6 from "../assets/neoshop/neoshop-6.png";
import neoshopMockup7 from "../assets/neoshop/neoshop-7.png";
import neoshopMockup8 from "../assets/neoshop/neoshop-8.png";
import neoshopMockup9 from "../assets/neoshop/neoshop-9.png";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";

import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

const NeoShop = () => {

  const [isOpen, setIsOpen] = useState(false);
  const images = [neoshopMockup1, neoshopMockup2, neoshopMockup3, neoshopMockup4, neoshopMockup5, neoshopMockup6, neoshopMockup7, neoshopMockup8, neoshopMockup9];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      {/* Título y descripción general */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold mb-4">NeoShop</h1>
        <p className="text-lg text-gray-700 mb-8">
            NeoShop es una plataforma enfocada en la gestión de auditorías internas
            para empresas, permitiendo organizar tareas, adjuntar evidencia y
            generar reportes automáticamente.
        </p>

        {/* Botón */}
        <a
            href="https://www.makerslabacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border mb-12 rounded-3xl px-10 py-4 font-bold flex items-center text-gray-700 hover:text-black hover:bg-gray-100 transition group"
            >
            Ver Proyecto
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-[#1ad69d] transition-colors duration-600">
                ➜
            </span>
        </a>

        {/* Ficha técnica */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-300 pt-6 mb-16 text-sm text-gray-600">
            <div>
            <strong className="block text-black">Rol:</strong>
            Fullstack Developer
            </div>
            <div>
            <strong className="block text-black">Foco:</strong>
            Auditorías internas
            </div>
            <div>
            <strong className="block text-black">Duración:</strong>
            12 semanas
            </div>
        </div>

        {/* Desafíos */}
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Desafíos</h2>
            <p className="text-gray-700">
            Qué se busca resolver: que los equipos de calidad puedan gestionar sus
            procesos de auditoría de forma más clara, organizada y trazable,
            evitando la pérdida de información y mejorando la colaboración.
            </p>
        </div>

        {/* Proceso */}
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Mi proceso</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
                <strong>Relevamiento funcional:</strong> entrevistas con usuarios
                clave, levantamiento de requerimientos.
            </li>
            <li>
                <strong>Diseño de base de datos y endpoints:</strong> definición de
                modelos en PostgreSQL y estructura REST con Express.
            </li>
            <li>
                <strong>Implementación:</strong> desarrollo frontend con React y
                Tailwind, subida de archivos, autenticación con Auth0.
            </li>
            </ol>
        </div>
      </motion.div>

      {/* Imagen miniatura */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-[500px]">
            <img
            src={neoshopMockup}
            alt="Mockup del proyecto neoshop"
            className="rounded-xl shadow-lg w-full h-auto cursor-pointer hover:scale-105 transition"
            onClick={() => setIsOpen(true)}
            />
            <div
            className="absolute bottom-3 right-3 bg-white/80 text-gray-700 p-1.5 rounded-full shadow hover:text-black hover:bg-white transition"
            title="Expandir"
            >
            <BiExpand className="text-xl" />
            </div>
        </div>
       </motion.div>


      {/* Modal con carrusel */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Galería del proyecto"
        className="relative bg-white p-4 rounded-xl shadow-lg w-[90vw] h-[90vh] flex items-center justify-center outline-none"
        overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <Carousel
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop
          useKeyboardArrows
          emulateTouch
        >
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`Mockup ${i + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </section>
  );
};

export default NeoShop;