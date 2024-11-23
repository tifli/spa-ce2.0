import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Model from "./Model";
import FAQs from "./FAQs";
import About from "./About";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/model" component={Model} />
        <Route path="/faq" component={FAQs} />
        <Route path="/about-us" component={About} />
      </Switch>
    </Router>
  );
};

export default App;