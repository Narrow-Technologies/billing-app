import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <div className='first'>
        <i className='fa fa-search'></i>{" "}
        <input className='head-search' type='text' placeholder='Search' />
      </div>
      <div className='company-name'>
        <h3>Manager's Name</h3>
        <div className='pic'> </div>
        <i className='fa fa-bell'></i>
      </div>
    </header>
  );
}

export default Header;
