import { createContext, useState } from "react";

const Context = createContext();

export function TaskContext({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export default Context;
