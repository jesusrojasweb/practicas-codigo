import "./App.css";
import Header from "./components/Header";
import RealStateContainer from "./components/RealStateContainer";
import RealStateProvider from "./context/RealStateContext";

function App() {
  return (
    <RealStateProvider>
      <Header />
      <main>
        <RealStateContainer />
      </main>
    </RealStateProvider>
  );
}

export default App;
