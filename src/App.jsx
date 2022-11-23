import Header from "./components/Header/Header";
import Ingredientes from "./components/Ingredientes/Ingredientes";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <Header />
      <Ingredientes />
      <Main />
    </>
  );
}

export default App;
