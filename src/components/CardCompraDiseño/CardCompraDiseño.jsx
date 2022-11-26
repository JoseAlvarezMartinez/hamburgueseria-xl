import { formatearDinero } from "../../helpers/index";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
const CardCompraDiseño = ({ compra, carrito, setCarrito }) => {
  const [cantidadComprar, setCantidadComprar] = useState(1);
  let { nombre, precio, imagen } = compra;

  useEffect(() => {
    compra.cantidad = cantidadComprar;
    localStorage.setItem("carritoLocal",JSON.stringify(carrito))
  }, [cantidadComprar]);
  return (
    <>
      <Card>
        <img src={imagen} style={{ width: "10rem" }} alt="" />
        <Contenedor>
          <BotonFuncional
            disabled={cantidadComprar === 1}
            onClick={() => setCantidadComprar(cantidadComprar - 1)}
          >
            -
          </BotonFuncional>
          <h3>{nombre}</h3>
          <BotonFuncional
            onClick={() => setCantidadComprar(cantidadComprar + 1)}
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
          <P>{cantidadComprar}</P>
        </div>
      </CardInferior>
    </>
  );
};

export default CardCompraDiseño;
