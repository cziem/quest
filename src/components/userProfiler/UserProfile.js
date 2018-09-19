import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const UserProfile = (props) => (
  // This component contains the user's profile image, username and location
  <div className='profilerBox'>
    <div className='editIcon'>
      <FaPencilAlt />
    </div>
    <div className='img__wrap'>
      { props.details.photo ? (
        <img
          src=""
          className='userImage'
          alt="Profile description"
          />
        ) : (
        <img
          className='userImage'
          src={require("../../images/user-icon.png")}
          alt="default picutre provided by the app"
        />
      ) }
    </div>
    <footer className="info">
      { props.details ? <p>{ props.details.username }</p> : <p>quester</p> }
    </footer>
  </div>
);

export default UserProfile;