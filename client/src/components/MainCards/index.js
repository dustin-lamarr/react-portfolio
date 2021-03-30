import React from "react";
import "./style.css";

function MainCards({ id, img, section, href}) {
 
  const styles = {
    footerFont: {
      color: "white",
    }
  }

  return (  
    // <div className="container-fluid">
      <div className="card inline border-0 card-shadow bg-dark" id={id}>
        <div className="card-body p-0">
          <a href={href}><img src={img} className="card-img" alt={id}></img></a>
        </div>
        <button className="fs-3 border-0 text-break" style={styles.footerFont} href={href} id="card-btn">
          {section}
        </button>
        
      </div>
      // </div>
   
  );
}
export default MainCards;
