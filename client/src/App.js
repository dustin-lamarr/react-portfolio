import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav"
import { Home, Code, Voter } from "./pages";

function App() {
  return (
    <Router>
      <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/code" component={Code}/>
            <Route exact path="/code/voter" component={Voter}/>
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
