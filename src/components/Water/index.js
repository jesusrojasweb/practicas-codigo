import { useContext, useState } from "react";
import { TurnContext } from "../../context/TurnContext";
import "./Water.css";

function Water({ place, row, column, addShip, atackShip, playerTurn }) {
  const { turn, isStarting } = useContext(TurnContext);
  const [hasShip, setHasShip] = useState(place);

  const hasClass =
    (hasShip && turn === playerTurn) || (isStarting && hasShip)
      ? "Water--active"
      : "";

  const handleShip = () => {
    if (isStarting) {
      addShip(row, column);
      setHasShip(1);
    } else {
      atackShip(row, column);
      setHasShip(0);
    }
  };

  return (
    <article className={`Water ${hasClass}`} onClick={handleShip}></article>
  );
}

export default Water;
