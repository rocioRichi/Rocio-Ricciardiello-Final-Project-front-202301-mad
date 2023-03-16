import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>Register</p>
        <Counter />
        <p>Login</p>
      </header>
    </div>
  );
}

export default App;
