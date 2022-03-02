import React, { useState } from "react"

function Input (props) {
  const [ valor, setValor] = useState()
  function alteraInput (e) {
    setValor(e.target.value)
  }

  return (
    <div>
      <h1>Formulário</h1>
      <h2>Value Input: { valor }</h2>
      <div>
        <input style={{fontSize: '1.2rem'}} value={valor} onChange={alteraInput} />
      </div>
    </div>
  )
}

export default Input