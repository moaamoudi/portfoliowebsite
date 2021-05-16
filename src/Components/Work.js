import React from "react";
import { useHistory } from "react-router-dom";

export default function Work() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Work in Progress...</h1>
        <button onClick={() => history.push("/admin")}>admin</button>
      </header>
    </div>
  );
}
