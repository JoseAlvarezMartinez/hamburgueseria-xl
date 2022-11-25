/* Hooks/Librerias */
import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { MiCarrito } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { formatearDinero } from "../../helpers/index";
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

/* Componente */
const Card = ({ hamburguesa }) => {
  const { carrito, setCarrito } = useContext(MiCarrito);
  const { nombre, precio, id, imagen } = hamburguesa;
  const comprobar = carrito.some((producto) => producto.id === id);
  function handleClick() {
    setCarrito([...carrito, hamburguesa]);
    toast("Se agrego correctamente al carrito 🛒");
  }
  return (
    <Contenedor>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img style={{ width: "100%" }} src={imagen} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h3>{nombre}</h3>
            <P>{formatearDinero(precio)}</P>

            {comprobar ? (
              <div className="mt">
                <Link className="ir-al-carrito-btn" to="/carrito">
                  Ir al Carrito
                </Link>
              </div>
            ) : (
              <Boton disabled={comprobar} onClick={handleClick}>
                {"Agregar al Carrito"}
              </Boton>
            )}
          </div>
        </div>
      </div>
    </Contenedor>
  );
};

export default Card;
