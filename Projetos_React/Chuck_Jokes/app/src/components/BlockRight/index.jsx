
import {Container } from './style'

function BlockRight(props) {
    return(
  <Container>
    {props.setPage === props.bolean ? <>{props.elementPageOne}</> : <>{props.elementPageTwo}</>}
  </Container>
  )
}

export default BlockRight;
