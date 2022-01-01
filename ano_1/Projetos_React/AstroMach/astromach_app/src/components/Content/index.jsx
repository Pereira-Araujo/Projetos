import { useContext } from "react";
import Context from "../../global/Context";

import { Container, Information } from "./styles";

const Content = () => {
  const { isMatch } = useContext(Context);
  // const isMatch = {
  //   photo:'hh',
  //   name:'jjj',
  //   age:'dddd'
  // ,
  // bio:''
  // }

  return (
    <Container>
      <img src={isMatch.photo} alt={"isMatch"} />

      <Information>
        <h1>
          {isMatch.name}, {isMatch.age}
        </h1>
        <p>{isMatch.bio}</p>
      </Information>
    </Container>
  );
};

export default Content;
