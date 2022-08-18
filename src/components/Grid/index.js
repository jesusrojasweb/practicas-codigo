import { useContext } from "react";
import { TurnContext } from "../../context/TurnContext";
import Water from "../Water";

import "./Grid.css";

function Grid({ player, handlePlayer, playerName, playerTurn }) {
  const { turn, setTurn, isStarting } = useContext(TurnContext);

  const hasClass =
    turn === playerTurn && !isStarting ? "Grid-title__active" : "";

  const addShip = (x, y) => {
    const grid = player;
    grid[x][y] = 1;
    handlePlayer(grid);
  };
  const atackShip = (x, y) => {
    const grid = player;
    if (grid[x][y]) {
      grid[x][y] = 0;
      handlePlayer(grid);
      alert("Destruiste el barco");
    } else {
      alert("No hay ningun barco");
    }

    setTurn(playerTurn);
  };

  return (
    <section>
      <h2 className={`Grid-title ${hasClass}`}>Turno de {playerName}</h2>

      <section className="Grid">
        {player.map((row, rowIndex) =>
          row.map((place, columnIndex) => (
            <Water
              key={Math.random() * (20 - 0) + 0}
              place={place}
              row={rowIndex}
              column={columnIndex}
              addShip={addShip}
              atackShip={atackShip}
              playerTurn={playerTurn}
            />
          ))
        )}
      </section>
    </section>
  );
}

export default Grid;
