import React, { Component } from 'react';
import UserProfile from './userProfiler/UserProfile';
import Axios from 'axios';

export default class ActivityPane extends Component {
  state = {
    profileDetails: {
      name: '',
      photo: '',
      password: '',
      username: '',
      email: ''
    }
  }

  componentWillMount = () => {
    Axios({
      method: 'GET',
      url: 'http://localhost:3001/server'
    })
      .then(res => console.dir(res.data))
      .catch(err => console.log('could not GET the data', err))
  }

  render () {
    return (
      <div className='paneWrapper'>
        {/* user profile */}
        <UserProfile />
      </div>
    )
  }
}