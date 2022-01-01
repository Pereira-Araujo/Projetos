import Card from "./Container/Card"
import GlobalState from "./global/GlobalState";
const App = () => {
  return (
    <GlobalState>
      <Card />
    </GlobalState>
  );
};

export default App;
