
import {Container } from './style'

function BlockRight(props) {
    return(
  <Container>
    {props.setPage === props.boolean ? <>{props.elementPageOne}</> : <>{props.elementPageTwo}</>}
  </Container>
  )
}

export default BlockRight;
