import React from "react";
import CardCompra from "./CardCompra/CardCompra";
import styled from "@emotion/styled";
const H3 = styled.h3`
  font-weight: 300;
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const Testing = ({carrito}) => {
  return (
    <>
      {carrito.length ? (
        <>
          {carrito.map((compra) => (
            <CardCompra key={compra.id} compra={compra} />
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

export default Testing;
