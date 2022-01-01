import { useContext } from "react";
import Context from "../../global/Context";
import { deleteMatches } from "../../services/api-services";
import Logo from "../../assets/logo.png";
import {
  ClearMatchesButton,
  MatchesButton,
  Container,
  LogoImage,
} from "./styles";

function Menu() {
  const { changeView, setChangeView } = useContext(Context);

  const change = () => {
    setChangeView(!changeView);

  };

  const cleanMatches = () => {
    if (changeView) {
      deleteMatches();
    }
  };

  return (
    <Container>
      <ClearMatchesButton onClick={cleanMatches}>
        {changeView ? "Limpar" : "..."}
      </ClearMatchesButton>
      <LogoImage src={Logo} alt={"logo"} />
      <MatchesButton onClick={change}>
        {changeView ? "Voltar" : "Ver matches"}
      </MatchesButton>
    </Container>
  );
}

export default Menu;
