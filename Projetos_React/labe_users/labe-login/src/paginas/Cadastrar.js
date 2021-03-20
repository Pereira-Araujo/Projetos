import React from "react";
import axios from "axios";

import {
  Container,
  BoxCadastro
} from "../EstiloApp";

class Cadastrar extends React.Component {
  state = {
    lista: [],
    nomeUsuario: "",
    emailUsuario: "",
    ativo: true,
  };

  onChangeNomeUsuraio = (evento) => {
    this.setState({ nomeUsuario: evento.target.value });
  };
  onChangeEmailUsuario = (evento) => {
    this.setState({ emailUsuario: evento.target.value });
  };

  criaUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then(() => {
        alert("Cadastro feito com sucesso!");
        this.setState({ nomeUsuario: "", emailUsuario: "" });
      })
      .catch((error) => {
        alert("Usuário não criado :( ");
      });
  };

  render() {
    return (
      <Container>
        <BoxCadastro>
          <p>Cadastro</p>
          <input
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuraio}
          />
          <input
            value={this.state.nomeEmail}
            onChange={this.onChangeEmailUsuario}
          />

          <button onClick={this.criaUsuario}>criar</button>
        </BoxCadastro>
      </Container>
    );
  }
}

export default Cadastrar;
