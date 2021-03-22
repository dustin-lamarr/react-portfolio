import React from "react";
import Container from "../../components/Container";
import TopNav from "../../components/TopNav";
import InfoCard from "../../components/InfoCard";

export function Code() {
  return (
    <>
      <TopNav />
      <Container>
       
          <InfoCard
            img={"/images/voter-dashboard.png"}
            id={"voter"}
            section={"Voter"}
            href={"https://lamarr-voter-app.herokuapp.com/"}
            summary={"An ongoing project to help people be more informed about how their elected officials are representing them. Currently displays users federal, state, and municipal officials."}
            tech={["HTML/CSS","Javascript","React","MongoDB (Atlas)","Passport","Axios","Bootstrap","Express","Mongoose","Google Civic API","Pro-Publica Congress API"]}
          />

          <InfoCard
            img={"/images/bobbyfirmino.png"}
            id={"bobby"}
            section={"bobbyfirmino.com"}
            href={"http://bobbyfirmino.com/"}
            summary={"Promotional website in conjunction with LFC Utah. Currently renders a random gif based on an api search from the clicked team name."}
          />
          <InfoCard
            img={"/images/binger.png"}
            id={"binger"}
            section={"Binger"}
            href={"https://dustin-lamarr.github.io/binger/"}
          />
         
      </Container>
    </>
  );
}
