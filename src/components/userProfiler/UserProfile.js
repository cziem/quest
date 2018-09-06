import React, { Component } from "react";
import { FaPencilAlt } from "react-icons/fa";

const UserProfile = props => (
  // This component contains the user's profile image, username and location
  <div className='profilerBox'>
    <div className='editIcon'>
      <FaPencilAlt />
    </div>
    <div className='img__wrap'>
      {props.profileImage ? (
        <img
          src=""
          alt="{props.username}'s profile image"
          className='userImage'
          />
        ) : (
        <img
          className='userImage'
          src={require("../../images/user-icon.png")} alt="Default User Image"
        />
      ) }
    </div>
    <footer className="info">
      {props.username ? <p>{props.username}</p> : <p>quester</p>}
    </footer>
  </div>
);

export default UserProfile;