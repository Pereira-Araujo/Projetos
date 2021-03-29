import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="card-principal">
            <img src={ props.imagem } />
            <div className="conteudo">
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;