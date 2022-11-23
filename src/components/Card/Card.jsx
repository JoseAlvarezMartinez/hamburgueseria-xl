/* Hooks/Librerias */
import { useContext,useState } from "react";
import { MiCarrito } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";
import "./Card.css";

/* Styled Components */
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
const BotonFuncional = styled.button`
  border: none;
  background-color: #ffe5c6;
  padding: 0.7rem 1rem;
  border-radius: 0.4rem;
  margin: 0 0.4rem;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const Stock = styled.p`
  color: #000;
`;

/* Componente */
const Card = ({ hamburguesa }) => {
  const [cantidad,setCantidad] = useState(1)
  const { carrito, setCarrito } = useContext(MiCarrito);
  const { nombre, precio, id, imagen, stock } = hamburguesa;
  function notify() {
    toast("Se agrego correctamente al carrito 🛒");
  }
  function formatearDinero(moneda) {
    return moneda.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  function handleClick() {
    setCarrito([...carrito, hamburguesa]);
    notify();
  }
  return (
    <Contenedor>
      <ToastContainer />
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img style={{ width: "100%" }} src={imagen} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h3>{nombre}</h3>
            <P>{formatearDinero(precio)}</P>
            <BotonFuncional onClick={() => setCantidad(cantidad - 1)} disabled={cantidad === 1}>-</BotonFuncional>
            <Boton onClick={handleClick}>Añadir al Carrito {`(${cantidad})`}</Boton>
            <BotonFuncional onClick={() => setCantidad(cantidad + 1)} disabled={cantidad === stock} >+</BotonFuncional>
            <Stock>Stock: {stock}</Stock>
          </div>
        </div>
      </div>
    </Contenedor>
  );
};

export default Card;
