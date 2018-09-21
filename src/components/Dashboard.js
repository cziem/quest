import React, { Component } from "react";
import Axios from 'axios';
import ActivityPane from "./ActivityPane";
import Interactive from "./Interactive";
import '../styles/Dashboard.css';

export default class Dashboard extends Component {
  state = {
    profileDetails: {
      name: '',
      photo: '',
      password: '',
      username: '',
      email: ''
    },
    create: false,
    my_circle: false,
    published: false,
    recent_quotes: false,
    metrics: false,
    search_users: false
  }

  componentWillMount = () => {
    const token = localStorage.getItem('token')

    // get user details and update required fields
    Axios({
      method: 'GET',
      url: 'http://localhost:3001/users/me',
      headers: {
        "x-auth-token": token
      }
    })
      .then(res => {
        if (res.status === 200) {
          const name = res.data.name
          const username = res.data.username
          const email = res.data.email

          this.setState(() => ({
            profileDetails: {
              name,
              username,
              email
            }
          }))
        }
      })
      .catch(err => console.log('could not GET the data', err))
  }

  toggleState = () => this.setState((prev) => ({
    create: !prev.create,
    my_circle: !prev.my_circle,
    published: !prev.published,
    recent_quotes: !prev.recent_quotes,
    metrics: !prev.metrics,
    search_users: !prev.search_users
  }))

  render() {
    return (
      <div className='dashboard'>
        {/* Activity Panel */}
        <ActivityPane
          realState={this.state}
          toggleStaate={this.toggleState}
          details={this.state.profileDetails}
        />
        <Interactive
          name={this.state.profileDetails}
        />
      </div>
    );
  }
}
