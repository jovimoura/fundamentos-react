import React from "react";

import Familia from "./components/basico/Familia/Familia";
import FamiliaMembro from "./components/basico/Familia/FamiliaMembro";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import Fragmento from "./components/basico/Fragmento";
import Aleatorio from "./components/basico/Aleatorio";
import Card from "./components/layout/Card/Card";
import './App.css'
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ImparOuPar from "./components/Condicionais/ImparOuPar";
import UsuarioInfo from "./components/Condicionais/UsuarioInfo"
import IndiretaPai from "./components/basico/Comunicacao/IndiretaPai";
import DiretaPai from "./components/basico/Comunicacao/DiretaPai";
import Input from "./components/Formulario/Input";
import Contador from "./components/Contador/Contador";
import ComponentContador from './components/Contador/Por Components'

function App () {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
      <Card
        titulo="Contador (Feito com Separação de Componentes)"
        color="darkblue"
      >
        <ComponentContador numeroInicial={1} passoInicial={5}/>
      </Card>
      
      <Card
        titulo="Contador (Feito com Classe)"
        color="silver"
      >
        <Contador numeroInicial={1} passoInicial={5}/>
      </Card>
      
      <Card
        titulo="Componente Controlado"
        color="gold"
      >
        <Input />
      </Card>
      
      <Card
        titulo="Comunicação Indireta (Emits)"
        color="brown"
      >
        <IndiretaPai />
      </Card>

      <Card
        titulo="Comunicação Direta (Props)"
        color="black"
      >
        <DiretaPai />
      </Card>

      <Card
          titulo="Condicionais"
          color="purple"
        >
          <UsuarioInfo usuario={{nome: "João"}}/>
          <UsuarioInfo />
          <ImparOuPar numero={21}/>
        </Card>
      
      <Card
          titulo="Repetições - Tabela"
          color="darkcyan"
        >
          <TabelaProdutos />
        </Card>

      <Card
          titulo="Repetições"
          color="tomato"
        >
          <ListaAlunos />
        </Card>

      <Card
          titulo="Filhos aninhados"
          color="pink"
        >
          <Familia 
            sobrenome="Moura"
          >
            <FamiliaMembro nome="João" />
            <FamiliaMembro nome="Juliana" />
            <FamiliaMembro nome="Cecília" />
          </Familia>
        </Card>
        
        <Card
          titulo="Primeiro"
          color="red"
        >
          <Primeiro></Primeiro>
        </Card>

        <Card
          titulo="Aleatório"
        >
          <Aleatorio 
            min={2}
            max={25}
          />
        </Card>
        
        <Card
          titulo="Com Paramêtro"
          color="orange"
        >
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Juliana Mamede"
            nota={10}
          />
        </Card>
        
        <Card
          titulo="Sem nome na tag"
          color="cyan"
        >
          <Fragmento />
        </Card>
      </div>
    </div>
  );
};

export default App