import React, { Component } from "react";
import facebook from "../../Compartilhar__imagem/facebook.svg";
import instagram from "../../Compartilhar__imagem/instagram.svg";
import twitter from "../../Compartilhar__imagem/twitter.svg";
import {Compartilhar, Compartilhar__imagem} from "./CompartilharEstilo"

export class Compartilhar extends Component {
  state = {
    compartilhar: " ",
  };

  onInstagram = () => {
    console.log("Post compartilhado no instagram");
  };
  onFacebook = () => {
    console.log("Post compartilhado no Facebook");
  };
  onTwitter = () => {
    console.log("Post compartilhado no twitter");
  };

  render() {

    return (
      <Compartilhar>
        <Compartilhar__imagem
          src={instagram}
          value={this.onClickComentario}
          onClick={this.onInstagram}
          alt="instagram"
        />

        <Compartilhar__imagem
          src={facebook}
          value={this.onClickComentario}
          onClick={this.onFacebook}
          alt="facebook"
        />

        <Compartilhar__imagem
          src={twitter}
          value={this.onClickComentario}
          onClick={this.onTwitter}
          alt="twitter"
        />
      </Compartilhar>
    );
  }
}
