import "./App.css";
import RealStateContainer from "./components/RealStateContainer";
import SearchHouse from "./components/SearchHouse";
import RealStateProvider from "./context/RealStateContext";

function App() {
  return (
    <RealStateProvider>
      <header className="App-header">
        <h1>Real State</h1>
        <SearchHouse />
      </header>
      <main>
        <RealStateContainer />
      </main>
    </RealStateProvider>
  );
}

export default App;
