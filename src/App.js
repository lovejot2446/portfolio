import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Background from "./components/Background";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
