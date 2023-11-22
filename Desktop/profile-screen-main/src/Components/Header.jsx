import React from "react";
import profile from "../data";

const Header = () => {
  return (
    <header
      style={{
        background: "url(" + profile.background + ") no-repeat 50% 20% / cover",
      }}
    ></header>
  );
};

export default Header;
