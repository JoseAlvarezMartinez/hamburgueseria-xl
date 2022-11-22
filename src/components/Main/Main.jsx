import "./Main.css";
import Ingredientes from "../../assets/ingredientes.jpeg";
import styled from "@emotion/styled";

const H2 = styled.h2`
    text-align: center;
    font-weight: 400;
    width:10rem;
    margin: 2rem auto 1rem;
`
const Img = styled.img`
  height: 20rem;
`;
const Main = () => {
  return (
    <section id="ingredientes">
      <H2>Ingredientes Principales</H2>
      <div className="test">
        <Img src={Ingredientes} alt="" />
        <div>
        <p>- Pan de papa -</p>
        <p>- Lechuga -</p>
        <p>- Tomate -</p>
        <p>- Cheddar -</p>
        <p>- Medallon de carne -</p>
        <p>- Cebolla -</p>
        <p>- Pepino -</p>
        <p>- Panceta -</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
