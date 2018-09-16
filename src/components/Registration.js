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
    let { errors } = this.state;

    // the error state needs to be empty for each call to this method.
    errors.name = ''
    errors.username = ''
    errors.email = ''
    errors.password = ''

    let { name, username, email, password } = this.state.user;
    const errMsg = "You cannot leave this empty";
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (name === "") {
      isValid = false;
      errors.name = errMsg;
    } else if (!name.match(/[a-zA-Z_ ]+$/g)) {
      isValid = false;
      errors.name = "Your name cannot contain numbers";
    }

    // Validating the username
    if (!username) {
      isValid = false;
      errors.username = errMsg;
    } else if (!username.match(/[a-zA-Z0-9]{4,10}/g)) {
      isValid = false;
      errors.username = "Should not be less than 4 or more than 10 characters";
    }

    // // Validating the email
    if (!email) {
      isValid = false;
      errors.email = errMsg;
    } else if (!email.match(emailRegex)) {
      isValid = false;
      errors.email = "Invalid email format";
    }

    // // Validating password
    if (!password) {
      isValid = false;
      errors.password = errMsg;
    } else if (!password.match(passwordRegex)) {
      isValid = false;
      errors.password =
        "must include atleat 1 (Upper & lowercase, number and special charater) not less 8 characters";
    }

    this.setState(() => ({ errors }));
    return isValid;
  };

  resetFields = (e) => {
    e.target.reset()
  };

  handleRegister = e => {
    e.preventDefault();

    // Send data off to database
    if (this.handleValidation()) {
      const body = this.state.user;

      Axios({
        method: 'post',
        url: 'http://localhost:3001/registration',
        data: body
      })
        .then(res => {
          // Send user to athu page. But first send to dashboard for development purposes
          // window.location.href = `http://localhost:3000/dashboard:${res._id}`;
          window.location.href = `http://localhost:3000/dashboard`;
          console.log(res)
        })
        .catch(err => console.log('An error occurred...', err));

      // Clear the form fields
      this.resetFields(e)
      // Empty State
      this.setState(() => ({
        user: {
          name: "",
          username: "",
          email: "",
          password: ""
        }
      }))
    } else {
      return
    }

  };
  render() {
    return (
      <div className="body">
        <div className="container__main">
          <h2 className="title">Registration</h2>
          <form onSubmit={this.handleRegister} id="regForm">
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
