import React from "react";

function Container({ children }) {
    return (
    <div className="container" id="">
    <div className="row justify-content-center align-items-center mt-5 pt-5 mx-5">
        { children }
    </div>
    </div>

    )
}

export default Container;