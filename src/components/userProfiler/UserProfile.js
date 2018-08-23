import React, { Component } from 'react';
import { FaPencilAlt, FaUser } from 'react-icons/fa';

const UserProfile = (props) => (
  // This component contains the user's profile image, username and location
  <div style={style.profilerBox}>
    <div style={style.editIcon}>
      <FaPencilAlt />
    </div>
    <div style={style.img__wrap}>
      {
        props.profileImage ? (<img src="" alt="{props.username}'s profile image" style={style.userImage} />) :
        (<FaUser style={style.defaultImage}/>)
      }
    </div>
    <footer>
      {props.username ? (<p>{props.username}</p>) : (<p>quester</p>)}
    </footer>
  </div>
)

export default UserProfile

const style = {
  profilerBox: {
    background: 'linearGradient(260deg, #191A42, #fcfcfc)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '10rem'
  },
  img__wrap: {
    height: '100%',
    width: '100%'
  },
  userImage: {
    width: '100%'
  },
  defaultImage: {
    maxWidth: '100%',
    fontSize: '5rem',
    textAlign: 'center'
  },
  editIcon: {
    textAlign: 'center'
  }
}
