import "./App.css";
import usePlayer from "./hooks/usePlayer";
import Grid from "./components/Grid";
import TurnPovider from "./context/TurnContext";
import Message from "./components/Message";

function App() {
  const [player1, setPlayer1] = usePlayer(10);
  const [player2, setPlayer2] = usePlayer(10);

  return (
    <TurnPovider>
      <header className="App-header">
        <h1>BattleShip</h1>
      </header>
      <Message />
      <main className="App-battleship">
        <Grid
          player={player1}
          handlePlayer={setPlayer1}
          playerName="Jesus"
          playerTurn={0}
        />
        <Grid
          player={player2}
          handlePlayer={setPlayer2}
          playerName="Bryan"
          playerTurn={1}
        />
      </main>
    </TurnPovider>
  );
}

export default App;
