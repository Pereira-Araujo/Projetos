import styled from "styled-components";
import Button from "@material-ui/core/Button";


export const Container = styled.main`

  background: linear-gradient(
    90deg,
    hsla(154, 100%, 76%, 1) 0%,
    hsla(234, 100%, 83%, 1) 50%,
    hsla(288, 100%, 81%, 1) 100%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


export const InputAdcionar = styled.input`
  margin: 4px;
  
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 2px;
`;

export const Botao = styled(Button)`
height:24px;

`