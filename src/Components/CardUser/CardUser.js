import React from "react";
import "./CardUser.css";
import { Link } from "react-router-dom";

const CardUser = ({ User }) => {
  return (
    <div className="card">
      <div>
        <img
          src="https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
          className="photo"
        />
        <h3 className="name">{User.name}</h3>
        <h3 className="username">{User.username}</h3>
        <h3 className="email">{User.email}</h3>

        <Link to={`/Posts/${User.id}`}>
          <button className="button">
            {" "}
            <strong>Following</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardUser;
