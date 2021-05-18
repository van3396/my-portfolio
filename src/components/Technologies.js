import React from "react";
import "../css-components/technologies.css";
import Logos from "./Logos";
import mern from "../images/mern.png";
import pern from "../images/pern.png";

const Technologies = () => {
  return (
    <>
      <div>
        <h5 className="title"> Technologies & Technical Skills</h5>
      </div>
      <div>
        <Logos />
      </div>
      <hr />
      <div className="stacks">
        <h5 className="title"> Stacks</h5>
        <img src={mern} alt="" />
        <img src={pern} alt="" />
      </div>
      <hr />
    </>
  );
};

export default Technologies;
