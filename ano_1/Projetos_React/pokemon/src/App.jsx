import React from 'react';
import Router from './router/Router';
import GlobalState from "./global/GlobalState"
import PokeHeader from './components/pokeHeader';

const App = () => {
  return (
    <GlobalState>
      <PokeHeader />
      <Router />
    </GlobalState>
  );
};

export default App;
