import { MenuContainer,PageLinks} from './styled'
import { useHistory } from 'react-router'

import { home,dragons} from '../../Routes/coordinator'

function Header (){
    const history = useHistory()
    return (
        <MenuContainer>
        <h2 onClick={() => home(history)}>Space X</h2>
        <PageLinks>
            <p  onClick={() => dragons(history)}>Dragons</p>
            <p>Pagina 2</p>
            <p>Pagina 3</p>
            <p>Pagina 4</p>
        </PageLinks>
          
        </MenuContainer>
      );

}

export default Header