import { useState, useEffect } from "react";

export const Footer = () => {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el equipo");
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

  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__empresa">⌚ Relojería Cronos</span>
        <span>Belgrano, CABA · cronos@relojeria.com</span>
        <span>+54 11 4444-5555</span>
      </div>

      <div className="footer__personas">
        {cargando && <p>Cargando equipo...</p>}
        {error && <p>Error: {error}</p>}
        {nosotros.map((persona) => (
          <div key={persona.id} className="footer__persona">
            <img src={persona.foto} alt={persona.nombre} width="50" height="50" />
            <strong>{persona.nombre}</strong>
            <span>{persona.puesto}</span>
            <span>{persona.email}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};
