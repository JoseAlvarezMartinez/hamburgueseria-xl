
import NavBar from "../NavBar/NavBar";
import "./Header.css";

import { useState } from "react";

import styled from "@emotion/styled";
import { Twirl as Hamburger } from "hamburger-react";

const OscurecerFondo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000a6;
`;

const H1 = styled.h1`
  position: absolute;
  z-index: 1;
  right: 2rem;
  top: 0.6rem;
  font-size: 1.5rem;
  text-align: center;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 110%;
`;
const H2 = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 2.3rem;
`;
const P = styled.p`
  margin: 0;
  color: #fff;
  text-align: center;
`;
const Button = styled.button`
  border: none;
  background-color: #edb45e;
  padding: 0.8rem 2rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f0bc6e;
  }
`;
const FlechaPosicion = styled.div`
 position: relative;
 bottom:-8rem;
`
const Header = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <header>
      <OscurecerFondo>
        <Hamburger color={`${abierto ? "#000":"#fff"}`} toggled={abierto} toggle={setAbierto} />
        <H1 className={`${abierto ? "" : "blanco"}`}>Hamburgueseria XL</H1>

        {abierto ? <NavBar abierto={abierto}/> : null}
        <Contenedor>
          <H2>{"Bienvenido".toUpperCase()}</H2>
          <P>
            Estás a punto de probar una de las mejores hamburguesas del país.
          </P>
          <Button>Comprar</Button>

          <FlechaPosicion>
            <svg
              className="tienda-online-arrow mt-3"
              width="25"
              height="25"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16602 8.83337L6.99935 14.6667L12.8327 8.83337M6.99935 14.6667V1.33337V14.6667Z"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </FlechaPosicion>
        </Contenedor>
      </OscurecerFondo>
    </header>
  );
};

export default Header;
