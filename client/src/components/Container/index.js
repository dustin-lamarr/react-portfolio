import React from "react";


function Container({ children }) {
  
  return (
    <div className="container-fluid min-vw-100" id="">
      { children }
      </div>
    
  );
}

export default Container;
