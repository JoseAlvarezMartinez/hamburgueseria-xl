import "./Carrito.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import Testing from "../Testing";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
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

const Carrito = ({ carrito }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
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

      {loading ? (
        <Box sx={{ display: "flex", justifyContent:"center",alignItems:"center",height:"30rem"}}>
          <CircularProgress />
        </Box>
      ) : (
        <Testing carrito={carrito} />
      )}
    </>
  );
};

export default Carrito;
