import React from "react";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Aleatorio(props) {
  const { min, max } = props;
  return (
    <div>
      <h1>Número Aleatorio</h1>
      <p>
        <strong>Valor Mínimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {getRandomInt(min, max)}
      </p>
    </div>
  );
}

export default Aleatorio;
