import styled from "styled-components";

export const ContainerCard = styled.main`

  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  height:100vh;
  background:aquamarine;

`

export const Card = styled.section`
width: 14rem;
height: 16rem;
border-radius:10%;
box-shadow: -6px 10px 5px 0px rgba(0,0,0,0.75);

padding:2rem;
background:white;
display:flex;
flex-direction:column;
`

export const TaskCard = styled.ol`
  padding: 0;
  width: 200px;
  
`;

export const TaskForm = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const Task = styled.li`
  text-align: left;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

export const ButtonAdd = styled.button`
background:white;
border:1px solid black;
&:hover{
  background:aquamarine;
}
`
