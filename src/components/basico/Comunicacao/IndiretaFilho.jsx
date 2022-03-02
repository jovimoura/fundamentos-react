/* 
  Para realizar uma comunicação indireta, você passa uma props para o component pai
  e atribui essa prop a um evento no component, e no component filho, você atribui
  a um evento
*/

function IndiretaFilho (props) {
  const cb = props.quandoClicar
  const gerarIdade = () => parseInt(Math.random() * 20) + 50
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <button onClick={_ => cb(gerarNerd(), gerarIdade(), 'João')}>Fornecer Infos</button>
    </div>
  )
}

export default IndiretaFilho