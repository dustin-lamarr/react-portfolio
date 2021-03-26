import React from "react";
import "./style.css";

function TopNav({ page }) {
  return (
    <nav className="navbar nav-bg px-0">
      <div className="container-fluid">
        <div className="d-flex flex-row align-items-end g-0">
          <div className="d-inline-flex flex-column">
            <a className="navbar-brand m-0" href="/" alt="deezus">
              <img src="/images/deez.png" alt="" height="75" width="75"></img>
            </a>
          </div>
          
          <div className="d-flex flex-column">
            <div className="d-inline-flex flex-row">
              {page === "home" && (
                 <ul className="navbar-nav list-group-flush list-group-horizontal">
                 <li className="nav-item list-group-item border-0 bg-transparent p-0">
                <span
                  className="navbar-text"
                  style={{ color: "white" }}
                >
                  Dustin LaMarr | Full Stack Developer | <a className="link-light" href="mailto:dustin.lamarr@gmail.com">dustin.lamarr@gmail.com</a>
                </span>
                </li>
                </ul>
              )}
              {page === "code" && (
                <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end  ml-auto">
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/"
                      id="nav-li"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/resume"
                      id="nav-li"
                    >
                      Resumé
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/writing"
                      id="nav-li"
                    >
                      Writing
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/about"
                      id="nav-li"
                    >
                      About
                    </a>
                  </li>
                </ul>
              )}
              {page === "resume" && (
                <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/"
                      id="nav-li"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/code"
                      id="nav-li"
                    >
                      Code
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/writing"
                      id="nav-li"
                    >
                      Writing
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/about"
                      id="nav-li"
                    >
                      About
                    </a>
                  </li>
                </ul>
              )}
              {page === "writing" && (
                <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/"
                      id="nav-li"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/code"
                      id="nav-li"
                    >
                      Code
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/resume"
                      id="nav-li"
                    >
                      Resumé
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/about"
                      id="nav-li"
                    >
                      About
                    </a>
                  </li>
                </ul>
              )}
              {page === "about" && (
                <ul className="navbar-nav list-group-flush list-group-horizontal align-items-end">
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/"
                      id="nav-li"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/code"
                      id="nav-li"
                    >
                      Code
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/resume"
                      id="nav-li"
                    >
                      Resumé
                    </a>
                  </li>
                  <li className="nav-item list-group-item border-0 bg-transparent pb-0">
                    <a
                      className="nav-link py-0"
                      aria-current="page"
                      href="/about"
                      id="nav-li"
                    >
                      Writing
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex-row me-auto">
          <div className="d-inline-flex flex-column justify-content-center">
            <a
              className="navbar-brand px-3 py-0 mx-0"
              href="https://www.instagram.com/prodigal_punk/"
            >
              <img
                src="/images/ig.svg"
                alt="instagram logo"
                height="30"
                width="30"
                
              />
            </a>
          </div>
          <div className="d-inline-flex flex-column">
            <a
              className="navbar-brand px-1 py-0"
              href="https://www.linkedin.com/in/dustinlamarr/"
            >
              <img
                src="/images/li.svg"
                alt="linkedin logo"
                height="30"
                width="30"
              />
            </a>
          </div>
          <div className="d-inline-flex flex-column">
            <a
              className="navbar-brand py-0"
              href="https://github.com/dustin-lamarr"
            >
              <img
                src="/images/github.svg"
                alt="github logo"
                height="30"
                width="30"
              />
            </a>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
