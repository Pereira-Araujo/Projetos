import { PokeMenu } from './style'

const PokeHeader = (props) => {

    return (

        <PokeMenu >
            <h1>{props.title}</h1>
            <ul>
                <li>{props.firstLink}</li>
                <li>{props.secondLink}</li>
            </ul>
        </PokeMenu>)
}

export default PokeHeader