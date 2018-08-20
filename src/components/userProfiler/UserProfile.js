import React, { Component } from 'react';

const UserProfile = (props) => (
  // This component contains the user's profile image, username and location
  <div className={style.profilerBox}>
    <div className={style.img__wrap}>

    </div>
    <footer>
      {props.username && <p>{props.username}</p>}
    </footer>
  </div>
)

export default UserProfile
