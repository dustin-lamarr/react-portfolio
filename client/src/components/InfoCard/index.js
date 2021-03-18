import React from "react";

function InfoCard({ id, img, section, href }) {
  const styles = {
    bodyFont: {
      color: "white",
    },
  };

  return (
    <div className="pb-3">
      <div className="card inline border-0 card-shadow bg-dark" id={id}>
      <img src={img} className="card-img-top" alt="..."></img>
          <div className="card-body pl-3">
           <a href={href}> <p className="card-text fs-3 btn border-0" style={styles.bodyFont}>
              {section}
            </p></a>
          </div>
        </div>
      </div>

  );
}
export default InfoCard;
