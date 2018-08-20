import React, { Component } from 'react';
import UserProfile from './userProfiler/UserProfile';

export default class ActivityPane extends Component {
  render () {
    return (
      <div style={style.paneWrapper}>
        <h3>The Activity Panel</h3>

        {/* user profile */}
        <UserProfile />
      </div>
    )
  }
}

const style = {
  paneWrapper: {
    background: '#100F1D',
    color: '#ececec',
    height: '100vh',
    maxWidth: '20rem'
  }
}
