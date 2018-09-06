import React, { Component } from "react";
import ActivityPane from "./ActivityPane";
import Interactive from "./Interactive";
import '../styles/Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        {/* Activity Panel */}
        <ActivityPane />
        <Interactive />
      </div>
    );
  }
}