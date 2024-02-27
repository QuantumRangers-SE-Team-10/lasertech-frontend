import React from "react";
import gameLogo from "../src/assets/logo.jpg";
import "../src/css/Splash.css";

export default Splash;

function Splash() {
  return (
    <>
      <div>
        <img src={gameLogo} alt="logo" />
        <h1>Game Title</h1>
        <h2>Subtitle</h2>
      </div>
    </>
  );
}
