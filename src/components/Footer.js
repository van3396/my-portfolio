import React from "react";
import "../css-components/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <p className="footerText"><b>Created by Qui</b></p>
        <div className="linkedin">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/linkedin-191-739516.png"
            className="linkedinimage"
            alt="linkedin logo"
          />
          <a
            href="https://www.linkedin.com/in/qui-van/"
            target="_blank"
            rel="noreferrer"
            className="linktext"
          >
            LinkedIn
          </a>
        </div>
        <div className="github">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            className="githubimage"
            alt="github logo"
          />
          <a
            href="https://github.com/van3396"
            target="_blank"
            rel="noreferrer"
            className="linktext"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
