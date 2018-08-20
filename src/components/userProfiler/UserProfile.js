import React, { Component } from 'react';

const UserProfile = (props) => (
  // This component contains the user's profile image, username and location
  <div style={style.profilerBox}>
    <div style={style.img__wrap}>
      <p>This is a paragraph</p>
    </div>
    <footer>
      {props.username && <p>{props.username}</p>}
    </footer>
  </div>
)

export default UserProfile

const style = {
  profilerBox: {
    maxHeight: '10rem',
    background: 'linearGradient(260deg, #191A42, #fcfcfc)'
  },
  img__wrap: {
    width: '100%'
  }
}
