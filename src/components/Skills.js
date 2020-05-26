import React, { Component } from "react";
import { HomeContainer } from "./Css";
import Experience from "./Experience";

class Skills extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          <div className="home">
            <i class="fas fa-ellipsis-h blackiconcolor scroll"></i>

            <div className="section skillScroll">
              <h2 style={{ margin: "3% 0% 0% 0%" }}>Technical Skills</h2>
              <i class="far fa-arrow-alt-circle-down skill-icon"></i>
              <ul>
                <li>
                  HTML5
                  <div className="html5">80%</div>
                </li>

                <progress className="skill" value="80" max="100"></progress>
                <li>
                  CSS3
                  <div className="css3">75%</div>
                </li>
                <progress className="skill" value="75" max="100"></progress>
                <li>
                  JavaScript<div className="javascript">70%</div>
                </li>
                <progress className="skill" value="70" max="100"></progress>
                <li>
                  React<div className="react">65%</div>
                </li>
                <progress className="skill" value="65" max="100"></progress>
                <li>
                  Adobe Photoshop<div className="adobe">75%</div>
                </li>

                <progress className="skill" value="75" max="100"></progress>
              </ul>
            </div>
          </div>
        </HomeContainer>
      </>
    );
  }
}

export default Skills;
