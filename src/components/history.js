import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function History() {
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
}

export default History;
