import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactInputPorExtenso from "../lib";

const App = () => {
   const [numero, setNumero] = useState("")
   return (
      <>
         <ReactInputPorExtenso
            tipoExtenso='porcentagem'
            onChange={numeroExtenso => setNumero(numeroExtenso)}
         />
         <p>
            <strong>Número por Extenso</strong>: {numero}
         </p>
      </>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))