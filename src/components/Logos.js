import React from "react";
import git from "../images/git.png";
import gitHub from "../images/github.png";
import js from "../images/js.png";
import node from "../images/node.png";
import postgres from "../images/postgres.png";
import react from "../images/react.png";
import wordpress from "../images/wordpress.png";
import html from "../images/html.png";
import css from "../images/css.png";
import materialUI from "../images/material-ui.png";
import sequelize from "../images/sequelize.png";
import cloudways from "../images/cloudways.png";
import handlebars from "../images/handlebars.png";
import ejs from "../images/ejs.png";
import netlify from "../images/netlify.png";

const Logos = () => {
  const logos = [
    git,
    gitHub,
    js,
    node,
    postgres,
    react,
    wordpress,
    html,
    css,
    materialUI,
    sequelize,
    cloudways,
    handlebars,
    ejs,
    netlify
  ];

  return (
    <>
      <div>
        {logos.map((logo) => (
          <img key={logo} src={logo} alt="" />
        ))}
      </div>
    </>
  );
};

export default Logos;
