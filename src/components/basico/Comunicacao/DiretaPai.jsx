import DiretaFilho from "./DiretaFilho"

function DiretaPai (props) {
  return (
    <div>
      <DiretaFilho nome="Cecília" idade={14} nerd={false}/>
      <DiretaFilho nome="João Pedro" idade={8} nerd={true}/>
    </div>
  )
}

export default DiretaPai