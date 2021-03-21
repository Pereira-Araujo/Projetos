import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


import {
  Container,
  CardCadastro,
  Entrada,
  TextoInicial
} from "./CadastroEstilo";

class Cadastro extends React.Component {
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
      .catch(() => {
        alert("Usuário não criado :( ");
      });
  };

  render() {
    return (
      <Container>
        <CardCadastro>
          <TextoInicial>Cadastro</TextoInicial>
          <Entrada id="standard-basic" label="Nome"
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuraio}
          />
          <Entrada id="standard-basic" label="Email"
            value={this.state.nomeEmail}
            onChange={this.onChangeEmailUsuario}
          />

          <Button color="primary" onClick={this.criaUsuario}>criar</Button>
        </CardCadastro>
      </Container>
    );
  }
}

export default Cadastro;
