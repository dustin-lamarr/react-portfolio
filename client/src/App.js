import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav"
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
