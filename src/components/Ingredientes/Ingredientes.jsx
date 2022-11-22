import "./Ingredientes.css";
import {useState} from "react"
import IngredientesImg from "../../assets/ingredientes.jpeg";
import styled from "@emotion/styled";
import Pan from "../../assets/Pan-3.png";
import Lechuga from "../../assets/Lechuga.png";
import Pepino from "../../assets/Pepino.png";
import Cebolla from "../../assets/Cebolla.png";
import Panceta from "../../assets/Panceta.png";
import Queso from "../../assets/Queso.png";
import Carne from "../../assets/Carne.png";
import Tomate from "../../assets/Tomate.png";
const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  width: 10rem;
  margin: 2rem auto 1rem;
`;
const Img = styled.img`
  width: 20rem;
`;
const Contenedor = styled.div`
  position: relative;
  top: -7rem;
  left: -5rem;
`;
const P = styled.p`
  cursor: pointer;
  margin: 0.7rem 0;
  text-align: center;
  color: black;
  transition:all .3s;
  &:hover{
    color: #edb45e;
  }
`
const Ingredientes = () => {
const [pan,setPan] = useState(false)
const [pepino,setPepino] = useState(false)
const [cebolla,setCebolla] = useState(false)
const [panceta,setPanceta] = useState(false)
const [queso,setQueso] = useState(false)
const [carne,setCarne] = useState(false)
const [tomate,setTomate] = useState(false)
const [lechuga,setLechuga] = useState(false)

  return (
    <section id="ingredientes">
      <H2>Ingredientes Principales</H2>
      <Contenedor>
        <Img src={Pan} className={`${pan ? "animar" : ""} pan`} alt="" />
        <Img src={Pepino} className={`pepino posicion ${pepino ? "animar" : ""}`} alt="" />
        <Img src={Cebolla} className={`cebolla posicion ${cebolla ? "animar" : ""}`}  alt="" />
        <Img src={Panceta} className={`panceta posicion ${panceta ? "animar" : ""}`} alt="" />
        <Img src={Queso} className={`queso posicion ${queso ? "animar" : ""}`} alt="" />
        <Img src={Carne} className={`carne posicion ${carne ? "animar" : ""}`}  alt="" />
        <Img src={Tomate} className={`tomate posicion ${tomate ? "animar" : ""}`} alt="" />
        <Img src={Lechuga}  className={`lechuga posicion ${lechuga ? "animar" : ""}`} alt="" />

        <div className="test">
          <P  onMouseEnter={() => setPan(true)} onMouseLeave={() => setPan(false)}>Pan de papa</P>
          <P  onMouseEnter={() => setPepino(true)} onMouseLeave={() => setPepino(false)}>Pepino</P>
          <P  onMouseEnter={() => setCebolla(true)} onMouseLeave={() => setCebolla(false)}>Cebolla</P>
          <P  onMouseEnter={() => setPanceta(true)} onMouseLeave={() => setPanceta(false)}>Panceta</P>
          <P  onMouseEnter={() => setQueso(true)} onMouseLeave={() => setQueso(false)}>Queso</P>
          <P  onMouseEnter={() => setCarne(true)} onMouseLeave={() => setCarne(false)}>Carne</P>
          <P  onMouseEnter={() => setTomate(true)} onMouseLeave={() => setTomate(false)}>Tomate</P>
          <P  onMouseEnter={() => setLechuga(true)} onMouseLeave={() => setLechuga(false)}>Lechuga</P>
        </div>
      </Contenedor>
    </section>
  );
};

export default Ingredientes;
