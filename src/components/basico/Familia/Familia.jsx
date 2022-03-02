import React, { cloneElement } from "react";
// import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
  return (
    <div>
      {/* Um dos meios de se passar : */}
      {/* <FamiliaMembro nome="João" sobrenome={ props.sobrenome }/>
            <FamiliaMembro nome="Juliana" sobrenome={ props.sobrenome }/>
            <FamiliaMembro nome="Cecília" sobrenome={ props.sobrenome }/> */}

      {/* Segundo meio */}
      {props.children.map((child, i) => {
        // cloneElement clona o elemento filho que vem nas props
        // e ja que aqui temos mais de um filho, passamos como um array e os tratamos
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
}
