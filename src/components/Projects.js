import React from "react";
import "../css-components/projects.css";
import btg from "../images/btg.png";
import weatherapp from "../images/weatherapp.png"
import pern from "../images/pern.png";
import d3 from "../images/d3.png";
import js from "../images/js.png";
import rb from "../images/rb.png";
import materialUI from "../images/material-ui.png";
import sequelize from "../images/sequelize.png";
import node from "../images/node.png";
import handlebars from "../images/handlebars.png";

const Projects = () => {
  const logos = [pern, d3, js, rb, materialUI, sequelize, node];
  return (
    <>
      <h5>Projects & Articles</h5>
      <div className="project">
        <div>
          <a
            href="http://bridgethegap-2011capstone.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="linktext"
          >
            <img className="projectPic" src={btg} />
          </a>
          <p className='webLink'>(click on image to view site)</p>
        </div>
        <div className="btg">
          <h4>Bridge the Gap</h4>
          
          <p>
            Bridge the Gap is about more than just collecting data. The gender
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

      <div className="project">
      <div className="btg">
          <h4 className="weatherTitle">My Weather App</h4>
          
          <p>
            Check the weather anywhere in the world.  Using weathstack and mapbox APIs.
          </p>
          <img src={node} alt="" />
          <img src={handlebars} alt="" />
        </div>
        <div>
          <a
            href="https://qui-van-weather-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="linktext"
          >
            <img className="projectPic" src={weatherapp} />
          </a>
          <p className='webLink'>(click on image to view site)</p>
        </div>
      
      </div>
    </>
  );
};

export default Projects;
