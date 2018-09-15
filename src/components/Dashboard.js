import React, { Component } from "react";
import ActivityPane from "./ActivityPane";
import Interactive from "./Interactive";
import '../styles/Dashboard.css';

export default class Dashboard extends Component {
  state = {
    create: false,
    my_circle: false,
    published: false,
    recent_quotes: false,
    metrics: false,
    search_users: false
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
        <ActivityPane realState={this.state} toggleStaate={this.toggleState} />
        <Interactive />
      </div>
    );
  }
}
