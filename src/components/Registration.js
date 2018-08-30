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
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Registration extends Component {
  state = {
    user: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
    errors: {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  };

  onFieldChange = e => {
    let { user } = this.state;

    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    user[fieldName] = fieldValue;

    this.setState(() => ({ user }));
  };

  handleValidation = () => {
    let isValid = true;
    let {errors} = this.state;
    let { name, username, email, password } = this.state.user;

    // if (name === '') {
    //   isValid = false;
    //   errors.name = "You cannot leave this empty";
    //   console.log(name)
    // }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/g)) {
        isValid = false;
        errors.name = "Your name cannot contain numbers";
      }
    }

    this.setState(() => ({ errors }));
    return isValid;
  };

  handleRegister = e => {
    e.preventDefault();

    this.handleValidation();

    console.log(this.state.user);

    // console.log(name);

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
  };
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
                placeholder="Name"
                onChange={this.onFieldChange}
              />
              <span className="error">{this.state.errors["name"]}</span>
              <div className="bar" />
            </div>
            <div className="login__container">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.onFieldChange}
              />
              <span className="error">{this.state.errors["username"]}</span>
              <div className="bar" />
            </div>
            <div className="login__container">
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={this.onFieldChange}
              />
              <span className="error">{this.state.errors["email"]}</span>
              <div className="bar" />
            </div>
            <div className="login__container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onFieldChange}
              />
              <span className="error">{this.state.errors["password"]}</span>
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
              <Link to="/login" className="btn register">
                Login
              </Link>
            </div>
          </footer>
          <h4 className="quest">Quest&copy;</h4>
        </div>
      </div>
    );
  }
}
