import React from "react";
import "../css-components/header.css";

const Header = () => {
  return (
    <>
    <header className="header">
      <p className="headerName">Qui Van</p>
      {/* <h2>Software Engineer</h2>
    <h2>Poker Player</h2>
    <h2>Personal Development</h2> */}
      <div className="headerLinks">
        <p className="link">About Me</p>
        <p className="link">Projects</p>
        <p className="link">Resume</p>
      </div>
    </header>
    <hr/>
    </>
  );
};

export default Header;
