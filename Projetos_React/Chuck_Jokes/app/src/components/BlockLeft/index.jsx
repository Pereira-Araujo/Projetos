import { Container, Card, ChuckPhoto, SearchContainer, Search, ButtonSearch, TagContainer, RandomButtom } from './style.js'

function BlockLeft(props) {
  return (
    <Container>
      <Card onClick={props.callInitial}>
      <h1 >Chuck Norris Jokes</h1>

        <ChuckPhoto alt={"Rosto do chuck Norris sorrindo"} src={props.callImage} />
      </Card>


      <section>
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
      </section>
    </Container>
  );
}
export default BlockLeft;
