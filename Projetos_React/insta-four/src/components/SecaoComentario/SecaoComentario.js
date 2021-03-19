import React, {Component} from 'react';
import {ContainerComentario, Comentario} from "./ComentarioEstilo.js";

export class SecaoComentario extends Component {
	state = {
      comentario:' ',
	}

	onChangeComentario =(event) => {
		this.setState ({comentario: event.target.value})
		console.log(this.state)
	
	}

	

	render() {


		return <ContainerComentario>
			<Comentario
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.onClickComentario}
				onChange={this.onChangeComentario}

			/>		
			<button onClick={this.props.aoEnviar}>Enviar</button>	

		

		</ContainerComentario>

	}

}

