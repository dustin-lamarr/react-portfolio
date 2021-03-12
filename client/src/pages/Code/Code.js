import React from "react";
import Container from "../../components/Container";
import MainCards from "../../components/MainCards";
import TopNav from "../../components/TopNav";
import Row from "../../components/Row";

export function Code() {
  return (
    <>
      <TopNav />
      <Container>
        <div className="row pt-5">
        <div className="col-1"></div>
        <div className="col-10 align-self-center">
          {/* <div className="row align-items-center justify-content-center "> */}
          <MainCards
            img={"/images/voter-landing.png"}
            id={"voter"}
            section={"Voter"}
          />

          <MainCards
            img={"/images/bobbyfirmino.png"}
            id={"bobby"}
            section={"bobbyfirmino.com"}
          />
          <MainCards
            img={"/images/binger.png"}
            id={"binger"}
            section={"Binger"}
          />
          </div>
          </div>
          <div className="col-1"></div>
          {/* </div> */}
      </Container>
    </>
  );
}
