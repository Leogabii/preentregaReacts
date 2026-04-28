import { useEffect, useState } from "react";
import { TarjetaContacto } from "./TarjetaContacto";
import "./Directorio.css";
import { useTitle } from "../../hooks/useTitle";

export const Directorio = () => {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useTitle("Directorio - Relojería Cronos");

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información del equipo");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setNosotros(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando equipo...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Nuestro equipo</h2>
      <div className="contenedor-tarjetas">
        {nosotros.map((persona) => (
          <TarjetaContacto
            key={persona.id}
            nombre={persona.nombre}
            email={persona.email}
            puesto={persona.puesto}
            foto={persona.foto}
          />
        ))}
      </div>
    </div>
  );
};
