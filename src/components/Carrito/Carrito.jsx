/*Librerias/Hooks Imports*/
import { useState } from "react";
import { Link } from "react-router-dom";
import DetalleCompra from "../DetalleCompra/DetalleCompra";
import styled from "@emotion/styled";
import "./Carrito.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
    top: .1rem;
    left: 2rem;
`
/* Componente */
const Carrito = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

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

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <DetalleCompra />
      )}
    </>
  );
};

export default Carrito;
