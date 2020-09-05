import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Friend from "./components/Friend/Friend";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import FriendDetail from "./components/FriendDetail/FriendDetail";

function App() {
  return (
    <div>
      <Router>
        {" "}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend/:friendID">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
