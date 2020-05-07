// require dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// function App
function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* wrap routes in switch case to create routes and load appropriate components*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
           {/* catch all route*/}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export as App
export default App;
