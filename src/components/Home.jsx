import React, {useEffect} from "react";
import { useLocation } from "react-router";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import About from "./About";
import Experiencia from "./Experiencia";

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash?.slice(1); // "projects", "about", etc.
        if (hash) {
        const el = document.getElementById(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]);

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