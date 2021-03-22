import React from "react";


function Container({ children }) {
  
  return (
    <div className="container-fluid p-0" id="">
      { children }
      </div>
    
  );
}

export default Container;
