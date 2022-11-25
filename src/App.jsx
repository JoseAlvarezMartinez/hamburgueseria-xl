import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext,useEffect } from "react";
import Pagina from "./components/Pagina";
import Carrito from "./components/Carrito/Carrito";

export const MiCarrito = createContext();
function App() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if(carrito.length > 0){
      localStorage.setItem("carritoLS",JSON.stringify(carrito))
    }
  },[carrito])

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
