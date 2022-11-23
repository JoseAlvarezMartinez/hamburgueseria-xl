/* Hooks/Librerias */
import "./Header.css";
import styled from "@emotion/styled";

/* Styled Components */
const OscurecerFondo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000a6;
`;
const H1 = styled.h1`
  margin-top: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 84%;
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
  bottom: -8rem;
`;
/* Componente */
const Header = () => {
  return (
    <header>
      <OscurecerFondo>
        {/* <lord-icon
          className="test"
          src="https://cdn.lordicon.com/hyhnpiza.json"
          trigger="hover"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon> */}
        <H1>Hamburgueseria XL</H1>
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
