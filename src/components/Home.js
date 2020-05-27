import React, { Component } from "react";
import styled from "styled-components";
import programming from "../programming.png";

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <div className="container">
          <div className="container1">
            <div className="name">Lovejot</div>
            <div className="name1">Singh</div>
            <div className="title">Web Developer, Programmer & Designer</div>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/lovejot.singh.501">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://github.com/lovejot2446/">
              <i class="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </AboutContainer>
    );
  }
}

export default About;

const AboutContainer = styled.div`
  .container {
    font-family: "Montserrat", sans-serif;
    background-image: url("../programming.png");
    font: white;
    width: 100vw;
    height: 100vh;
    display: relative;
    position: fixed;
  }
  .container1 {
    font-family: "Montserrat", sans-serif;
    background-color: rgba(0, 0, 0, 0.8);
    font: white;
    width: 100vw;
    height: 100vh;
    display: absolute;
    z-index: 1;
    position: fixed;
  }
  .name {
    display: absolute;
    color: white;
    padding: 190px 0px 0px 30px;
    font-size: 70px;
  }
  .name1 {
    display: absolute;
    color: yellow;
    padding: 0px 0px 25px 75px;
    font-size: 65px;
    animation: rotate 3s infinite alternate;
  }

  @keyframes rotate {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(360deg);
    }
  }

  .title {
    display: absolute;
    color: white;
    padding: 0px 0px 25px 25px;
    font-size: 20px;
  }
  .fa-linkedin {
    display: absolute;
    color: white;
    padding: 0px 0px 25px 105px;
    font-size: 30px;
  }

  .fa-github-square:hover {
    color: yellow;
  }

  .fa-linkedin:hover {
    color: yellow;
  }
  .fa-facebook-square {
    display: absolute;
    color: white;
    padding: 0px 0px 25px 25px;
    font-size: 30px;
  }
  .fa-github-square {
    display: absolute;
    color: white;
    padding: 0px 0px 25px 20px;
    font-size: 30px;
  }
  .fa-facebook-square:hover {
    color: yellow;
  }

  @media screen and (min-width: 550px) {
    .name {
      padding: 190px 0px 25px 25px;
      display: inline;
    }
    .name1 {
      padding: 0px 0px 25px 25px;
      display: inline;
      animation: rotate 3s infinite alternate;
    }

    @keyframes rotate {
      from {
        transform: rotateX(0deg);
      }
      to {
        transform: rotateX(360deg);
      }
    }

    .container1 {
      padding-top: 220px;
    }
    .fa-linkedin {
      padding: 0px 0px 25px 30px;
    }
    .fa-facebook-square {
      padding: 0px 0px 25px 15px;
    }
  }
`;
