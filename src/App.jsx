import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Pagina from "./components/Pagina";
import Carrito from "./components/Carrito/Carrito";

export const MiCarrito = createContext();
function App() {
  const [carrito, setCarrito] = useState([]);


  return (
    <MiCarrito.Provider value={{carrito,setCarrito}}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<Pagina/>}
          />
          <Route
            path={"/carrito"}
            element={<Carrito/>}
          />
        </Routes>
      </BrowserRouter>
    </MiCarrito.Provider>
  );
}

export default App;
