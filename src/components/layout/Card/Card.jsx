import "./Card.css";
import React from "react";

/*
  O props.children é responsável na renderização do conteudo passado dentro do component

  <TagExemplo>
    <span>...</span>
  </TagExemplo>

  export default function TagExemplo (props) {
    return (
      <div>
        {props.children}
      </div>
    )
  }

  Obs: Você pode passar quantos filhos quiser
*/

function Card(props) {
  const style = {
    backgroundColor: props.color || "green",
    borderColor: props.color || "green",
  };

  return (
    <div className="Card" style={style}>
      <h1 className="Titulo">{props.titulo}</h1>
      {/* Tudo o que for passado dentro do component, será renderizado no props.children */}
      <div className="Content">{props.children}</div>
    </div>
  );
}

export default Card;
