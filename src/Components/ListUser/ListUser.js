import React, { Component } from "react";
import CardUser from "../CardUser/CardUser";
import axios from "axios";
import "./ListUser.css";

export default class ListUser extends Component {
  state = {
    Users: []
  };

  getAll = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>
      this.setState({
        Users: response.data
      })
    );
  };

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div className="listCard">
        {this.state.Users.map((el, key) => (
          <div>
            {" "}
            <CardUser User={el} key={key} />{" "}
          </div>
        ))}
      </div>
    );
  }
}
