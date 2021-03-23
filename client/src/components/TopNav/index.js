import React from "react";
import "./style.css";

function TopNav() {
  return (
    <nav className="navbar nav-bg">
   
        <div className="row align-items-center justify-content-center">
          <div className="col d-inline align-self-center pl-3">
        <a className="navbar-brand" href="/" alt="deezus">
              <img src="/images/deez.png" alt="" height="75" width="75"></img>
            </a>
            </div>
            <div className="col d-inline align-self-end p-0">
          <a className="navbar-brand" href="">
            <img src="/images/ig.svg" alt="instagram logo" height="30" width="30" />
          </a>
          </div>
          </div>
    </nav>
  );
}

export default TopNav;
