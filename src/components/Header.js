import React from "react";
import "../css-components/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <p className="fullName">
            <strong className="fname">QUI </strong>VAN
          </p>
          <p>I am a software engineer.</p>
          <p className="phrase">
            “Personal development is an unending challenge to see what you can
            become…”
          </p>
          <p className="phrase by">
            <i>– a Wiseman</i>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
