import React from "react";
import axios from "axios";

import { ListaUsuarios, Limpar, Container, CardLista, TextoInicial } from "./ListaEstilo";

class Lista extends React.Component {
  state = {
    lista: [],
    ativo: true,
    atividadeBotao: false,
  };

  usuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then((user) => this.setState({ lista: user.data, atividadeBotao: true }))
      .catch(() => alert("ok"));
  };

  deletaUsuario = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then(() => {
        alert("Usuário deletado!");
        this.usuarios();
      })
      .catch((erro) => {
        alert(erro.message);
      });
  };

  mostraEscondeLista = () => {
    this.setState({ atividadeBotao: false });
  };

  render() {
    let listaCadastrados = this.state.lista.map((user) => {
      return (
        <>
          <ListaUsuarios>

            <span key={user.id}>{user.name}</span>
            <Limpar onClick={() => this.deletaUsuario(user.id)} />
          </ListaUsuarios>
        </>
      );
    });

    return (
      <Container>
        <CardLista>
          {this.state.atividadeBotao ? (
            <div>
              <TextoInicial onClick={this.mostraEscondeLista}>Lista aqui ▲ </TextoInicial>
              <hr />
              {this.state.atividadeBotao ? (
                <div>{listaCadastrados} </div>

              ) : (
                <h1>erro</h1>
              )}
            </div>
          ) : (
            <section>
              <TextoInicial onClick={this.usuarios}>Lista aqui ▼ </TextoInicial>
            </section>
          )}
        </CardLista>
      </Container>
    );
  }
}

export default Lista;
