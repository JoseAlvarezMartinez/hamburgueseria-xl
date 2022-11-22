import styled from "@emotion/styled";
import "./Card.css";

const Boton = styled.button`
  border: none;
  background-color: #ffe5c6;
  padding: 0.7rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const P = styled.p`
  color: green;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = ({ hamburguesa }) => {
  function formatearDinero(moneda) {
    return moneda.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  const { nombre, precio, id, imagen } = hamburguesa;
  return (
    <Contenedor>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img style={{ width: "100%" }} src={imagen} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h3>{nombre}</h3>
            <P>{formatearDinero(precio)}</P>
            <Boton>Añadir al Carrito</Boton>
          </div>
        </div>
      </div>
    </Contenedor>
  );
};

export default Card;
