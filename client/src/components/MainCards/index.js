import React from "react";
import "./style.css";

function MainCards({ id, img, section, onClick}) {
  return (
    
    <div className={"col-3 ml-3 h-100"}>
      <div className="card inline border-0 card-shadow bg-dark click" id={id}>
        <div className="card-body p-0">
          <img src={img} class="card-img" alt={id}></img>
        </div>
        <button className="btn click" href="" id="card-btn" onClick={e=> {
          onClick(e)
        }}>
          {/* <div className="card-footer card-h3 px-0" id="card-footer-bg"> */}
            {section}
          {/* </div> */}
        </button>
      </div>
    </div>
   
  );
}
export default MainCards;
