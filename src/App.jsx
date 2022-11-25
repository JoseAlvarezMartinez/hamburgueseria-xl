import Pagina from "./components/Pagina";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import { useState, useEffect } from "react";
function App() {
  const [carrito, setCarrito] = useState([]);
  
  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")) ?? []);
  }, []);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={""}
          element={<Pagina carrito={carrito} setCarrito={setCarrito} />}
        />
        <Route
          path={"/carrito"}
          element={<Carrito carrito={carrito} setCarrito={setCarrito} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
