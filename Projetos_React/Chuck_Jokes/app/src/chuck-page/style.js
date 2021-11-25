import styled from 'styled-components';

export const Container = styled.main`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	@media (max-width: 980px) {
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
`;

export const ChuckCaracter = styled.img`
	width: 30rem;
	height: 20rem;

  @media(max-width:980px){
    width:18rem;
    height:10rem;
	
  }
`;

export const Tag = styled.p`
	border: 1px solid orange;
	padding: 0.5rem;
	margin-top: 0;
`;
