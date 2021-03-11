import React from "react";
import Container from "../components/Container";
import MainCards from "../components/MainCards";
import TopNav from "../components/TopNav";
import Row from "../components/Row";

function Code() {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <MainCards
            img={"/images/voter-dashboard.png"}
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
        </Row>
      </Container>
    </>
  );
}

export default Code;
