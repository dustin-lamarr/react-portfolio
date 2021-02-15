import React from "react";
import "./style.css";

function MainCards(props) {
  return (
        <div className="col-3 ml-3 h-100">
          <div className="card inline border-0 card-shadow" id={props.id}>
            <div className="card-body p-0">
              <img src={props.img} class="card-img" alt={props.id}></img>
            </div>
            <div className="card-footer card-h3"
                  id="card-footer-bg">
              <span className="" href=".card-transition">
              <h3 className="fw-light">{props.section}</h3>
              </span>
          </div>
          </div>
        </div>     
  );
}
export default MainCards;
