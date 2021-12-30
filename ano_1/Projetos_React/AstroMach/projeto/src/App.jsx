import Interface from "./components/Interface";
import GlobalState from "./global/GlobalState";
const App = () => {
  return (
    <GlobalState>
      <Interface />
    </GlobalState>

  );
};

export default App;
