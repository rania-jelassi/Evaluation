import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ Post }) => {
  return (
    <Link className="deco" to={`/DetailPost/${Post.id}`}>
      <div className="cardPost">
        <div>
          <h3 className="namePost">{Post.title}</h3>
          <h3 className="Post">{Post.body}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
