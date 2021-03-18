import React from "react";

function ProjectInfo({ img }) {

    return (
       
        <div className="row">
        <div className="container border">
<div className="row">
    <div className="col">
        <img src={img.imgA} alt=""/>
        </div>
        <div className="col">
        <img src={img.imgB} alt=""/>
        </div>
        <div className="col">
        <img src={img.imgC} alt=""/>
        </div>
</div>
</div>
        </div>
        
    )
}

export default ProjectInfo;