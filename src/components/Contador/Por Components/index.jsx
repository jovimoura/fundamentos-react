import '../Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class ComponentContador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 0
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dnc = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero}/>
        {/* Obs: você não pode chamar o evento ou método com (), se não dá erro */}
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        <Botoes setInc={this.inc} setDnc={this.dnc}/>
      </div>
    )
  }
}

export default ComponentContador