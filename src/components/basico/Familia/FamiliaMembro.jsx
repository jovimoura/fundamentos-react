import React from "react";

export default function FamiliaMembro(props) {
  return (
    <div>
      <p>
        {props.nome} <strong>{props.sobrenome}</strong>
      </p>
    </div>
  );
}
