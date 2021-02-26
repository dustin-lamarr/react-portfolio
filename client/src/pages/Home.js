import React, { useState } from "react";
import "./style.css";
import Container from "../components/Container";
import Row from "../components/Row";
import MainCards from "../components/MainCards";

function Home() {
  const [cardState, setCardState] = useState({
    className: "invisible"
  });
  const onClick = (event) => {
    console.log(event.target.parentNode)
    if (event.parentElement.className === "click") {
      console.log(event.parentNode.class)
      event.parentNode.class = "invisible";
    } else {
      event.parentNode.className = "click";
      console.log("else")
    }
  };

  return (
    <Container>
      <Row>
        <MainCards
          id={"code"}
          img={"/images/code.png"}
          section={"Code."}
          onClick={onClick}
        />
        <MainCards id={"resume"} img={"/images/cv.png"} section={"Resumé."} onClick={onClick}
/>
        <MainCards
          id={"writing"}
          img={"/images/slam_poetry.png"}
          section={"Writing."}
          onClick={onClick}
        />
        <MainCards id={"me"} img={"/images/me.png"} section={"About Me."} onClick={onClick}
/>
      </Row>
    </Container>
  );
}

export default Home;
