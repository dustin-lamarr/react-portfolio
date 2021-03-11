import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav"
import Home from "./pages/Home";
import Code from "./pages/Code"

function App() {
  return (
    <Router>
      <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/code" component={Code}/>
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
