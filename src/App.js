import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "./Components/ListUser/ListUser";
import Posts from "./Components/Posts/Posts";
import Details from "./Components/Details/Details";
import CardDetails from "./Components/Details/CardDetail/CardDetail";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <ListUser />} />
            <Route exact path="/Posts/:id" component={Posts} />
            {/* <Route exact path="/Details/:id" component={Details} /> */}
            <Route exact path="/DetailPost/:id" component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
