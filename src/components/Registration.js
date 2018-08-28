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
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Registration extends Component {
  handleRegister = (e) => {
    e.preventDefault()

    console.log(name)

    // put validation of the input elements here and the send off to the backend

    // Axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/registration',
    //   data: {
    //     name,
    //     username,
    //     email,
    //     password
    //   },
    // }).then(res => {
    //   console.log(res)
    // })
  }
  render() {
    return (
      <div className="body">
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
            </form>
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
              <div className="extras">
                <p>Already registerd?</p>
                <Link to="/login" className="btn register">Login</Link>
              </div>
            </footer>
          <h4 className="quest">Quest&copy;</h4>
        </div>
      </div>
    )
  }
}