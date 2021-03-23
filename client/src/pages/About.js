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
      <TopNav />
      <Container>
        <div
          className="container-lg border border-dark mt-5 shadow"
          style={styles.containerBG}
        >
          <div className="row py-5">
            <p className="fs-3" style={styles.about}>
              I'm Dustin. I like movies, basketball, soccer, gaming, traveling,
              fancy cocktails, and New Wave. I was in the US Navy for six years.
              I have been to fifteen different countries.
            </p>
            <br />
            <p className="fs-3" style={styles.about}>
              I have almost 10 years experience in branding, product
              development, marketing, and business operations. Now I write
              efficient, useful code and am eager to learn more.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
