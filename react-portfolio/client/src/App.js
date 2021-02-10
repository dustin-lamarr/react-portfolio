import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
      
      </div>
    </Router>
  );
}

export default App;
