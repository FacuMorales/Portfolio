import { useState } from "react";
import nexusMockup from "../assets/nexus/nexus.png";
import nexusMockup1 from "../assets/nexus/nexus-1.png";
import nexusMockup2 from "../assets/nexus/nexus-2.png";
import nexusMockup3 from "../assets/nexus/nexus-3.png";
import nexusMockup4 from "../assets/nexus/nexus-4.png";
import nexusMockup5 from "../assets/nexus/nexus-5.png";
import nexusMockup6 from "../assets/nexus/nexus-6.png";
import nexusMockup7 from "../assets/nexus/nexus-7.png";
import nexusMockup8 from "../assets/nexus/nexus-8.png";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";

import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

const Nexus = () => {
  const isMobile = window.innerWidth < 768;
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    nexusMockup,
    nexusMockup1,
    nexusMockup2,
    nexusMockup3,
    nexusMockup4,
    nexusMockup5,
    nexusMockup6,
    nexusMockup7,
    nexusMockup8,
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold mb-4">Nexus</h1>
        <p className="text-lg text-gray-700 mb-8">
          Nexus es un CRM/POS desarrollado para centralizar la operación comercial de empresas:
          ventas, stock, clientes, catálogos públicos, órdenes, pagos, reportes e integraciones
          con canales externos desde una misma plataforma.
        </p>

        <div className="inline-block border mb-12 rounded-3xl px-10 py-4 font-bold text-gray-700 bg-gray-50">
          Proyecto privado
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-300 pt-6 mb-16 text-sm text-gray-600">
          <div>
            <strong className="block text-black">Rol:</strong>
            Fullstack Developer
          </div>
          <div>
            <strong className="block text-black">Foco:</strong>
            CRM, POS y gestión comercial
          </div>
          <div>
            <strong className="block text-black">Duración:</strong>
            Septiembre 2025 - Actualidad
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Tecnologías</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "TypeScript",
              "React",
              "Vite.js",
              "Tailwind CSS",
              "Zustand",
              "NestJS",
              "Prisma",
              "MySQL",
              "Socket.IO",
              "Firebase",
              "Mercado Pago",
              "Mercado Libre",
              "Tienda Nube",
              "WhatsApp"
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

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Desafíos</h2>
          <p className="text-gray-700">
            El desafío principal fue construir una herramienta operativa robusta para negocios
            con múltiples módulos conectados entre sí: productos, inventario, ventas, clientes,
            catálogos públicos, pagos, logística, comunicación y reportes. La plataforma debía
            mantener consistencia de datos, responder bien en flujos de alta frecuencia como el POS
            y permitir integraciones externas sin afectar la experiencia del usuario final.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Mi proceso</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Desarrollo de módulos comerciales:</strong> trabajé en funcionalidades de ventas,
              catálogo, stock, clientes, Club de Amigos, órdenes y reportes, cuidando la integración
              entre vistas, servicios y reglas de negocio.
            </li>
            <li>
              <strong>Back End y APIs:</strong> participé en la construcción de endpoints y servicios
              con NestJS, Prisma y MySQL, incluyendo validaciones, consultas, relaciones de datos,
              estados de operación y lógica de negocio reutilizable.
            </li>
            <li>
              <strong>Tiempo real e integraciones:</strong> implementé y ajusté flujos con WebSockets,
              notificaciones, Mercado Pago, Mercado Libre, Tienda Nube, WhatsApp y otros servicios necesarios para
              automatizar procesos comerciales.
            </li>
            <li>
              <strong>Experiencia operativa:</strong> construí interfaces pensadas para uso diario,
              con formularios, tablas, modales, dashboards y flujos de POS enfocados en rapidez,
              claridad y trazabilidad.
            </li>
          </ol>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: isMobile ? 0 : 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-[500px]">
          <img
            src={nexusMockup}
            alt="Mockup del proyecto Nexus"
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
          x
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

export default Nexus;
