import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  handleChange = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <>
        <Container>
          <div className="home">
            <div className="navbar">
              <i
                className="fas fa-align-justify"
                onMouseOver={this.handleChange}
              ></i>
              <ul
                className={
                  this.state.isOpen ? "nav-links show-nav" : "nav-links"
                }
                onClick={this.handleChange}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>

                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default NavBar;

const Container = styled.div`
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 1s linear;
    list-style-type: none;
    text-decoration: none;
  }

  .navbar {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);

    color: white;
    width: 100vw;
    z-index: 2;
    margin: 20px 0px 0px 0px;
    overflow: hidden;
    position: fixed;
  }
  .nav-links a {
    display: block;
    text-decoration: none;
    padding: 0.3rem 0;

    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  }
  .nav-links a:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .show-nav {
    height: 180px;
  }
  .fa-align-justify {
    font-size: 27px;
    margin: 20px 10px -10px 10px;
    position: flex;
    
  }
`;
