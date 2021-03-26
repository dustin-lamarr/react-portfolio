import React from "react";
import "./style.css";

function TopNav({ page }) {

  return (
    <nav className="navbar nav-bg">
   <div className="container-fluid">
        <div className="d-flex flex-row align-items-end g-0">
          <div className="d-inline-flex flex-column">
        <a className="navbar-brand" href="/" alt="deezus">
              <img src="/images/deez.png" alt="" height="75" width="75"></img>
            </a>
            </div>
            <div className="d-inline-flex flex-column p-0">
          <a className="navbar-brand mr-1" href="https://www.instagram.com/prodigal_punk/">
            <img src="/images/ig.svg" alt="instagram logo" height="30" width="30" />
          </a>
          </div>
          <div className="d-inline-flex flex-column p-0">
          <a className="navbar-brand" href="https://www.linkedin.com/in/dustinlamarr/">
            <img src="/images/li.svg" alt="linkedin logo" height="30" width="30" />
          </a>
          </div>
          <div className="d-flex flex-column align-items-end">
          <div className="d-inline-flex flex-row align-items-end">
            {page === "home" &&
            (
              <span className="navbar-text fw-bolder" style={{color: "#132639"}}>Dustin LaMarr | Full Stack Developer | dustin.lamarr@gmail.com</span>
            )}
          {page === "code" && (
            <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end  ml-auto">
              <li className="nav-item list-group-item border-0 bg-transparent pb-0" >
                <a className="nav-link" aria-current="page" href="/" id="nav-li">
                  Home
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/resume" id="nav-li">
                  Resumé
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/writing" id="nav-li">
                  Writing
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/about" id="nav-li">
                  About
                </a>
              </li>
            </ul>
          )}
           {page === "resume" && (
            <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
              <li className="nav-item list-group-item border-0 bg-transparent pb-0" >
                <a className="nav-link" aria-current="page" href="/" id="nav-li">
                  Home
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/code" id="nav-li">
                  Code
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/writing" id="nav-li">
                  Writing
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/about" id="nav-li">
                  About
                </a>
              </li>
            </ul>
          )}
          {page === "writing" && (
            <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
              <li className="nav-item list-group-item border-0 bg-transparent pb-0" >
                <a className="nav-link" aria-current="page" href="/" id="nav-li">
                  Home
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/code" id="nav-li">
                  Code
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/resume" id="nav-li">
                  Resumé
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/about" id="nav-li">
                  About
                </a>
              </li>
            </ul>
          )}
           {page === "about" && (
            <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
              <li className="nav-item list-group-item border-0 bg-transparent pb-0" >
                <a className="nav-link" aria-current="page" href="/" id="nav-li">
                  Home
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/code" id="nav-li">
                  Code
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/resume" id="nav-li">
                  Resumé
                </a>
              </li>
              <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                <a className="nav-link" aria-current="page" href="/about" id="nav-li">
                  Writing
                </a>
              </li>
            </ul>
          )}
          </div>
          </div>
          </div>
          </div>
    </nav>
  );
}

export default TopNav;
