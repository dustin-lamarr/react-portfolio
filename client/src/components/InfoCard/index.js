import React from "react";
import "./style.css";

function InfoCard({ id, img, section }) {
 
  const styles = {
    footerFont: {
      color: "white",
    }
  }

  return (  
    <div className="pb-3">
      <div className="card inline border-0 card-shadow bg-dark" id={id}>
        <div className="card-body p-0">
          <img src={img} className="card-img" alt={id}></img>
        </div>
        <p class="card-text">{section}</p>
      </div>
      </div>
   
  );
}
export default InfoCard;
