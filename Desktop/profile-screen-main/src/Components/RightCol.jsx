import React from "react";
import Card from "./Card";
import Nav from "./Nav";
import profile from "../data";

const RightCol = () => {
  return (
    <div className="right-col">
      <Nav />
      <div className="post-container">
        {profile.posts.map((post, i) => {
          return (
            <Card
              title={post.title}
              content={post.Content}
              type={post.type}
              time={post.time}
              likes={post.likes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RightCol;
