import React, { Component } from "react";
import axios from "axios";
import CardDetail from "../Details/CardDetail/CardDetail";

export default class Details extends Component {
  state = {
    Details: []
  };

  getPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
      )
      .then(response =>
        this.setState({
          Details: response.data
        })
      );
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="listCard">
        {this.state.Details.map((el, key) => (
          <div>
            {" "}
            <CardDetail Detail={el} key={key} />{" "}
          </div>
        ))}
      </div>
    );
  }
}
