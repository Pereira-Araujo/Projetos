import { useContext } from "react";
import Context from "../../global/Context";
import { Menu, Content, Options,GaveMatch } from "../../components/index";

import { Container,CardLayout } from "./styles";

function Card() {
  const { changeView } = useContext(Context);
  return (
    <Container>
      <CardLayout>
      <Menu />
      {changeView ? (
        <GaveMatch />
      ) : (
        <section>
          <Content />
          <Options />
        </section>
      )}
      </CardLayout>
    </Container>
  );
}

export default Card;
