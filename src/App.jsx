import Pagina from "./components/Pagina";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import {useState} from "react"
function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Pagina carrito={carrito} setCarrito={setCarrito}/>} />
        <Route path={"/carrito"} element={<Carrito carrito={carrito}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
