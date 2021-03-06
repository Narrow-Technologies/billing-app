import React, { useContext, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "./TheContext";

const SideBar = () => {
  const [links, setLinks] = useContext(SidebarContext);

  return (
    <div className='sidebar'>
      <div className='side-container'>
        <div className='logo'>
          <i className='fa fa-compress'></i>
          <p>LOGO</p>
        </div>
        <ul className='fulllist'>
          {links.map((link) => (
            <NavLink
              className='links'
              activeClassName='links-active'
              to={link.goto}
            >
              <li className='list'>
                <img className='icons' src={link.src} />
                {link.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
