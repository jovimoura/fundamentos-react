import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

function IndiretaPai (props) {
   
  /*
    useState é um hook disponível na lib React e com ele conseguimos alterar valores pré setados,
    ele sempre retornará um array com dois itens, sendo o primeiro, o valor inicial(que também será utilizado
    nos parametros), e o método que vai setar o novo valor, como nos exemplos abaixo:
  */
  let [nome, setNome] = useState('?')
  let [idade, setIdade] = useState(0)
  let [nerd, setNerd] = useState(false) 
  // obs: O valor passado no param é o valor inicial, se não quiser valor inicial é só deixar sem params

  function forneceInfo (nerd, idade, nome) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span>{ nome } </span>
        <span><strong>{ idade }</strong></span>
        <span> { nerd ? 'Verdadeiro' : 'Falso' }</span>
      </div>
      <IndiretaFilho quandoClicar={forneceInfo}/>
    </div>
  )
}

export default IndiretaPai