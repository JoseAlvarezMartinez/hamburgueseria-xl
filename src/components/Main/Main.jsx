/* Hooks/Librerias */
import styled from "@emotion/styled";
import Card from "../Card/Card";
import {productos} from "../../menu";

/* Styled Components */
const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  width: 10rem;
  margin: 2rem auto 1rem;
`;
const MainContenedor = styled.main`
  margin: 0 1rem;
`;

/* Componente */
const Main = () => {
  return (
    <MainContenedor id="menu">
      <H2>Hamburguesas</H2>
      {productos.map((hamburguesa) => (
        <Card key={hamburguesa.id} hamburguesa={hamburguesa} />
      ))}
    </MainContenedor>
  );
};

export default Main;
