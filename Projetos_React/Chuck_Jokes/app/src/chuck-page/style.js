import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:160vh;
  }
`
 export const BlockLeft = styled.section`
  margin-left:2rem;
  width: 30%;
   @media (max-width: 980px) {
    margin:none;
    width:100%;
    margin-bottom:2rem;
   }
 ` 
   export const Card = styled.div`
    width: 21rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
   export const ChuckPhoto = styled.img`
    width: 20rem;
    height: 20rem;
    `

    export const ChuckCaracter = styled.img`
    width: 30rem;
    height: 20rem;

    @media (max-width: 980px) {
      width:18rem;
      height:10rem;
  }
    `

   export const SearchContainer = styled.form`
    margin-top: 0.5rem;
    `
   export const Search = styled.input`
    border: coral solid 1px;
    outline: none;
    padding: 0.5rem;
    width: 16rem;
    `
   export const TagContainer = styled.section`
    width: 20rem;
    height: 14rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: whitesmoke;
    `
   export const Tag = styled.p`
    border: 1px solid orange;
    padding: 0.5rem;
    margin-top: 0;
    `
   export const RandomButtom = styled.section`
    width: 19rem;
    padding: 1rem;
    text-align: center;
    border: 1px solid orange;
    `

/* */

 export const BlockRight = styled.main`
  width:60%;
  height: 80%;
  background:Wheat;
  margin-right:2rem;
  padding-top:2rem;
  border-radius:5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  overflow-y: auto;

  @media (max-width: 980px) {
      margin-left:2rem;
      margin:1rem;
      text-align:center;
    width:100%;
    height:70%;  
  }
 `
   export const ButtonSearch = styled.button`
    background: none;
    border: none;
    border: 1px solid orange;
    padding: 0.5rem;
    width: 3.7rem;
    `

