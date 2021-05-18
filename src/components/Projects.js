import React from "react";
import "../css-components/projects.css";
import btg from "../images/btg.png";
import pern from "../images/pern.png";
import d3 from "../images/d3.png";
import js from "../images/js.png";
import rb from "../images/rb.png";
import materialUI from "../images/material-ui.png";
import sequelize from "../images/sequelize.png";


const Projects = () => {
  const logos = [pern, d3, js, rb, materialUI, sequelize];
  return (
    <>
      <div className="capstone">
        <div>
          <a
            href="http://bridgethegap-2011capstone.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="linktext"
          >
            <img src={btg} />
          </a>
        </div>
        <div className="btg">
          <h6>Bridge the Gap</h6>
          <p>
            - Bridge the Gap is about more than just collecting data. The gender
            pay gap exists in our world today, but there are ways we can help
            bridge this divide. On average, women and gender minorities armed
            with pertinent wage information and resources see a compensation
            increase of 8% to 30% in their total compensation.
          </p>
          {logos.map((logo) => (
            <img key={logo} src={logo} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
