import React from "react";
import "../css-components/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footerName">Don't be shy, connect with me!</p>
      <a
        href="https://www.linkedin.com/in/qui-van/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png"
          className="linkedin"
          alt="linkedin logo"
        />
      </a>
      <a href="https://github.com/van3396" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          className="github"
          alt="github logo"
        />
      </a>
    </div>
  );
};

export default Footer;
