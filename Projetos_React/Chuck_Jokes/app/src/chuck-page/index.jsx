import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../constant/url";
import useInput from "../hooks/useInput";
import BlockLeft from "../components/BlockLeft/index";
import BlockRight from '../components/BlockRight/index'
import { Container, ChuckCaracter, Tag } from "./style";

import Chuck_Avatar from "../assets/chuck_image.png";
import Chuck_Logo from "../assets/logo_chuck.png";

function Home() {
  let jokeCategory;

  const [search, onChangeSearch] = useInput("");
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState(
    <ChuckCaracter src={Chuck_Logo} alt="Desenho do Chuck Norris" />
  );
  const [filter, setFilter] = useState([]);
  const [change, setChange] = useState(false);

  const find = (event) => {
    event.preventDefault();
    axios.get(`${BASE_URL}search?query=${search}`).then((response) => {
      setChange(true);
      setFilter(response.data.result.slice(0,10));
    });
  };

  const getCategories = () => {
    axios.get(`${BASE_URL}categories`).then((response) => {
      setCategories(response.data);
    });
  };

  const changeCategories = (joke) => {
    jokeCategory = joke;
    getJokesByCategories();
  };

  const getJokesByCategories = async () => {
    const result = await axios.get(
      `${BASE_URL}random?category=${jokeCategory}`
    );
    setRandom(result.data.value);
    setChange(false);
  };

  const getRandom = () => {
    axios.get(`${BASE_URL}random`).then((response) => {
      setRandom(response.data.value);
      setChange(false);
    });
  };

  const getInitialState = () => {
    setRandom(<ChuckCaracter src={Chuck_Logo} alt="Desenho do Chuck Norris" />);
  };

  const categoriesMapped = categories.map((nameCategory) => {
    return (
      <Tag key={nameCategory} onClick={() => changeCategories(nameCategory)}>
        {nameCategory}
      </Tag>
    );
  });

  const searchFiltered = filter.map((item) => {
    return <p>{item.value}</p>;
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
      bolean={false}
      elementPageOne={random}
      elementPageTwo={searchFiltered}
      />
    </Container>
  );
}

export default Home;
