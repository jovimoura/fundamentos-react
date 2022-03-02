import If, { Else } from './If'

function UsuarioInfo (props) {
  const usuario = props.usuario || {}
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo { usuario.nome }!
          <Else>
            Seja bem vindo Amigo(a)!
          </Else>
      </If>
      
    </div>
  )
}

export default UsuarioInfo