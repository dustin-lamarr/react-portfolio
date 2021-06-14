import React from "react";
import Container from "../components/Container";
import TopNav from "../components/TopNav";
import Row from "../components/Row";

export function Resume() {
  return (
    <>
      <TopNav 
      page={"resume"}
      />
      <Container>
        <div className="container-lg">
          <div className="row pt-5">
            <object
              type="application/pdf"
              data="/images/dustin_lamarr_full_stack_resume.pdf"
              width="auto"
              height="800"
            ></object>
          </div>
        </div>
      </Container>
    </>
  );
}
