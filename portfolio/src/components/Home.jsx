import React from "react";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import About from "./About";
import Experiencia from "./Experiencia";

const Home = () => {
    return(
        <div>
            <Inicio/>
            <Proyectos/>
            <About/>
            <Experiencia/>
        </div>
    )
};

export default Home;