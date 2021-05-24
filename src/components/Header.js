import React from "react";
import "../css-components/header.css";
import a10 from "../images/a10.png";
import qui from "../images/quiVanLogo.png";

const Header = () => {
  return (
    <>
      <img className="logo" src={qui} alt="" />
      <header className="header">
        <div>
          <p className="phrase">
            “Personal development is an unending challenge to see what you can
            become…”
          </p>
          <p className="phrase by">
            <i>– a Wiseman</i>
          </p>
          <div className="header_info">
            <img className="me" src={a10} alt="" />
            <p className="header_about_me">
              If I'm not improving or studying new technologies, spending time
              with my wife and kids takes up my day.  My "me time", would be
              playing some poker.  Omaha 8/better is my main choice but I
              started off as a no-limit Hold'em player.
            </p>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
};

export default Header;
