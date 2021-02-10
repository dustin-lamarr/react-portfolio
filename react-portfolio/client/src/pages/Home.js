import React from "react";
import Container from "react-bootstrap/Container";
import JumboTron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <Container>
      <JumboTron>
        <CardDeck>
          <Card id="projects">
            <Card.Body>
              <Card.Img src="../images.code.png"></Card.Img>
            </Card.Body>
            <Card.Footer as="h3">Projects.</Card.Footer>
          </Card>
          <Card id="resume">
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Resume.</Card.Footer>
          </Card>
          <Card id="writing">
            <Card.Body></Card.Body>
            <Card.Footer as="h3">Writing.</Card.Footer>
          </Card>
          <Card id="me">
            <Card.Body></Card.Body>
            <Card.Footer as="h3">About Me.</Card.Footer>
          </Card>
        </CardDeck>
      </JumboTron>
    </Container>
  );
};

export default Home;
