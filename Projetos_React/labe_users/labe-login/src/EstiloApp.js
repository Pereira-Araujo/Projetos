import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("https://images.vexels.com/media/users/3/205157/isolated/preview/3a1d0d70d14ba68cd27271c889618e51-ilustra-ccedil-atilde-o-do-espa-ccedil-o-astronauta-by-vexels.png"),
    linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%);
  background-repeat: no-repeat;
  background-position: center;
`;
export const BoxCadastro = styled.section`
  width: 12rem;
  height: 14rem;
  border-radius: 2%;
  background: white;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
`;

export const BoxLista = styled.section`
  width: 14rem;
  height: 20rem;
  border-radius: 2%;
  overflow: auto;

  background: white;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
`;

export const ListaUsuarios = styled.p`
  text-align: center;
`;

export const BotaoDeletar = styled.button`
  background: white;
  border: none;
  margin-left: 1rem;

  &:hover {
    filter: invert(100%);
  }
`;

export const BotaoIrLista = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode";
  position: relative;
  bottom: 16rem;
  width: 12rem;
`;

export const BotaoIrCadastro = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode";
  position: relative;
  bottom: 13rem;
  width: 14rem;
`;
