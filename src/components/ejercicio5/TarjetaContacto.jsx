export const TarjetaContacto = ({ nombre, email, puesto, foto }) => {
  return (
    <div className="tarjeta">
      <img src={foto} alt={nombre} />

      <h3>{nombre}</h3>
      <p>{puesto}</p>
      <p>{email}</p>
    </div>
  );
};
