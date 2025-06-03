import grayola from "./grayola/grayola.png"
import quality from "./quality/quality.png"
import kromee from "./kromee/kromee.png"
import neoshop from "./neoshop/neoshop.png"

const projects = [
    {id: 1, nombre: "NeoShop", descripcion: "Marketplace de compra y venta", imagen: neoshop, web: "No disponible", url: "/neoshop"},
    {id: 2, nombre: "Quality Soft", descripcion: "Generador de facturas", imagen: quality, web: "https://quality-bill.netlify.app/", url: "/quality"},
    {id: 3, nombre: "Grayola", descripcion: "Organizador de projectos", imagen: grayola, web: "No disponible", url: "/grayola"},
    {id: 4, nombre: "Kromee", descripcion: "Web para Maker's Lab Academy", imagen: kromee, web: "https://www.makerslabacademy.com/", url: "/kromee"}
];

export default projects;