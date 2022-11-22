import styled from "@emotion/styled";

const Nav = styled.nav`
  position: absolute;
  background-color: #edb45ed3;
  width: 100%;
  height: 45%;
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

const A = styled.a`
  margin: 0.6rem 0;
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
        <li>
          <A href="#ingredientes">Ingredientes</A>
        </li>
        <li>
          <A href="">Menú</A>
        </li>
        <li>
          <A href="">Carrito</A>
        </li>
        <li>
          <A href="">Contacto</A>
        </li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
