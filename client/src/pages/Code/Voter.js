import React from "react";
import Container from "../../components/Container";
import TopNav from "../../components/TopNav";
import ProjectInfo from "../../components/ProjectInfo";

export function Voter() {

  const voterIMG = {
    imgA: "/images/voter-signup.png",
    imgB: "/images/voter-login.png",
    imgC: "/images/voter-dashboard.png"
  }
    return (
        <>
      <TopNav />
      <Container>
<ProjectInfo img={voterIMG}/>
      </Container>
      </>
    )
}