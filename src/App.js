import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import PageNotFound from "./Components/PageNotFound";

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
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
