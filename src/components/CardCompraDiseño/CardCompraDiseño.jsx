import { useState } from "react";
import { formatearDinero } from "../../helpers/index";
import styled from "@emotion/styled";

const Card = styled.div`
  margin: 2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0;
    padding: 0;
  }
`;
const CardInferior = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const P = styled.p`
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const BotonFuncional = styled.button`
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  background-color: #f0ba689b;
  transition: all 0.3s;
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
`;
const CardCompraDiseño = ({ compra }) => {
  const { nombre, precio, imagen } = compra;
  const [cantidadModificar, setCantidadModificar] = useState(1);

  return (
    <>
      <Card>
        <img src={imagen} style={{ width: "10rem" }} alt="" />
        <Contenedor>
          <BotonFuncional
            disabled={cantidadModificar === 1}
            onClick={() => setCantidadModificar(cantidadModificar - 1)}
          >
            -
          </BotonFuncional>
          <h3>{nombre}</h3>
          <BotonFuncional
            onClick={() => setCantidadModificar(cantidadModificar + 1)}
          >
            +
          </BotonFuncional>
        </Contenedor>
      </Card>

      <CardInferior>
        <div>
          <H4>Precio</H4>
          <P>{formatearDinero(precio)}</P>
        </div>
        <div>
          <H4>Cantidad</H4>
          <P>{cantidadModificar}</P>
        </div>
        <div>
          <H4>Total</H4>
          <P>{formatearDinero(cantidadModificar * precio)}</P>
        </div>
      </CardInferior>
    </>
  );
};

export default CardCompraDiseño;
