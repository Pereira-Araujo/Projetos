import React from "react";
import Cadastrar from "./Componentes/Cadastrar";
import Lista from "./Componentes/Lista";
import styled from "styled-components";
import {
  BotaoIrLista,
  BotaoIrCadastro
  
 } from './Componentes/EstiloApp'


const Principal = styled.main`
text-align:center;
background: linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%);
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`



class PaginaInicial extends React.Component {
  state = {
    ativo: true,
  };

  paginaLista = () => {
    this.setState({ ativo: false });
  };
  paginaCadastro = () => {
    this.setState({ ativo: true });
  };

  render() {
    return (
      <Principal>
        {this.state.ativo ? <Cadastrar /> : <Lista />}
        {this.state.ativo ? (
          <BotaoIrLista onClick={this.paginaLista}>Lista</BotaoIrLista>
        ) : (
          <BotaoIrCadastro onClick={this.paginaCadastro}>Cadastro</BotaoIrCadastro>
     
        )}
      </Principal>
    );
  }
}

export default PaginaInicial;
