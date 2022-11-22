//Componentes/Estilos
import "./NavBar.css";
//Librerias
import styled from "@emotion/styled";
//Styled Components
const Nav = styled.nav`
  position: absolute;
  background-color: #edb45e;
  width: 100%;
  height: 36%;
  display: flex;
  justify-content: center;
`;
const Ul = styled.ul`
  margin: 3.5rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li``;
const A = styled.a`
  margin: 0.4rem 0;
  font-size: 1.4rem;
  font-weight: 300;
  color: #000;
  text-decoration: none;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -10px;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="">Menú</A>
        </Li>
        <Li>
          <A href="">Carrito</A>
        </Li>
        <Li>
          <A href="">Contacto</A>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
