import React from 'react'
import {Container,FormularioCard,BotaoProximaEtapa} from "./Estilo"
import Etapa1 from '../Etapa1'
import Etapa2 from '../Etapa2'
import Etapa3 from '../Etapa3'
import Final from '../Final'

class Formulario extends React.Component {
  state = {
    etapa: 1,
  }

  onClickProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    })
  }

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />
        case 2:
          return <Etapa2 />
        case 3:
          return <Etapa3 />
        case 4:
          return <Final />
        default:
          return 'ERRO'
      }
    }

    return (
      <Container>
        <FormularioCard>
          {renderizaEtapa()}
          {this.state.etapa !== 4 && (
            <BotaoProximaEtapa onClick={this.onClickProximaEtapa}>
              Proxima etapa
            </BotaoProximaEtapa>
          )}
        </FormularioCard>
      </Container>
    )
  }
}

export default Formulario
