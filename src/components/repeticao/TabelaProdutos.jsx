import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

function TabelaProdutos() {
  const linhas = () => {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  };

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{linhas()}</tbody>
      </table>
    </div>
  );
}

export default TabelaProdutos;
