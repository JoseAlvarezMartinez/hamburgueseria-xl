import Header from "./components/Header/Header";
import Ingredientes from "./components/Ingredientes/Ingredientes";
import Main from "./components/Main/Main";
import { useState,createContext } from "react";

export const MiCarrito = createContext()
function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <MiCarrito.Provider value={{carrito,setCarrito}}>
      <Header/>
      <Ingredientes />
      <Main/>
    </MiCarrito.Provider>
  );
}

export default App;
