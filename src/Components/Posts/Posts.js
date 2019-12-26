import React, { Component } from "react";
import axios from "axios";
import PostCard from "../Posts/PostCard/PostCard";

export default class Posts extends Component {
  state = {
    Posts: []
  };

  getPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
      )
      .then(response =>
        this.setState({
          Posts: response.data
        })
      );
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="listCard">
        {this.state.Posts.map((el, key) => (
          <div>
            {" "}
            <PostCard Post={el} key={key} />{" "}
          </div>
        ))}
      </div>
    );
  }
}
