import React, { Component } from 'react';
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
      <Button cName="btn-account" name="Account"/>
      <Button cName="btn-account" name="Logout" />
    </div>
  </div>
)

export default ActivityPane
