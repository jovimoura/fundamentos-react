import React from "react";

export default function ComParametro(props) {
  const resultado = props.nota > 7 ? "Aprovado!" : "Reprovado";
  return (
    <div>
      <h1>{props.titulo}</h1>
      <br />
      <p>
        <strong>{props.aluno}</strong> tem nota{" "}
        <strong>
          {props.nota} e está {resultado}
        </strong>
      </p>
    </div>
  );
}
