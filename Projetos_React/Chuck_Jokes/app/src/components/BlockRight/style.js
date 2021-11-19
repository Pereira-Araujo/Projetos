import styled from 'styled-components';
import { backgroundDefault } from '../../style/colors';

export const Container = styled.main`
	width: 60%;
	height: 90%;
	background: ${backgroundDefault};
	padding: 1rem;
	border-radius: 5%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-y: auto;

	@media (max-width: 980px) {
		margin: 0;
		text-align: center;
		width: 100%;
		height:35rem;
	}
`;
