import React, { Component } from "react";
import { HomeContainer } from "./Css";
class Contact extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="contactBackground">
          <h1>Contact</h1>
          <i
            className="far fa-arrow-alt-circle-down skill-icon"
            style={{ margin: "0px 0px -30px 0px" }}
          ></i>
          <div className="section2">
            <div className="contact">
              <i class="fas fa-map-marker-alt"></i>
              <h4>22 Meadow Glade Road,Brampton,Ontario</h4>
              <p>Address</p>
            </div>
            <div className="contact">
              <i className="far fa-paper-plane"></i>
              <h4>lovejot2446@gmail.com</h4>
              <p>Email</p>
            </div>
            <div className="contact">
              <i className="fas fa-phone"></i>
              <h4>437-227-7223</h4>
              <p>Phone</p>
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

export default Contact;
