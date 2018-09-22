import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserProfile from './userProfiler/UserProfile';
import ListItems from './sideBarLists/ListItems';
import Button from './Button';

const ActivityPane = props => (
  <div className='paneWrapper'>
    {/* user profile */}
    <UserProfile details={ props.details } />
    <ListItems
      realState={ props.realState }
      toggle={ props.toggleState }
    />
    <div className='account_activities'>
      <button
        className="btn-account"
        // onClick={handleAccount}
      >
        Account
      </button>
      <button
        className="btn-account"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </div>
)

const handleLogout = () => {
  // localStorage.removeItem('token')
  localStorage.clear()
  return window.location.href = `http://localhost:3000/login`
}

export default ActivityPane
