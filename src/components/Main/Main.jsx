import styled from "@emotion/styled";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  width: 10rem;
  margin: 2rem auto 1rem;
`;
const MainContenedor = styled.main`
  margin: 0 1rem;
`;
const Main = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const respuesta = await fetch("http://localhost:3000/combos");
      const resultado = await respuesta.json();
      setMenu(resultado);
    };
    fetchAPI();
  }, []);

  return (
    <MainContenedor>
      <H2>Hamburguesas</H2>
      {menu.map((hamburguesa) => (
        <Card key={hamburguesa.id} hamburguesa={hamburguesa} />
      ))}
    </MainContenedor>
  );
};

export default Main;
