import styled from "styled-components";

export const PokeMain = styled.main`
  div {
    height: 80vh;
  }

  footer {
    display: flex;
    justify-content: center;

    label {
      margin-right: 1rem;
    }

    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    select {
      margin-right: 1rem;
    }

    ul {
      display: flex;
      li {
        margin-right: 1rem;
        cursor: pointer;
      }
    }
  }
`;
