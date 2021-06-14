import React, { Component } from "react";

import "../nav.css";

import DarkModeToggle from "./DarkModeToggle";

class Nav extends Component {
 render() {
  return (
   <>
    <nav className="main-menu lef">
     <ul>
      <li style={{ marginTop: "42px" }}>
       <span id="a" className="dec nav-covid">
        COVID19
       </span>
      </li>
      <li>
       <span id="b" className="dec">
        INDIA
       </span>
      </li>
      <li className="has-subnav one">
       <a href="#">
        <i className="fa fa-home fa-2x icon"></i>
        <span className="nav-text">Home</span>
       </a>
      </li>
      {/* <li className="has-subnav">
       <a href="#">
        <i className="fa fa-laptop fa-2x"></i>
        <span className="nav-text">Blog</span>
       </a>
      </li>
      <li className="has-subnav">
       <a href="#">
        <i className="fa fa-question-circle fa-2x"></i>
        <span className="nav-text">About</span>
       </a>
      </li> */}
      <li className="has-subnav">
       <a href="./#/resources">
        <i className="fa fa-phone fa-2x side icon"></i>
        <span className="nav-text">Resources</span>
       </a>
      </li>
      {/* <li>
       <a href="#">
        <i className="fa fa-signal fa-2x side"></i>
        <span className="nav-text">
         Graphs and Statistics
        </span>
       </a>
      </li> */}

      <li>
       <a href="#">
        <i className="fa fa-sun-o fa-2x icon"></i>

        <DarkModeToggle />
       </a>
      </li>
      {/* <li className="special">
       <a href="#">English</a>
      </li> */}
     </ul>
    </nav>
    <nav className=" main-menu-mobile navbar navbar-expand-md navbar-light top">
     <a className="navbar-brand" href="#" style={{ fontSize: "12px" }}>
      English
     </a>
     <a className="navbar-brand font-weight-bold" href="#">
      <span style={{ color: "black", fontSize: "18px" }} className="nav-covid">
       COVID19
      </span>
      <span style={{ color: "#4c75f2", fontSize: "18px" }}> INDIA</span>
     </a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <div class="demo">
       <div class="menu-icon">
        <input class="menu-icon__cheeckbox" type="checkbox" />
        <div>
         <span></span>
         <span></span>
        </div>
       </div>
      </div>
     </button>
     <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       <li className="nav-item">
        <a className="nav-link active" href="#">
         Home
        </a>
       </li>
       {/* <li className="nav-item">
        <a className="nav-link" href="#">
         Blog
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#">
         About
        </a>
       </li> */}
       <li className="nav-item">
        <a className="nav-link" href="./#/resources/">
         Resources
        </a>
       </li>

       <li className="nav-item">
        <a className="nav-link">
         <DarkModeToggle />
        </a>
       </li>
      </ul>
     </div>
    </nav>
   </>
  );
 }
}
export default Nav;
