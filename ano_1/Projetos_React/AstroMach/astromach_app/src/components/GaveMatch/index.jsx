import { useContext } from "react";
import Context from "../../global/Context";
import { Container, Persons } from "./styles";

function GaveMatch() {
  const { listMatched } = useContext(Context);

  return (
    <Container>
      {listMatched.map((match) => {
        return (
          <Persons key={match.id}>
            <img src={match.photo} alt={"foto de usuários"} loading="eager" />
            <p>{match.name}</p>
          </Persons>
        );
      })}
    </Container>
  );
}

export default GaveMatch;
