import React from "react";
import Post from "../Post/Post";
import {
  Container,
  InputAdcionar,
  InputContainer,
} from "./PaginaInicialEstilo";
class PaginaInicial extends React.Component {
  state = {
    usuarios: [
      {
        nomeDoUsuario: "Crowley",
        fotoDoUsuario: "https://picsum.photos/50/50",
        fotoDoPost: "https://picsum.photos/200/150",
      },
      {
        nomeDoUsuario: "Levi",
        fotoDoUsuario: "https://picsum.photos/50/50?grayscale",
        fotoDoPost: "https://picsum.photos/seed/picsum/200/150",
      },
      {
        nomeDoUsuario: "Papus",
        fotoDoUsuario: "https://picsum.photos/id/237/50/50",
        fotoDoPost: "https://picsum.photos/200/150",
      },
    ],
  };

  adicionaPost = () => {
    const novoPost = {
      nomeDoUsuario: this.state.nomeUsuario,
      fotoDoUsuario: this.state.fotoUsuario,
      fotoDoPost: this.state.fotoPost,
    };

    const addPost = [...this.state.usuarios, novoPost];

    this.setState({
      usuarios: addPost,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    });
  };

  onChangeNomeDoUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeFotoDoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFotoDoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  render() {
    const postDosUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeDoUsuario}
          fotoUsuario={usuario.fotoDoUsuario}
          fotoPost={usuario.fotoDoPost}
        />
      );
    });

    return (
      <Container>

          <h2>Insta4</h2>

          <InputContainer>
            <InputAdcionar
              value={this.state.nomeUsuario}
              onChange={this.onChangeNomeDoUsuario}
              placeholder={"Nome do Usuário"}
            />

            <InputAdcionar
              value={this.state.fotoUsuario}
              onChange={this.onChangeFotoDoUsuario}
              placeholder={"Link Para a Foto Do Perfil"}
            />

            <InputAdcionar
              value={this.state.fotoPost}
              onChange={this.onChangeFotoDoPost}
              placeholder={"Link Para a Foto Do Post"}
            />
            <button type={"submit"} onClick={this.adicionaPost}>
              Postar
            </button>
          </InputContainer>

          {postDosUsuarios}
      </Container>
    );
  }
}

export default PaginaInicial;
