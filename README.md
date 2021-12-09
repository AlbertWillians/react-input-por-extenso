# React Input por Extenso 
[Como Instalar](#como-instalar)---[Como Usar](#como-usar)---[Propriedades](#propriedades)

Componente React que retorna número por extenso

## Como instalar 

Abaixo as formas de como instalar essa biblioteca utilizando o npm ou yarn:

```
npm install react-input-por-extenso
# ou
yarn add react-input-por-extenso
```

## Como usar 

Uma forma básica de como utilizar o componente:

```jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactInputPorExtenso from "react-input-por-extenso";

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

```

## Propriedades

Esse componente é uma abstração  de um componente input de tipo numérico,
todas as propriedades de um input estão disponíveis.

| Propriedade | Valor inicial | Tipo   | Descrição                     |
| ----------- | ------------- | ------ | ----------------------------- |
| tipoExtenso | normal        | string | Formato de extensão do número |