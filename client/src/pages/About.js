import React from "react";
import Container from "../components/Container";
import TopNav from "../components/TopNav";

export function About() {
  const styles = {
    about: {
      color: "white",
    },
    containerBG: {
      backgroundColor: "#132639",
    },
  };

  return (
    <>
      <TopNav 
      page={"about"}
      />
      <Container>
        <div
          className="container-lg border border-dark mt-5 shadow"
          style={styles.containerBG}
        >
          <div className="row py-5">
            <p className="fs-3" style={styles.about}>
              I'm Dustin. I like movies, basketball (Go Jazz!), soccer (Liverpool FC), gaming, traveling,
              fancy cocktails, and New Wave. I was in the US Navy for six years.
              I have been to fifteen different countries. I have an awesome wife and two kids.
            </p>
            <br />
            <p className="fs-3" style={styles.about}>
              In my career life I have almost 10 years experience in branding, product
              development, marketing, and business operations. Now I write efficient, useful code and am eager to learn more.
              
              I am creative at solving problems, I take pride in my integrity, and I am a great teammate.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
