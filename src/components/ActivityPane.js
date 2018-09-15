import React, { Component } from 'react';
import UserProfile from './userProfiler/UserProfile';
import ListItems from './sideBarLists/ListItems';
import Axios from 'axios';
import Button from './Button';

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
      .then(res => console.dir(res))
      .catch(err => console.log('could not GET the data', err))
  }

  render() {
    return (
      <div className='paneWrapper'>
        {/* user profile */}
        <UserProfile />
        <ListItems
          realState={this.props.realState}
          toggle={this.props.toggleState}
        />
        <div className='account_activities'>
          <Button cName="btn-account" name="Account"/>
          <Button cName="btn-account" name="Logout" />
        </div>
      </div>
    )
  }
}
