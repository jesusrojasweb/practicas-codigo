import { useState } from "react";
import "./App.css";
import Groups from "./components/Groups";
import { TaskContext } from "./context/TaskContext";

function App() {
  return (
    <TaskContext>
      <header className="App-header">
        <h1 className="App-title">Todo Colaborativo</h1>
      </header>
      <main className="App-contaner">
        <Groups groupName="Best Coders" />
        <Groups groupName="Bad Coders" />
        <Groups groupName="Best Designer" />
      </main>
    </TaskContext>
  );
}

export default App;
