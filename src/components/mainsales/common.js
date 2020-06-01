import React from "react";
import { Link } from "react-router-dom";
import "./mainsales.css";

const Common = () => {
  return (
    <div className='under'>
      <h1>
        Under <br /> Construction <i className='fa fa-wrench'></i>
      </h1>
      <Link className='link' to='/components/dashboard'>
        <i className='fa fa-home'></i> Back to Dashboard
      </Link>
    </div>
  );
};

export default Common;
