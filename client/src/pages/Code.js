import React from "react";
import Container from "../components/Container";
import TopNav from "../components/TopNav";
import InfoCard from "../components/InfoCard";
import { Portfolio, Voter, Bobby } from "../utils/projects"


export function Code() {

  return (
    <>
      <TopNav 
      page={"code"}
      />
      <Container>

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
          img={Voter.img}
          id={Voter.id}
          section={Voter.section}
          href={Voter.href}
          summary={Voter.summary}
          github={Voter.github}
          alt={Voter.alt}
          >
            {Voter.tech.map((tech, i) => {
              return (
                <li key={i}>{tech}</li>
              )
            })}
          </InfoCard>

             <InfoCard
          img={Portfolio.img}
          id={Portfolio.id}
          section={Portfolio.section}
          href={Portfolio.href}
          summary={Portfolio.summary}
          github={Portfolio.github}
          alt={Portfolio.alt}
          >
            {Portfolio.tech.map((tech, i) => {
              return (
                <li key={i}>{tech}</li>
              )
            })}
          </InfoCard>
          
          
         
      </Container>
    </>
  );
}
