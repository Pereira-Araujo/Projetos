import styled from "styled-components";

export const PostagemContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 10px;
  background: white;
  box-shadow: -8px 17px 11px -3px rgba(0, 0, 0, 0.75);
`;
export const PostagemHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: space-around;
`;

export const PostagemFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const UsuarioFoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const PostagemFoto = styled.img`
  width: 100%;
`;
