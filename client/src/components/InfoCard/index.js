import React, { useState } from "react";

function InfoCard({ id, img, section, href, summary, tech }) {
  const styles = {
    bodyFont: {
      color: "white",
    },
    footerBG: {
      backgroundColor: "#132639",
      color: "white",
    },
  };
  console.log(tech)
const [techArray, setTech] = useState([]);
setTech(tech)
console.log(techArray)
  return (
    <div className="row pt-4 mx-5 align-items-center">
      <div
        className="card card-body border-0 card-shadow"
        id={id}
        style={styles.footerBG}
      >
        <div className="row">
          <div className="col p-2 align-self-start">
            <img src={img} alt="..."></img>
          </div>
          <div className="col pt-3 align-self-start">
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={styles.footerBG}>
                <a className="btn border-0 p-0 m-0" href={href}>
                  <p className="fs-1" style={styles.bodyFont}>
                    {section}
                  </p>
                </a>
              </li>
              <li className="list-group-item" style={styles.footerBG}>
                <p style={{ color: "white" }}>{summary}</p>
              </li>
              <li className="list-group-item" style={styles.footerBG}>
                <p style={{ color: "white" }}>Tech:</p>
                <ul>
                  {techArray.map((tech, i) => {
                    return (
                <li>{tech.tech}</li>
                    )
              })}
                </ul>
              </li>
              <li className="list-group-item" style={styles.footerBG}>
                A fourth item
              </li>
              <li className="list-group-item" style={styles.footerBG}>
                And a fifth one
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoCard;
