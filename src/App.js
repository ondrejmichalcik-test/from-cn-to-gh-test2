import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*This is an example of runtime configuration. See config/runtime-configuration.js or read about it in README.md*/}
          Hello {window.env.HELLO_TARGET}
        </a>
      </header>
    </div>
  );
}

export default App;
