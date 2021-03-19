import React, { Component } from "react";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import { Compartilhar, CompartilharImagem } from "./CompartilharEstilo";

export class CompartilharApp extends Component {
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
        <CompartilharImagem
          src={instagram}
          value={this.onClickComentario}
          onClick={this.onInstagram}
          alt="instagram"
        />

        <CompartilharImagem
          src={facebook}
          value={this.onClickComentario}
          onClick={this.onFacebook}
          alt="facebook"
        />

        <CompartilharImagem
          src={twitter}
          value={this.onClickComentario}
          onClick={this.onTwitter}
          alt="twitter"
        />
      </Compartilhar>
    );
  }
}
export default CompartilharApp;