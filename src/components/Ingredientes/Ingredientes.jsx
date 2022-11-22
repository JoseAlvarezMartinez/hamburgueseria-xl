import "./Ingredientes.css";
import IngredientesImg from "../../assets/ingredientes.jpeg";
import styled from "@emotion/styled";

const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  width: 10rem;
  margin: 2rem auto 1rem;
`;
const Img = styled.img`
  height: 20rem;
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.p`
  text-align: center;
  color:brown;
  transition:all .4s;
  &:hover{
    cursor:pointer;
    transform:scale(1.1);
  }
`;
const Ingredientes = () => {
  return (
    <section id="ingredientes">
      <H2>Ingredientes Principales</H2>
      <Contenedor>
        <Img src={IngredientesImg} alt="" />
        <div>
          <P>-Pan de papa-</P>
          <P>-Lechuga-</P>
          <P>-Tomate-</P>
          <P>-Cheddar-</P>
          <P>-Medallon de carne-</P>
          <P>-Cebolla-</P>
          <P>-Pepino-</P>
          <P>-Panceta-</P>
        </div>
      </Contenedor>
    </section>
  );
};

export default Ingredientes;
