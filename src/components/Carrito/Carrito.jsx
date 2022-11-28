/*Librerias/Hooks Imports*/
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatearDinero } from "../../helpers";
import CardCompraDiseño from "../CardCompraDiseño/CardCompraDiseño";
import styled from "@emotion/styled";
import "./Carrito.css";

/*Styled Components*/
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
const Rotar = styled.div`
  transform: rotate(180deg);
  position: absolute;
  top: 0.1rem;
  left: 2rem;
`;
const H3 = styled.h3`
  font-weight: 300;
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const Separador = styled.div`
  margin-top: 5rem;
`;
const FinalizarCompra = styled.button`
  position: fixed;
  bottom: 0;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: #f0ba68;
  transition: all 0.4s;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

/* Componente */
const Carrito = ({ carrito }) => {
  const [total, setTotal] = useState(0);
  const [cantidades, setCantidades] = useState(0);
  const iterar = carrito.map((compra) => compra.cantidad * compra.precio);
  const reduce = iterar.reduce((compra, total) => compra + total, 0);
  useEffect(() => {
    setTotal(reduce)
  }, [reduce]);
  return (
    <>
      <Fondo>
        <Link to={"/"}>
          <Rotar>
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              style={{ width: "2.5rem", height: "5rem" }}
              colors="primary:#000"
            ></lord-icon>
          </Rotar>
        </Link>
        <H2>Carrito</H2>
      </Fondo>

      {carrito.length ? (
        <>
          {carrito.map((compra) => (
            <CardCompraDiseño
              key={compra.id}
              compra={compra}
              setTotal={setTotal}
              setCantidades={setCantidades}
              total={total}
            />
          ))}
          <Separador>
            <FinalizarCompra>
              Finalizar compra.
              <div> Total: {formatearDinero(total)}</div>
            </FinalizarCompra>
          </Separador>
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
