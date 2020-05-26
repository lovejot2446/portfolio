import React, { Component } from "react";
import { HomeContainer } from "./Css";

import Home from "./Home";
import Projects from "./Projects";
class Background extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          <Home />
        </HomeContainer>
      </>
    );
  }
}

export default Background;
