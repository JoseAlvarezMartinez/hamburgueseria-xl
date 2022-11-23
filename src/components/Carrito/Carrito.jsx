import "./Carrito.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  margin: 0;
  text-align: center;
  padding: 2rem 0;
`;
const Fondo = styled.div`
  background-color: #f0b968;
`;
const H3 = styled.h3`
  font-weight: 300;
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const Carrito = ({ carrito }) => {
  return (
    <>
      <Fondo>
        <Link to={"/"}>
          <div className="testasd">
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              style={{ width: "2.5rem", width: "2.5rem", height: "5rem" }}
              colors="primary:#000"
            ></lord-icon>
          </div>
        </Link>
        <H2>Carrito</H2>
      </Fondo>
      {carrito.length ? (
        <>
          {carrito.map((compra) => (
            <>
            <h2>{compra.nombre}</h2>
            <h2>{compra.precio}</h2>
            <h2>{compra.cantidad}</h2>
            </>
          ))}
        </>
      ) : (
        <>
          <H3>Tu carrito está vacío</H3>
          <P>Agrega productos y los verás reflejados aca.</P>
        </>
      )}
    </>
  );
};

export default Carrito;
