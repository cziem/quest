import React, { Component } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaChevronRight
} from "react-icons/fa";
import "../styles/Login.css";

export default class Login extends Component {
  state = {
    error: undefined
  };

  handleLogin = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container__main">
        <h2 className="title">Login</h2>
        <form onSubmit={this.handleLogin} className="login">
          <div className="login__container">
            <input
              type="text"
              name="username"
              required="required"
              placeholder="Username"
            />
            {/*<label for="username" className="login__details">
              Username
    </label>*/}
            <div className="bar" />
          </div>
          <div className="login__container">
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
            />
            {/*<label for="password" className="login__details">
              Password
  </label>*/}
            <div className="bar" />
          </div>
          <label for="checkbox" className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <div className="login__container button">
            <button className="login-button btn">
              Let me in <FaChevronRight className="arrow-right"/>
            </button>
          </div>
          <footer className="login__container">
            <p>or login with</p>
            <div className="socials">
              <FaFacebook />
              <FaGithub />
              <FaGoogle />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitterSquare />
            </div>
            <div className="extras">
              <p>Forgot your password?</p>
              <button className="btn register">Register</button>
            </div>
          </footer>
        </form>
      </div>
    );
  }
}
