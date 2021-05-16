import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Work />
        </Route>
        <Route path="/admin">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
