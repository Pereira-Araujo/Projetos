import styled from 'styled-components';
import { title,text } from '../style/colors';
export const Container = styled.main`
	color:${text};

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

	@media (max-width: 980px) {
		width: 16rem;
		height: 8rem;
		display: block;
		margin: auto auto auto auto;
	}
`;

export const Tag = styled.p`
	border: 1px solid orange;
	padding: 0.5rem;
	margin-top: auto;
	font-weight: 600;
	letter-spacing: 0.4px;

	&:hover {
		background: ${title};
		color: white;
	}
	@media (max-width: 980px) {
		font-size: 14px;
		padding: 6px;
		max-width: 4.4rem;
		margin-top:none;
	}
`;
