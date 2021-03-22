import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import TopNav from "../components/TopNav";
import InfoCard from "../components/InfoCard";
import { Voter, Bobby, Binger } from "../utils/projects"


export function Code() {

  return (
    <>
      <TopNav />
      <Container>
       
          <InfoCard
          img={Voter.img}
          id={Voter.id}
          section={Voter.section}
          href={Voter.href}
          summary={Voter.summary}
          github={Voter.github}
          >
            {Voter.tech.map((tech, i) => {
              return (
                <li key={i}>{tech}</li>
              )
            })}
          </InfoCard>

          <InfoCard
          img={Bobby.img}
          id={Bobby.id}
          section={Bobby.section}
          href={Bobby.href}
          summary={Bobby.summary}
          github={Bobby.github}
             >
               {Bobby.tech.map((tech, i) => {
              return (
                <li key={i}>{tech}</li>
              )
            })}
             </InfoCard>
          <InfoCard
            img={Binger.img}
            id={Binger.id}
            section={Binger.section}
            href={Binger.href}
            summary={Binger.summary}
            github={Binger.github}
          >
              {Binger.tech.map((tech, i) => {
              return (
                <li key={i}>{tech}</li>
              )
            })}
          </InfoCard>
         
      </Container>
    </>
  );
}
