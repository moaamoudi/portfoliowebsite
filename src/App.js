import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import PageNotFound from "./Components/PageNotFound";
import SideBar from "./Components/SideBar";
import "./Components/SideBar.scss";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="main-background">
      <Router>
        <Switch>
          <Route exact path="/">
            <Work />
          </Route>
          <Route path="/admin">
            <NavBar
              toggled={toggled}
              collapsed={collapsed}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
            />
            <div className="app">
              <SideBar
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
              />
              <div
                style={{
                  display: "inline-block",
                  overflow: "auto",
                  width: "100%",
                }}
              >
                <Portfolio />
                <Portfolio />
              </div>
            </div>
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
