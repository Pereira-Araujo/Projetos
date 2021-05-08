import styled from "styled-components";

export const Container = styled.main`

  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const TaskCard = styled.ul`
  padding: 0;
  width: 200px;
`;



export const TaskForm = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;
export const Task = styled.li`
  text-align: left;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;
