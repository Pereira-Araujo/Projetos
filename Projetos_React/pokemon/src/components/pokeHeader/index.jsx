import { PokeMenu } from './style'

const PokeHeader = (props) => {

    return (

        <PokeMenu >

            <h1>Pokemon</h1>
            <ul>
                <li onClick={props.path_one}>Início</li>
                <li onClick={props.path_two}>Escolhas</li>
            </ul>

        </PokeMenu>)
}

export default PokeHeader