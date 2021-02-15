import React, { useState } from "react";
import "./style.css";
import Container from "../components/Container";
import MainCards from "../components/MainCards";

function Home () {
  const [cardTransition, setCardState] = useState({

  })
  return (
    <Container>
 <MainCards
 id={"code"}
 img={"/images/code.png"}
 section={"Code."}
 />
 <MainCards
 id={"resume"}
 img={"/images/cv.png"}
 section={"Resumé."}
 />
 <MainCards
 id={"writing"}
 img={"/images/slam_poetry.png"}
 section={"Writing."}
 />
 <MainCards
 id={"me"}
 img={"/images/me.png"}
 section={"About Me."}
 />
 </Container>
  )
};

export default Home;
