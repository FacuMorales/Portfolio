import React from "react";
import henry from "../assets/henry.png"
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
    return(
        <section id="about" className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto py-20 px-8 2xl:max-w-screen-xl">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl text-gray-700">Sobre Mí</h1>
                <div className="text-2xl/9 text-gray-700 mt-8">
                    <p>
                        🎓 Soy Facundo Morales, Desarrollador Full Stack con una sólida formación en SoyHenry y estudios en Analista Programador Universitario en la Universidad Nacional de Jujuy. Mi formación técnica está respaldada por una gran curiosidad y un fuerte compromiso con el aprendizaje continuo.
                    </p>
                    <p className="mt-4">
                        💡 Me apasiona crear soluciones tecnológicas que resuelvan problemas reales. Disfruto tanto del trabajo en equipo como del desarrollo individual, siempre enfocado en la calidad del código, la organización y la mejora constante.
                    </p>
                    <p className="mt-4">
                        🧠 Me defino como una persona analítica, autodidacta y con alta capacidad de adaptación. Valoro la colaboración, la comunicación clara y los desafíos que requieren pensamiento crítico y dedicación.
                    </p>
                    <p className="mt-4">
                        🚀 Más allá del código, busco crecer como profesional: alguien que pueda aportar valor desde la técnica, pero también desde la empatía, la iniciativa y la responsabilidad.
                    </p>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 group"
            >
            
                <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                    Full Stack Web Developer - <span className="text-gray-700">Henry</span>
                    </h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                    Programa intensivo de +800hs de cursado teórico-práctico enfocado en el desarrollo de aplicaciones web.
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-medium">Skills:</span> Javascript, React, Node.js, Express, Sequelize, PostgreSQL, Redux, Vite, Git, Jwt, Axios, Bcryptjs, Postman, etc.
                </p>
                </div>

                <a
                href="SoyHenry.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
                >
                <div className="relative w-full md:w-60 h-40">
                    <img
                        src={henry}
                        alt="Certificado Henry"
                        className="w-full h-full object-cover rounded-xl shadow-sm transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <FiExternalLink
                        className="absolute top-2 right-2 text-white bg-black/60 p-1 rounded-full w-6 h-6 pointer-events-none group-hover:scale-105"
                        title="Abrir certificado"
                    />
                </div>

                </a>
            </motion.div>
        </section>
    );
};

export default About;