import React, { Component } from 'react';
import UserProfile from './userProfiler/UserProfile';

export default class ActivityPane extends Component {
  render () {
    return (
      <div className='paneWrapper'>
        {/* user profile */}
        <UserProfile />
      </div>
    )
  }
}