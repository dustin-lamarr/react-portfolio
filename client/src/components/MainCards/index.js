import React from "react";
import "./style.css";

function MainCards({ id, img, section, href}) {
 
  const styles = {
    footerFont: {
      color: "white",
    }
  }

  return (  
    <div className="pb-4">
      <div className="card inline border-0 card-shadow bg-dark" id={id}>
        <div className="card-body p-0">
          <img src={img} className="card-img" alt={id}></img>
        </div>
        <a className="btn fs-3 p-0" style={styles.footerFont} href={href} id="card-btn">
          {section}
        </a>
        
      </div>
      </div>
   
  );
}
export default MainCards;
