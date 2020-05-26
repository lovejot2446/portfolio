import React, { Component } from "react";
import { HomeContainer } from "./Css";

class Experience extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="home">
          <i class="fas fa-ellipsis-h blackiconcolor scroll"></i>

          <div className="section1">
            <h2 style={{ margin: "3% 0% 0% 0%" }}>Experience</h2>
            <i className="far fa-arrow-alt-circle-down skill-icon"></i>
            <div className="v2"></div>

            <i class="far fa-bookmark"></i>
            <h4>Front-End Developer</h4>
            <i class="far fa-calendar-alt calendar">
              <p>Jan 2019 - Dec 2019 </p>
            </i>
            <ul>
              <li>
                Write coding using HTML, CSS, React, Bootstrap and JavaScript to
                make responsive design throughout the website.
              </li>
              <li>
                Keeping up a comprehension of the most recent Web applications
                and programming rehearses through training, study, and
                cooperation in meetings, workshops, and gatherings.
              </li>
              <li>
                Work with product managers, developers and artists to oversee
                the implementation of new features and systems.
              </li>
              <li>
                Analyse and understand complex problems, and generate
                appropriate technical solutions independently.
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.
              </li>
            </ul>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

export default Experience;
