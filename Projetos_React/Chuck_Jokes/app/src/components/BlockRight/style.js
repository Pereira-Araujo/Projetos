
 import styled from "styled-components";
 import {backgroundDefault} from '../../style/colors'

 export const Container = styled.main`
 width:60%;
 height: 90%;
 background: ${backgroundDefault};
 margin-right:2rem;
 padding:1rem;
 border-radius:5%;
 text-align:center;
 display: flex;
 flex-direction: column; 
 align-items: center;
 justify-content:center;
 overflow-y: auto;


 @media(max-width:1139px){
   margin-right:0;
   margin-left:2rem;

 }
 @media (max-width: 980px) {
   padding:1rem;
   text-align:center;
   width:100%;
   height:70%;  
 }
`