import React from 'react'
import {ContadorContainer,ImagemIcone} from './ContadorEStilo.js'

export function IconeComContador(props) {
	return <ContadorContainer>
		<ImagemIcone alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>

		<p>{props.valorContador}</p>
	</ContadorContainer>
}
