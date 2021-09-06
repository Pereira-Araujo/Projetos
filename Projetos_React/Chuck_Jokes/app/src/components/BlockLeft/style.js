import styled from "styled-components";
import {search,border} from '../../style/colors'

export const Container = styled.section`
  margin-left: 2rem;
  width: 30%;
  @media (max-width: 980px) {
    margin: none;
    width: 100%;
    margin-bottom: 2rem;
  }
`;
export const Card = styled.div`
  width: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor:pointer;
`;
export const ChuckPhoto = styled.img`
  width: 20rem;
  height: 20rem;
`;
export const SearchContainer = styled.form`
  margin-top: 0.5rem;
`;
export const Search = styled.input`
  border: ${search} solid 1px;
  outline: none;
  padding: 0.5rem;
  width: 16rem;
`;
export const TagContainer = styled.section`
  width: 20rem;
  height: 14rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  cursor:pointer;

`;

export const RandomButtom = styled.section`
  width: 19rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid ${border};
  cursor:pointer;
  
`;

export const ButtonSearch = styled.button`
background: none;
border: none;
border: 1px solid ${border};
padding: 0.5rem;
width: 3.7rem;
`

/* */


