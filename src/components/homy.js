import React, { Component } from "react";
import Background from "./Background";
import lovejot from "../lovejot.JPG";
import Skills from "./Skills";
import { HomeContainer } from "./Css";
import Experience from "./Experience";

class Home extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          <div className="home">
            <h2>ABOUT</h2>
            <div className="top ">
              <img src={lovejot} className="image" />

              <h3>Lovejot Singh</h3>
              <h5>
                <i class="fas fa-home"></i>22 Meadow Glade Road
              </h5>
              <div className="about">
                I am a designer who codes. Currently enrolled in a course of
                Computer Programmer at Lambton College.I care deeply about
                creating world-class, useful, and beautiful products that help
                people and make a difference. I can be as involved in your
                project as you need me to be; from the seed of the idea, to
                sketches, creative direction, design, copywriting, system
                design, and even the front-end and WordPress build.
              </div>
            </div>
          </div>
          <Skills />

          <Experience />
        </HomeContainer>
      </>
    );
  }
}

export default Home;
