import React from "react";
import "./CardDetail.css";

const CardDetail = ({ Detail }) => {
  return (
    <div className="cardDetail">
      <div>
        <h3 className="nameDetail"> Name: {Detail.name}</h3>
        <h3 className="emailDetail"> Email: {Detail.email}</h3>
        <h3 className="Detail">{Detail.body}</h3>
      </div>
    </div>
  );
};

export default CardDetail;
