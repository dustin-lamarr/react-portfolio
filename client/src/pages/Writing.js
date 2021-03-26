import React from "react";
import Container from "../components/Container"
import TopNav from "../components/TopNav"


export function Writing(){

    return (
        <>
          <TopNav 
          page={"writing"}
          />
          <Container>
            <div className="container-fluid">
              <div className="row row-cols py-5 ml-5 justify-content-center">
              <div className="col align-self-center">  
              <object
                  type="application/pdf"
                  data="/images/arena.pdf"
                  width="600"
                  height="800"
                >Arena</object>
                </div>
                
                <div className="col align-self-center">  <object
                  type="application/pdf"
                  data=""
                  width="600"
                  height="800"
                ></object>
                </div>
              </div>
            </div>
          </Container>
        </>
      );
}

