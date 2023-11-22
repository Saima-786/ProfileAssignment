import React from "react";
import Header from "./Components/Header";
import LeftCol from "./Components/LeftCol";
import RightCol from "./Components/RightCol";

const App = () => {
  return (
    <div className="header-wrapper">
      <Header />
      <div className="cols-container">
        <LeftCol/>
        <RightCol/>
      </div>
    </div>
  );
};

export default App;
