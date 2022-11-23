/* Hooks/Librerias */
import { useContext, useState, useEffect } from "react";
import { MiCarrito } from "../Pagina";
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
const Stock = styled.p`
  color: #000;
`;

/* Componente */
const Card = ({ hamburguesa }) => {
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
    const comprobar = carrito.some((producto) => producto.id === id);
    if (comprobar) {
      const productos = carrito.map((producto) => {
        if (producto.id === id) {
          producto.cantidad++;
        }
      });
    } else {
      setCarrito([...carrito, hamburguesa]);
    }
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
            <Boton onClick={handleClick}>
              Añadir al Carrito
            </Boton>
            <Stock>Stock: {stock}</Stock>
          </div>
        </div>
      </div>
    </Contenedor>
  );
};

export default Card;
