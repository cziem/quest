import React, { Component } from "react";
import ActivityPane from "./ActivityPane";

export default class Dashboard extends Component {
  render() {
    return (
      <div style={style.dashboard}>
        {/* Activity Panel */}
        <ActivityPane />
      </div>
    );
  }
}

const style = {
  dashboard: {
    marginTop: '-1.2rem', // FIXME
    height: '100vh',
    width: '100%'
  }
}
