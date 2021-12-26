import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonChoice from "../pages/choice/index";
import PokemonDetails from "../pages/details/index";
import PokemonHome from "../pages/home/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PokemonHome />
        </Route>

        <Route exact path="/pokedex/:name">
          <PokemonChoice />
        </Route>

        <Route exact path="/detalhes/:name">
          <PokemonDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
