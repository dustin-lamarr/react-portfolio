import React from "react";
import "./style.css";

function TopNav() {
  return (
    <nav className="navbar nav-bg">
      <div className="container-fluid justify-content-end">
        <div className="row">
          <a className="navbar-brand" href="/" alt="deezus">
            <img
              src="/images/deez.png"
              alt=""
              className="d-inline-block align-middle"
              height="75"
              width="75"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Code.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Resume.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Writing.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Me.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
