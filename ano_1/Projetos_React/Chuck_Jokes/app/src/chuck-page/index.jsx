import { useState, useEffect } from "react";

import useInput from "../hooks/useInput";
import useMark from '../hooks/useMark'

import BlockLeft from "../components/BlockLeft/index";
import BlockRight from '../components/BlockRight/index'
import { Container, ChuckCaracter, Tag } from "./style";

import Chuck_Avatar from "../assets/chuck_image.png";
import Chuck_Logo from "../assets/logo_chuck.png";

import { getMethod, getAsync, getMethodValue, searchFunction } from '../services/api/index'

function Home() {
  let jokeCategory;
  const [filter, setFilter] = useState([]);
  const [change, setChange] = useState(false);
  const [search, onChangeSearch] = useInput("");
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState(
    <ChuckCaracter src={Chuck_Logo} alt="Desenho do Chuck Norris" />
  );

  const find = (event) => {
    event.preventDefault();

    return searchFunction('search?query=', search, setChange, true, setFilter)
  };

  const searchFiltered = useMark(filter, search)
  
  const getCategories = () => getMethod('categories', setCategories)
  const getRandom = () => getMethodValue('random', setRandom, setChange, false)

  const changeCategories = (joke) => {
    jokeCategory = joke;
    getJokesByCategories();
  };

  const getJokesByCategories = () => {
    return getAsync('random?category=', setRandom, jokeCategory, setChange, false)
  };

  const getInitialState = () => {
    setRandom(<ChuckCaracter src={Chuck_Logo} alt="Desenho do Chuck Norris" />);
  };

  const categoriesMapped = categories.map((nameCategory) => {
    return (
      <Tag key={nameCategory} onClick={() => changeCategories(nameCategory)}>
        {nameCategory.toUpperCase()}
      </Tag>
    );
  });


  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>

      <BlockLeft
        callInitial={getInitialState}
        callImage={Chuck_Avatar}
        callFind={find}
        callChange={onChangeSearch}
        callValue={search}
        callRandomText={categoriesMapped}
        callRandom={getRandom}
      />
      <BlockRight
        setPage={change}
        boolean={false}
        elementPageOne={random}
        elementPageTwo={searchFiltered}
      />
    </Container>
  );
}

export default Home;
