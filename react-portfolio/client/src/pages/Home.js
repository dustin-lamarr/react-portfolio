import React from "react";
import Container from "react-bootstrap/Container";
import JumboTron from "../components/Jumbotron";
import CardComp from "../components/CardComp";

const Home = () => {
  return (
    <Container>
      <JumboTron>
<CardComp id="cardComponent">

</CardComp>
      </JumboTron>
      </Container>
  );
};

export default Home;
