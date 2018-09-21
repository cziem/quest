/* 
* MVP-0 :: validate login for just 'username' and 'password' 
* Extract the server returned ID
*/

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
import Axios from "axios";

export default class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {
      username: '',
      password: ''
    }
  };

  handleLogin = e => {
    e.preventDefault();

    if (this.handleValidation()) {
      const body = this.state.user;

      Axios({
        // Let's try GET for now in DEV mode
        method: 'POST',
        url: 'http://localhost:3001/auth',
        data: body
      })
        .then(res => {
          if (res.request.status === 200) {
            const username = res.data.username
            const token = res.data.token
            
            localStorage.setItem('token', token)
            // This should not be the standard
            window.location.href = `http://localhost:3000/dashboard/${username}`
            // history.push(`/dashboard/${id}`)
          }
        })
        .catch(err => console.log('An error occurred.', err));
      
      this.resetField(e)
      this.setState(() => ({
        user: {
          username: '',
          password: ''
        }
      }))
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

    // just check if fields are empty. Backend validation will check for MATCH
    errors.username = ''
    errors.password = ''

    let { username, password } = this.state.user;
    const errMsg = "You cannot leave this empty";

    // Validating the username
    if (!username) {
      isValid = false;
      errors.username = errMsg;
    }

    // Validating password
    if (!password) {
      isValid = false;
      errors.password = errMsg;
    }

    this.setState(() => ({ errors }));
    return isValid;
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
                onChange={this.onFieldChange}
                autoFocus={true}
              />
              <span className="error">
                {this.state.errors["username"]}
              </span>
              <div className="bar" />
            </div>
            <div className="login__container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onFieldChange}
              />
              <span className="error">
                {this.state.errors["password"]}
              </span>
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
