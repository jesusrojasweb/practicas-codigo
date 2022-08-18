import { useState, createContext } from "react";

export const TurnContext = createContext({
  turn: 0,
  setTurn: () => {},
  isStarting: true,
  setIsStarting: () => {},
});

function TurnPovider({ children }) {
  const [turn, setTurn] = useState(0);
  const [isStarting, setIsStarting] = useState(true);

  return (
    <TurnContext.Provider value={{ turn, setTurn, isStarting, setIsStarting }}>
      {children}
    </TurnContext.Provider>
  );
}

export default TurnPovider;
