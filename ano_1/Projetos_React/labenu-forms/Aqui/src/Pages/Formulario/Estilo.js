import styled from 'styled-components'

export const Container = styled.main`
  text-align: center;
  background: linear-gradient(
    90deg,
    hsla(29, 92%, 70%, 1) 0%,
    hsla(0, 87%, 73%, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const FormularioCard = styled.section`
  border-radius: 4%;
  width: 310px;
  height: 400px;
  background: white;
  box-shadow: -4px 14px 15px 0px rgba(0, 0, 0, 0.72);
`
export const BotaoProximaEtapa = styled.button`
  margin-top: 10px;
`