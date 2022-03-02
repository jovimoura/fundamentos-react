function Botoes (props) {
  return (
    <div>
      <button onClick={props.setInc}>+</button>
      <button onClick={props.setDnc}>-</button>
    </div>
  )
}

export default Botoes