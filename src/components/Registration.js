import React, { Component } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaChevronRight
} from "react-icons/fa";

export default class Registration extends Component {
  handleRegister = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div className="container__main">
        <h2 className="title">Registration</h2>
        <form onSubmit={this.handleRegister}>
          <div className="login__container">
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Name"
            />
            <div className="bar" />
          </div>
          <div className="login__container">
            <input
              type="text"
              name="username"
              required="required"
              placeholder="Username"
            />
            <div className="bar" />
          </div>
          <div className="login__container">
            <input
              type="email"
              name="email"
              required="required"
              placeholder="email"
            />
            <div className="bar" />
          </div>
          <div className="login__container">
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
            />
            <div className="bar" />
          </div>
          <div className="login__container button">
            <button className="login-button btn">
              Register me <FaChevronRight className="arrow-right" />
            </button>
          </div>
          <footer className="login__container-footer">
            <div className="socials">
              <p>or register with</p>
              <div className="iconholder">
                <FaFacebook className="social-icons" />
                <FaGithub className="social-icons" />
                <FaGoogle className="social-icons" />
                <FaInstagram className="social-icons" />
                <FaLinkedin className="social-icons" />
                <FaTwitterSquare className="social-icons" />
              </div>
            </div>
          </footer>
        </form>
        <h4 className="quest">Quest&copy;</h4>
      </div>
    )
  }
}