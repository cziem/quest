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
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    error: undefined
  };

  handleLogin = e => {
    e.preventDefault();
    this.resetField(e)
  };

  resetField = e => {
    e.target.reset()
  }

  render() {
    return (
      <div className="body">
        <div className="container__main">
          <h2 className="title">Login</h2>
          <form
            onSubmit={this.handleLogin}
            className="login"
            id="login"
          >
            <div className="login__container">
              <input
                type="text"
                name="username"
                placeholder="Username"
              />
              <div className="bar" />
            </div>
            <div className="login__container">
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="bar" />
            </div>
            <label htmlFor="checkbox" className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <div className="login__container button">
              <button className="login-button btn">
                Let me in <FaChevronRight className="arrow-right"/>
              </button>
            </div>
            </form>
            <footer className="login__container-footer">
              <div className="socials">
                <p>or login with</p>
                <div className="iconholder">
                  <FaFacebook className="social-icons"/>
                  <FaGithub className="social-icons"/>
                  <FaGoogle className="social-icons"/>
                  <FaInstagram className="social-icons"/>
                  <FaLinkedin className="social-icons"/>
                  <FaTwitterSquare className="social-icons"/>
                </div>
              </div>
              <div className="extras">
                <p>
                  <a>Forgot your password?</a>
                </p>
                <Link to="/registration" className="btn register">Register</Link>
              </div>
            </footer>
          <h4 className="quest">Quest&copy;</h4>
        </div>
      </div>
    );
  }
}
