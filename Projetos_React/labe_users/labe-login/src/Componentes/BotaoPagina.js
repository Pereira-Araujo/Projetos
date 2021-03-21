import React from "react"
import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const Botao = styled(Button)`
position:relative;
top:10.5rem;
left:46rem;

`

function BotaoPagina(props) {
    return (

        <Botao variant="contained" color="secondary" onClick={props.pagina}>
            {props.vai}
        </Botao>
    )
}
export default BotaoPagina;