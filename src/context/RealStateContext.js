import { useState, createContext } from "react";

export const RealStateContext = createContext({
  realStates: [],
  setRealStates: () => {},
  user: {},
  setUser: () => {},
});

function RealStateProvider({ children }) {
  const [realStates, setRealStates] = useState([]);
  const [user, setUser] = useState({});

  return (
    <RealStateContext.Provider
      value={{ realStates, setRealStates, user, setUser }}
    >
      {children}
    </RealStateContext.Provider>
  );
}

export default RealStateProvider;
