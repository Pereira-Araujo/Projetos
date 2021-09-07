export const goToPokemonList = (history) => {
    history.push("/");
  };
  
  export const goToPokedex = (history, path) => {
    history.push(`/pokedex/${path}`);
  };
  
  export const goToPokemonDetails = (history, path) => {
    history.push(`/detalhes/${path}`);
  };