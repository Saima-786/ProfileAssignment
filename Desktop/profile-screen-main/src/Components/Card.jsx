import React from "react";

const Card = (props) => {
  return (
    <div className="post">
      <div className="heading">
        <h2>{props.title}</h2>
        <p>👍</p>
      </div>
      <p>{props.content}</p>
      <div className="meta">
        <h3>
          <span>{props.type}</span> by Saima sheikh
        </h3>
        <p>
          {props.time}, {props.likes}
        </p>
      </div>
    </div>
  );
};

export default Card;
