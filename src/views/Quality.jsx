import React, { useState } from "react";
import qualityMockup from "../assets/quality/quality.png";
import qualityMockup1 from "../assets/quality/quality-1.png";
import qualityMockup2 from "../assets/quality/quality-2.png";
import qualityMockup3 from "../assets/quality/quality-3.png";
import qualityMockup4 from "../assets/quality/quality-4.png";
import qualityMockup5 from "../assets/quality/quality-5.png";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";

import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

const Quality = () => {

  const [isOpen, setIsOpen] = useState(false);
  const images = [qualityMockup1, qualityMockup2, qualityMockup3, qualityMockup4, qualityMockup5];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      {/* Título y descripción general */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold mb-4">Quality</h1>
        <p className="text-lg text-gray-700 mb-8">
            Quality es un software integral de facturación electrónica, pensado para ayudar a empresas
            a controlar su contabilidad de forma ordenada y eficiente. Desde una sola interfaz,
            permite emitir y recibir facturas, gestionar proveedores, contratos, pagos e ítems con total seguridad.
        </p>

        {/* Botón */}
        <a
            href="https://quality-bill.netlify.app/"
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
            Facturación electrónica
            </div>
            <div>
            <strong className="block text-black">Duración:</strong>
            12 semanas
            </div>
        </div>

        {/* Tecnologías */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Tecnologías</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "Typescript",
              "React",
              "Next.js",
              "Tawilwind CSS",
              "Zustand",
              "Axios",
              "Node.js",
              "Express",
              "Sequelize",
              "JSON Web Token",
              "MySQL"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-[#1ad69d]/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Desafíos */}
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Desafíos</h2>
            <p className="text-gray-700">
            Qué se busca resolver: muchas empresas pierden tiempo valioso en tareas contables dispersas:
            hojas de cálculo, mails con facturas, proveedores desorganizados. Quality busca unificar todos
            estos procesos en una sola herramienta, reduciendo errores y aumentando la trazabilidad contable.
            </p>
        </div>

        {/* Proceso */}
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Mi proceso</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
                <strong>Generador de facturas:</strong> Me enfoqué en mejorar el flujo de carga de facturas
                de compras y ventas, implementando selectores y validaciones en el formulario principal.
            </li>
            <li>
                <strong>Visualización y gestión de facturas:</strong> Listado organizado de facturas con
                ordenamiento, filtrado y paginado. Botones de acción para ver pdfs, eliminar, etc.
            </li>
            <li>
                <strong>Optimización de ítems y categorías:</strong> Implementé una vista visual en
                formato card para los ítems, organizándolos por categorías. Esto facilitó la navegación
                y mejoró la experiencia al momento de registrar nuevos ítems.
            </li>
            <li>
                <strong>Gestión de proveedores:</strong> Construí la vista de proveedores, incluyendo
                el listado general y el formulario para registrar nuevos. Incorporé validaciones y una
                interfaz coherente con el resto del sistema.
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
            src={qualityMockup}
            alt="Mockup del proyecto Quality"
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

export default Quality;