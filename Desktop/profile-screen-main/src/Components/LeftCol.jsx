import React from "react";
import ImageContainer from "./ImageContainer";
import Reach from "./Reach";
import Content from "../Content";
import profile from "../data";

const LeftCol = () => {
  return (
    <div className="left-col">
      <ImageContainer />

      <h2>{profile.name}</h2>
      <p>{profile.Position}</p>
      <p>{profile.Insta}</p>

      <Reach />

      <Content />
    </div>
  );
};

export default LeftCol;
