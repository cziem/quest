import React, { Component } from "react";

export default class ListItems extends Component {
  handleClick = (e) => {
    let key = e.target.id
  }
  render() {
    return (
      <div className="list_box">
        <ul>
          <li
            className="list_item"
            id="create"
            onClick={this.handleClick}
          >Create</li>
          <li className="list_item">My Circle</li>
          <li className="list_item">Published</li>
          <li className="list_item">Recent Quotes</li>
          <li className="list_item">Metrics</li>
          <li className="list_item">Search Users</li>
        </ul>
      </div>
    )
  }
}


