import React, { Component } from "react";
import { HomeContainer } from "./Css";
import Resort from "../project1/resort.PNG";
import Ecommerce from "../project1/ecommerce.PNG";
import Todo from "../project1/todo.PNG";
import Project1 from "../project1/project1.PNG";
import fashion from "../project1/fashion.PNG";
import design from "../project1/project3.PNG";

class Projects extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          <div className="projects">
            <h1 className="file">
              Projects <i class="fas fa-file-alt"></i>
            </h1>
            <p>Check out some of my projects...</p>
            <div className="project">
              <div className="mainProject">
                <a href="https://new-resort.netlify.app/">
                  <div className="project1">
                    <img src={Resort} className="resort" />
                  </div>
                </a>
                <a href="https://new-resort.netlify.app/">
                  <div className="box">
                    <i class="fas fa-eye">Resort Project</i>
                  </div>
                </a>
              </div>
              <div className="mainProject">
                <a href="https://new-phone-store.netlify.app/">
                  <div className="project1">
                    <img src={Ecommerce} className="resort" />
                  </div>
                </a>
                <a href="https://new-phone-store.netlify.app/">
                  <div className="box">
                    <i class="fas fa-eye"> Phone Store</i>
                  </div>
                </a>
              </div>
              <div className="mainProject">
                <a href="https://your-todo.netlify.app/">
                  <div className="project1">
                    <img src={Todo} className="resort" />
                  </div>
                </a>
                <a href="https://your-todo.netlify.app/">
                  <div className="box">
                    <i class="fas fa-eye"> Todo App</i>
                  </div>
                </a>
              </div>
              <div className="mainProject">
                <a href="https://indianarmedforces.000webhostapp.com/">
                  <div className="project1">
                    <img src={Project1} className="resort" />
                  </div>
                </a>
                <a href="https://indianarmedforces.000webhostapp.com/">
                  <div className="box">
                    <i class="fas fa-eye"> HTML Website</i>
                  </div>
                </a>
              </div>
              <div className="mainProject">
                <a href="https://fashionbackber.000webhostapp.com/">
                  <div className="project1">
                    <img src={fashion} className="resort" />
                  </div>
                </a>
                <a href="https://fashionbackber.000webhostapp.com/">
                  <div className="box">
                    <i class="fas fa-eye"> Fashion Website</i>
                  </div>
                </a>
              </div>
              <div className="mainProject">
                <a href={design}>
                  <div className="project1">
                    <img src={design} className="resort" />
                  </div>
                </a>
                <a href={design}>
                  <div className="box">
                    <i class="fas fa-eye"> Website Design</i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </HomeContainer>
      </>
    );
  }
}

export default Projects;
