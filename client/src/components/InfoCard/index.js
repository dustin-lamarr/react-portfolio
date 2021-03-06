import React from "react";

function InfoCard({ id, img, section, href, summary, children, github, alt }) {
  const styles = {
    listBody: {
      backgroundColor: "#132639",
      color: "white",
    },
  };

  return (
    <div className="row pt-4 mx-5 align-items-center">
      <div
        className="card card-body border-0 card-shadow"
        key={id}
        style={styles.listBody}
      >
        <div className="row">
          <div className="col-sm p-2 align-self-center">
            <img className="img-fluid" src={img} alt={alt}></img>
          </div>
          <div className="col-sm pt-3 align-self-start">
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0" style={styles.listBody}>
              <a
                className="fs-1 p-1 border-0"
                href={href}
                style={styles.listBody}
              >
                {section}
                
              </a>
              </li>
              <li className="list-group-item" style={styles.listBody}>
                <p style={{ color: "white" }}>{summary}</p>
              </li>
              <li className="list-group-item" style={styles.listBody}>
                <p style={{ color: "white" }}>Tech:</p>
                <ul>{children}</ul>
              </li>
              <li className="list-group-item" style={styles.listBody}>
                <a href={github}>{section} on Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoCard;
