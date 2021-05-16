import React from "react";
import { useHistory } from "react-router-dom";

export default function Portfolio() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <h1>PORTFOLIO</h1>
        <button onClick={() => history.push("/")}>home</button>
      </header>
    </div>
  );
}
