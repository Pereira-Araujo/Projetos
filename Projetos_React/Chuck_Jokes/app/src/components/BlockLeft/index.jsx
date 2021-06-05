import { Container,Card ,ChuckPhoto,SearchContainer,Search,ButtonSearch,TagContainer,RandomButtom} from './style.js'

function BlockLeft(props) {
  return (
    <Container>
      <Card>
        <h1 onClick={props.callInitial}>Chuck Norris Jokes</h1>
        <ChuckPhoto alt={"Rosto do chuck Norris sorrindo"} src={props.callImage} />
      </Card>

      <SearchContainer onSubmit={props.callFind}>
        <Search
          placeholder={"search"}
          onChange={props.callChange}
          value={props.callValue}
        />
        <ButtonSearch type={"submit"}>go</ButtonSearch>
      </SearchContainer>
      <TagContainer>
      {props.callRandomText}
      </TagContainer>
      <RandomButtom onClick={props.callRandom}>Random</RandomButtom>
    </Container>
  );
}
export default BlockLeft;
