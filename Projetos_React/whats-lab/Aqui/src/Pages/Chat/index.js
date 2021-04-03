import React from "react";
import "./index.css";

class Chat extends React.Component {
  state = {
    chat: [],
    inputUser: "",
    inputMessage: "",
  };

  Add = () => {
    const newChat = {
      user: this.state.inputUser,
      message: this.state.inputMessage,
    };

    const newMessage = [...this.state.chat, newChat];
    this.setState({
      chat: newMessage,
    });
    this.state.inputMessage = " ";
  };

  onChangeUser = (event) => {
    this.setState({
      inputUser: event.target.value,
    });
  };

  onChangeMessage = (event) => {
    this.setState({
      inputMessage: event.target.value,
    });
  };

  Enter = (event) => {
    if (event.key === "Enter") {
      this.Add();
    }
  };


  render() {
    const chatConversation = this.state.chat.map((chatAdd) => {

      if (
        chatAdd.user === "eu" ||
        chatAdd.user === "EU" ||
        chatAdd.user === "Eu"
      ) {
        chatAdd.user = <span className="invisible"> {chatAdd.user} </span>;
        chatAdd.message = <p className="rightAlign"> {chatAdd.message} </p>;
      }

      return (
        <p>
          <span className="chatAddBoldColor"> {chatAdd.user} </span>{" "}
          <span className="chatAddMessage"> {chatAdd.message} </span>{" "}
        </p>
      );
    });

    return (

      <main onKeyPress={this.Enter}>

        <section className="chat">
          <section id="messages" onDoubleClick={this.Clear}>
            {" "}
            {chatConversation}{" "}
          </section>{" "}
        </section>

        <section className="inputs">
          <input
            id="inputUser"
            value={this.state.inputUser}
            onChange={this.onChangeUser}
            placeholder={"Usuário"}
          />{" "}
          <input
            id="inputMessage"
            value={this.state.inputMessage}
            onChange={this.onChangeMessage}
            placeholder={"Mensagem"}
          />

          <button onClick={this.Add}> enviar </button>{" "}
        </section>{" "}

      </main>
    );
  }
}

export default Chat;
