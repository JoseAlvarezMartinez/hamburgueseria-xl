import { formatearDinero } from "../../helpers/index";
import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
import { MiCarrito } from "../../App";
import "./CardCompraDiseño.css";
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
const BotonEliminar = styled.button`
  border: none;
  color: #fff;
  background-color: red;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: relative;
  left: 8rem;
  cursor: pointer;
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
`;
const CardCompraDiseño = ({ compra, setCantidades}) => {
  let { nombre, precio, imagen, cantidad, id } = compra;
  const { carrito, setCarrito } = useContext(MiCarrito);
  const [cantidadComprar, setCantidadComprar] = useState(cantidad);

  useEffect(() => {
    compra.cantidad = cantidadComprar;
    setCantidades(cantidadComprar)
    localStorage.setItem("carritoLS", JSON.stringify(carrito));
  }, [cantidadComprar]);

  function handleEliminar(id) {
    const eliminar = carrito.filter((compra) => compra.id !== id);
    setCarrito(eliminar);
  }
  return (
    <>
      <Card>
        <BotonEliminar onClick={() => handleEliminar(id)} className="eliminar">
          X
        </BotonEliminar>
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
