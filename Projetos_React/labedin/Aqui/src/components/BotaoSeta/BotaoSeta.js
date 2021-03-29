import React from 'react';
import './BotaoSeta.css'

function BotaoSeta(props) {
    return (
        <a href={props.endereco} target="_blank" className="botao-seta-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
            
        </a>

    )
}

export default BotaoSeta;