import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import MainCards from "../components/MainCards";
import TopNav from "../components/TopNav";

function Home() {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <MainCards
            id={"code"}
            img={"/images/code.png"}
            section={"Code."}
            href={"/code"}
          />
          <MainCards
            id={"resume"}
            img={"/images/cv.png"}
            section={"Resumé."}
            href={"/resume"}
          />
          <MainCards
            id={"writing"}
            img={"/images/slam_poetry.png"}
            section={"Writing."}
            href={"/writing"}
          />
          <MainCards
            id={"me"}
            img={"/images/me.png"}
            section={"About Me."}
            href={"/about"}
          />
        </Row>
      </Container>
    </>
  );
}

export default Home;
