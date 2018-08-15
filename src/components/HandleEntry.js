import React, { Component } from 'react';
import '../styles/HandleEntry.css';
import Login from './Login';
import Registration from './Registration';

export default class HandleEntry extends Component {
  render() {
    return (
      <div className="">
        <Login />
      </div>
    )
  }
}