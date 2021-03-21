import styled from "styled-components";
import ClearIcon from '@material-ui/icons/Clear';


export const Container = styled.main`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url("https://images.vexels.com/media/users/3/205157/isolated/preview/3a1d0d70d14ba68cd27271c889618e51-ilustra-ccedil-atilde-o-do-espa-ccedil-o-astronauta-by-vexels.png"),
  linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%);
background-repeat: no-repeat;
background-position: center;
`;
export const ListaUsuarios = styled.p`
  text-align: center;
  width:16rem;
  padding:0.5rem;
  &:hover{
    background:#fff8ee;
  }
`;

export const CardLista = styled.section`
text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 16rem;
  height: 18rem;
  border-radius: 2%;
  background: white;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
  overflow-y: auto;
  overflow-x:hidden;
`;
export const TextoInicial = styled.h3`
color:#3f51b5;
`

export const Limpar = styled(ClearIcon)`
margin-left:1rem;
position:relative;
top:6px;
&:hover {
   color:#3f51b5;}
`
