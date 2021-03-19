import React from "react";
import styled from "styled-components";

export const MainStyle = styled.main`
  background: linear-gradient(
    90deg,
    hsla(154, 100%, 76%, 1) 0%,
    hsla(234, 100%, 83%, 1) 50%,
    hsla(288, 100%, 81%, 1) 100%
  );
`;

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputStyle = styled.input`
  margin: 4px;
`;

export const NovoPostInputStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 2px;
`;
