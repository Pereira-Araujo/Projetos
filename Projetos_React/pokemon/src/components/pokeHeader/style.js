import styled from "styled-components";
import { poke_primary, text_white, poke_text } from "../../constants/colors";

export const PokeMenu = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${poke_primary};
  height: 4rem;
  color: ${text_white};

  h1 {
    padding-left: 1rem;
  }

  ul {
    padding-right: 2rem;
    display: flex;
    li {
      font-weight: 600;
      cursor:pointer;

      &:hover {
        color: ${poke_text};
      }
    }

    & :nth-child(1) {
      margin-right: 1.5rem;
    }
  }
`;
