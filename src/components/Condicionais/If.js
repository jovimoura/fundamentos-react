/*
  <If test={se for true vai renderizar, se for false, não vai renderizar}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
  </If>
*/

function If(props) {

  // filtra o componente <If /> em busca de um filho chamado <Else />
  const elseChild = props.children.filter(child => {
    return child ? child.type && child.type.name === 'Else' : false
  })[0]

  const ifChildren = props.children.filter(child => {
    return child !== elseChild
  })

	if (props.test) {
		return ifChildren
	} else if (elseChild) {
		return elseChild
	} else {
    return false
  }
}

export default If

export const Else = props => props.children