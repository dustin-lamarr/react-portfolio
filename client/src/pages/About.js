import React from "react";
import Container from "../components/Container"
import TopNav from "../components/TopNav"


export function About(){

    const styles = {
        about: {
          color: "white",
        }
      }

    return (
        <>
          <TopNav />
          <Container>
            <div className="container-lg">
              <div className="row pt-5">
               <p className="fs-3" style={styles.about}>
I am Dustin. I like movies, basketball, soccer, gaming, traveling, fancy cocktails, and New Wave. I was in the US Navy for six years. I have been to fifteen different countries.
               </p>
              </div>
            </div>
          </Container>
        </>
      );
}
