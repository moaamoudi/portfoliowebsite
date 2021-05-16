import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Work} />
        <Route path="/admin" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
