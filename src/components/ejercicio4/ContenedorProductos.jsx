import { useState } from "react";
import { ListaProductos } from "./ListaProductos";

export const ContenedorProductos = () => {
  const productosArray = [
    { id: 1, nombre: "Cronos Classic", descripcion: "Reloj automático suizo con correa de cuero", precio: 85000 },
    { id: 2, nombre: "Aqua Diver 200m", descripcion: "Sumergible hasta 200m, ideal para buceo", precio: 120000 },
    { id: 3, nombre: "Heritage Gold", descripcion: "Oro 18k con esfera de nácar, edición limitada", precio: 310000 },
  ];

  const [productos, setProductos] = useState(productosArray);

  return <ListaProductos productos={productos} />;
};
