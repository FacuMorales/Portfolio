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
            NeoShop es un marketplace online, en el cual las empresas pueden lanzar su tienda personalizada
            con sus productos y los clientes tener un fácil y seguro acceso para adquirirlos.
        </p>

        {/* Botón */}
        <a
            href="https://neoshop.techwebstudio.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border mb-12 rounded-3xl px-10 py-4 font-bold flex items-center text-gray-700 hover:text-black hover:bg-gray-100 transition group"
            >
            Ver Proyecto
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-[#1ad69d] transition-colors duration-600">
                ➜
            </span>
        </a>
        <a
            href="https://github.com/Proyecto-final-organization"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border mb-12 ml-12 rounded-3xl px-10 py-4 font-bold flex items-center text-gray-700 hover:text-black hover:bg-gray-100 transition group"
            >
            Repositorio
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-[#1ad69d] transition-colors duration-600">
                ➜
            </span>
        </a>

        {/* Ficha técnica */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-300 pt-6 mb-16 text-sm text-gray-600">
            <div>
            <strong className="block text-black">Rol:</strong>
            Backend Developer
            </div>
            <div>
            <strong className="block text-black">Foco:</strong>
            Marketplace
            </div>
            <div>
            <strong className="block text-black">Duración:</strong>
            6 semanas
            </div>
        </div>

        {/* Tecnologías */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Tecnologías</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "Javascript",
              "Node.js",
              "Express",
              "Firebase",
              "JSON Web Token",
              "Bcryptjs",
              "Cookie Parser",
              "Nodemailer",
              "Sequelize",
              "PostgreSQL"
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
            NeoShop es un proyecto académico realizado como entrega final para la carrera de Fullstack
            Developer en SoyHenry, en él conformamos un equipo de 7 integrantes. Debíamos realizar un proyecto
            desde cero con una idea propia en la cual presentar todo lo aprendido durante nuestra instancia
            como estudiantes.
            </p>
            <p className="text-gray-700">
            Nuestra idea fue implementar un marketplace en el cual cualquier persona pudiese abrir su propia
            tienda con sus productos, éstos serían como un "cliente tienda".
            </p>
            <p className="text-gray-700">
            Por otro lado tendríamos a los "clientes finales" que vendrían a ser los compradores, los mismos
            pueden ingresar a la página, crear su cuenta y buscar sus tiendas o productos favoritos.
            </p>
            <p className="text-gray-700">
            Mi principal responsabilidad fue liderar el desarrollo del backend, asegurando que toda la lógica
            del marketplace funcionara de forma fluida y segura.
            </p>
        </div>

        {/* Proceso */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Mi proceso</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Diseño de base de datos relacional:</strong> modelé la estructura
              de datos usando Sequelize con PostgreSQL. Establecí relaciones claras entre
              usuarios, productos, categorías, órdenes, carritos y tiendas, asegurando integridad y escalabilidad.
            </li>
            <li>
              <strong>Desarrollo de endpoints y lógica de negocio:</strong> implementé
              la mayoría de los endpoints REST con Express, incluyendo registro e inicio
              de sesión, gestión de usuarios y tiendas, operaciones CRUD, sistema de favoritos
              y reviews.
            </li>
            <li>
              <strong>Autenticación y autorización:</strong> integré JWT para proteger rutas,
              junto con `bcryptjs` para el manejo de contraseñas seguras y `cookie-parser`
              para mantener sesiones persistentes. Además, configuré autenticación de terceros
              mediante Firebase para permitir inicio de sesión con Google, Facebook y otras plataformas.
            </li>
            <li>
              <strong>Pasarela de pagos:</strong> desarrollé el flujo completo de checkout
              integrando la API de PayPal, permitiendo compras seguras y redireccionamiento
              automático según el estado del pago.
            </li>
            <li>
              <strong>Gestión de correo electrónico:</strong> configuré el envío automático
              de correos con `nodemailer` para confirmar compras, restablecer contraseñas y
              notificar eventos clave.
            </li>
            <li>
              <strong>Pruebas y documentación:</strong> realicé testing funcional de los endpoints
              con herramientas como Postman, y documenté los flujos para facilitar el trabajo
              del equipo frontend.
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