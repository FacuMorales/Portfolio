import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.section
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-left text-center md:text-left max-w-screen-lg mx-auto mb-20 px-8 2xl:max-w-screen-xl"
        >
            <hr className="border-gray-400" />
                <div className="mt-16 mb-16">
                    <div className="text-4xl font-bold mb-12">
                        🛠️ “Del concepto al código: doy vida a ideas digitales con precisión y creatividad”
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/FacuMorales"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1CEDAE] transition duration-600"
                            >
                                <FaGithub className="text-black text-lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/facundo-samuel-morales-villagra-801656298/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-[#1CEDAE] transition duration-600"
                            >
                                <FaLinkedinIn className="text-black text-lg" />
                            </a>
                        </div>
                        <a
                            href="mailto:facu44515119@gmail.com"
                            className="relative flex items-center px-10 py-4 bg-[#1CEDAE] rounded-3xl font-bold transition hover:bg-[#1ad69d] group"
                        >
                            Contáctame
                            <span className="ml-1 inline-block transition-transform group-hover:translate-x-2 group-hover:text-gray-100 transition-colors duration-600">
                            ➜
                            </span>
                        </a>
                    </div>
                </div>
            <hr className="border-gray-400" />
        </motion.section>
    );
};

export default Footer;