import {
	Container,
	Card,
	ChuckPhoto,
	SearchContainer,
	Search,
	ButtonSearch,
	TagContainer,
	RandomButtom
} from './style.js';

function BlockLeft(props) {
	return (
		<Container>
			<Card onClick={props.callInitial}>
				<h1 onClick={props.callInitial}>Chuck Norris Jokes</h1>

				<ChuckPhoto alt={'Rosto do chuck Norris sorrindo'} src={props.callImage} />
			</Card>

			<section>
				<SearchContainer onSubmit={props.callFind}>
					<Search placeholder={'search'} onChange={props.callChange} value={props.callValue} />
					<ButtonSearch type={'submit'}>GO</ButtonSearch>
				</SearchContainer>
				<TagContainer>{props.callRandomText}</TagContainer>
				<RandomButtom onClick={props.callRandom}>RANDOM</RandomButtom>
			</section>
		</Container>
	);
}
export default BlockLeft;
