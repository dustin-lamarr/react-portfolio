import React from "react";
import "./style.css";

function TopNav() {
  return (
    <nav className="navbar nav-bg">
   
        <div className="row align-items-center justify-content-center g-0">
          <div className="col d-inline align-self-center">
        <a className="navbar-brand" href="/" alt="deezus">
              <img src="/images/deez.png" alt="" height="75" width="75"></img>
            </a>
            </div>
            <div className="col d-inline align-self-end p-0">
          <a className="navbar-brand mr-1" href="https://www.instagram.com/prodigal_punk/">
            <img src="/images/ig.svg" alt="instagram logo" height="30" width="30" />
          </a>
          </div>
          <div className="col d-inline align-self-end p-0">
          <a className="navbar-brand" href="https://www.linkedin.com/in/dustinlamarr/">
            <img src="/images/li.svg" alt="linkedin logo" height="30" width="30" />
          </a>
          </div>
          
          </div>
    </nav>
  );
}

export default TopNav;
