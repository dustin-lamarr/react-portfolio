import React from "react";
import "./style.css";

function MainCards() {
  return (
    <div className="container-fluid" id="">
      <div className="row justify-content-center align-items-start mt-5 pt-5 mx-5">
        <div className="col-3 ml-3">
          <div className="card inline border-0" id="projects">
            <div className="card-body p-0">
              <img src="/images/code.png" class="card-img-top" alt="code"></img>
            </div>
            <div className="card-footer card-footer-bg"><h3>Projects.</h3> </div>
          </div>
        </div>

        <div className="col-3 h-100">
          <div className="card inline border-0" id="resume">
            <div className="card-body p-0">
              <img src="/images/cv.png" class="card-img-top" alt="cv"></img>
            </div>
            <div className="card-footer"><h3>Resume.</h3> </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card inline border-0" id="writing">
            <div className="card-body p-0">
              <img
                src="/images/slam_poetry.jpg"
                class="card-img-top"
                alt="writing"
              ></img>
            </div>
            <div className="card-footer"><h3>Writing.</h3></div>
          </div>
        </div>

        <div className="col-3 mr-3">
          <div className="card inline border-0" id="me">
            <div className="card-body p-0">
              <img src="/images/me.png" class="card-img-top" alt="M.E."></img>
            </div>
            <div className="card-footer"><h3>About Me.</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
