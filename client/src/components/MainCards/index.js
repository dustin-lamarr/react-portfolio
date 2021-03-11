import React from "react";
import "./style.css";

function MainCards({ id, img, section, href}) {
 
  const styles = {
    footerFont: {
      color: "white",
    }
  }

  return (  
    <div className={"col-3 ml-3 h-100"}>
      <div className="card inline border-0 card-shadow bg-dark click" id={id}>
        <div className="card-body p-0">
          <img src={img} className="card-img" alt={id}></img>
        </div>
        <a className="btn" style={styles.footerFont} href={href} id="card-btn" 
        >
          {section}
        </a>
      </div>
    </div>
   
  );
}
export default MainCards;
