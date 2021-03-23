import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Code, Resume, Writing, About } from "./pages";

function App() {
  return (
    <Router>
      <div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/code" component={Code}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/writing" component={Writing}/>
            <Route exact path="/about" component={About}/>
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
