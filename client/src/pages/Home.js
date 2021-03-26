import React from "react";
import "./style.css"
import Container from "../components/Container";
import Row from "../components/Row";
import MainCards from "../components/MainCards";
import TopNav from "../components/TopNav";

export function Home() {
  
  return (
    <>
      <TopNav 
      page={"home"}
      />
      <Container>
        <Row>
        <div className={"col-sm-3 ml-3 h-100 pb-3"}>
          <MainCards
            id={"code"}
            img={"/images/code.png"}
            section={"Code."}
            href={"/code"}
          />
          </div>
          <div className={"col-sm-3 ml-3 h-100 pb-3"}>
          <MainCards
            id={"resume"}
            img={"/images/cv.png"}
            section={"Resumé."}
            href={"/resume"}
            page={"resume"}
          />
          </div>
          <div className={"col-sm-3 ml-3 h-100 pb-3"}>
          <MainCards
            id={"writing"}
            img={"/images/slam_poetry.png"}
            section={"Writing."}
            href={"/writing"}
            page={"writing"}
          />
          </div>
          <div className={"col-sm-3 ml-3 h-100 pb-3"}>
          <MainCards
            id={"me"}
            img={"/images/me.png"}
            section={"About Me."}
            href={"/about"}
            page={"about"}
          />
          </div>
        </Row>
      </Container>
      
    </>
  );
}

