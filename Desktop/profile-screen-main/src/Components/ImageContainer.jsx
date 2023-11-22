import React from "react";
import profile from "../data";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img
        src={profile.profile_pic}
        alt=""
      />
      <span></span>
    </div>
  );
};

export default ImageContainer;
