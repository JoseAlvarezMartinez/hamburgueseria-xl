import { useContext, useEffect } from "react";
import { MiCarrito } from "../../App";
import CardCompraDiseño from "../CardCompraDiseño/CardCompraDiseño";
import styled from "@emotion/styled";

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
const DetalleCompra = () => {
  const { carrito, setCarrito } = useContext(MiCarrito);
  useEffect(() => {
    localStorage.setItem("carritoLS", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <>
      {carrito.length ? (
        <>
          {carrito.map((compra) => (
            <CardCompraDiseño key={compra.id} compra={compra} />
          ))}
          <Separador>
            <FinalizarCompra>Finalizar compra. Total $</FinalizarCompra>
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

export default DetalleCompra;
