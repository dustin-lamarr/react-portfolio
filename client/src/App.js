import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Code, Resume } from "./pages";

function App() {
  return (
    <Router>
      <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/code" component={Code}/>
            <Route exact path="/resume" component={Resume}/>
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
