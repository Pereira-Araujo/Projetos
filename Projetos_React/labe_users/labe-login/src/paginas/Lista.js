import React from "react";
import axios from "axios";

import { ListaUsuarios, BotaoDeletar,Container,BoxLista } from "../EstiloApp";

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
        <ListaUsuarios key={user.id}>
          {user.name}
          <BotaoDeletar onClick={() => this.deletaUsuario(user.id)}>
            X
          </BotaoDeletar>
        </ListaUsuarios>
      );
    });

    return (
      <Container>
        <BoxLista>
        {this.state.atividadeBotao ? (
          <div>
            <h3 onClick={this.mostraEscondeLista}>Lista aqui ▲ </h3>
            <hr/>


            {this.state.atividadeBotao ? (
              <div>{listaCadastrados} </div>
           
            ) : (
              <h1>erro</h1>
            )}
          </div>
        ) : (
          <section>
            <h3 onClick={this.usuarios}>Lista aqui ▼ </h3>
          </section>
        )}
        </BoxLista>
      </Container>
    );
  }
}

export default Lista;
