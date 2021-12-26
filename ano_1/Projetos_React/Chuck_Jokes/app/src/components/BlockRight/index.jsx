
import {Container } from './style'

function BlockRight(props) {
    return(
  <Container>
    {props.setPage === props.boolean ? <section>{props.elementPageOne}</section> : <div>{props.elementPageTwo}</div>}
  </Container>
  )
}

export default BlockRight;
