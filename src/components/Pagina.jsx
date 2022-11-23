import Header from "./Header/Header";
import Main from "./Main/Main";
import Ingredientes from "./Ingredientes/Ingredientes";
import { Link } from "react-router-dom";
import { createContext } from "react";
export const MiCarrito = createContext();
const Probando = ({ carrito, setCarrito }) => {
  return (
    <MiCarrito.Provider value={{ carrito, setCarrito }}>
      <Link to={"/carrito"}>
        <lord-icon
          src="https://cdn.lordicon.com/hyhnpiza.json"
          trigger="hover"
          colors="primary:#fff"
          style={{
            width: "2.5rem",
            height: "5rem",
            cursor: "pointer",
            position: "absolute",
            zIndex: 1,
            top: "1.2rem",
            left: "2rem",
          }}
        ></lord-icon>
      </Link>

      <Header />
      <Ingredientes />
      <Main />
    </MiCarrito.Provider>
  );
};

export default Probando;
