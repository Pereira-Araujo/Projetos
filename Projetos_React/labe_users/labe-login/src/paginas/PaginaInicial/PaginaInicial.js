import React from "react";
import Cadastro from "../Cadastro/Cadastro";
import Lista from "../Lista/Lista";
import BotaoPagina from "../../Componentes/BotaoPagina"
import {
  Principal
  
} from './PaginaInicialEstilo'


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
        
        {this.state.ativo ?<><BotaoPagina pagina={this.paginaLista} vai={"lista"}/><Cadastro/> </>
          : <> <BotaoPagina pagina={this.paginaCadastro} vai={"Cadastro"}/><Lista /></>}

      </Principal>
    );
  }
}

export default PaginaInicial;
