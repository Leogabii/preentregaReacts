import { useState } from "react";

export const Producto = ({ nombre, descripcion, precio }) => {
  const [favorito, setFavorito] = useState(false);

  const marcarComoFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>

      <button onClick={marcarComoFavorito}>
        {favorito ? "⭐ Quitar de favoritos" : "★ Agregar a favoritos"}
      </button>
      <br />
      <br />
    </div>
  );
};
