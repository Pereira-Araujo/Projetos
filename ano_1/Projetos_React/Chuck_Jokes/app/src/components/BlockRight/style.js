import styled from 'styled-components';
import { backgroundDefault } from '../../style/colors';

export const Container = styled.main`
	width: 60%;
	height: 44rem;
	background: ${backgroundDefault};
	padding: 1rem;
	border-radius: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-y: auto;

	div {
		text-align: center;
		padding: 0.5rem;
	}
	section {
		@media (max-width: 980px) {
			padding: 1rem;
		}
	}

	@media (max-width: 980px) {
		text-align: center;
		width: 100%;
		min-height: 10rem;
		border-radius: 0;
		display: block;
		overflow: auto;
	}
`;
