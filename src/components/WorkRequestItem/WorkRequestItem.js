import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './WorkRequestItem.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class WorkRequestItem extends Component {
  state = {
    heading: 'Work Request Item Component',
  };

  // Call delete feedback saga, pass feedback id into it as payload
  deleteWorkRequest = () => {
    console.log('delete feedback button clicked! workRequestItem id is:', this.props.workRequestItem.id);
    const action = {
      type: 'DELETE_WORK_REQUEST',
      payload: this.props.workRequestItem.id
    };
    this.props.dispatch(action);
  }
  

  render() {
    return (
      <div className="feedback-container">
        {/* show uploaded picture if available */}
        {/* todo - account for multiple pictures */}
        <div className="image-panel">
          <img src={this.props.workRequestItem.image_url} alt={'user submission of project'}></img>
        </div>
        <div className="text-panel">
          {/* display relevant info from feedback */}
          <p>Work Request ID: {this.props.workRequestItem.id}</p>
          <p><strong>Project Name:</strong> {this.props.workRequestItem.project_name}</p>
          <p><strong>Name:</strong> {this.props.workRequestItem.first_name + " " + this.props.workRequestItem.last_name}</p>
          <p><strong>Client Phone:</strong> {this.props.workRequestItem.phone}</p>
          <p><strong>Client Email:</strong> {this.props.workRequestItem.email}</p>
          <p><strong>Description of Work:</strong> {this.props.workRequestItem.description}</p>
          <p><strong>Location:</strong> {this.props.workRequestItem.location}</p>
          <p><strong>Dimensions:</strong> {this.props.workRequestItem.dimensions}</p>
          <p><strong>Best Time to Call:</strong> {this.props.workRequestItem.best_time_to_call}</p>
          <p><strong>Weekends Okay?</strong> {this.props.workRequestItem.weekends_ok ? 'Yes' : 'No'}</p>
          <p><strong>Type of Work:</strong> {this.props.workRequestItem.text}</p>
        </div>
        {/* check parent component, only show buttons if on feedback review page */}
        {/* {this.props.parent === 'FeedbackReview' */}
          {/* ?  */}
          {/* <div className="button-panel"> */}
            {/* <button className="btn btn-feedback" onClick={this.featureFeedback}> */}
              {/* toggle button text if feedback is shown on home page or not */}
              {/* {this.props.workRequestItem.is_public
              ? 'Remove from Home'
              : 'Feature on Home'
              } */}
              {/* </button> */}
              {/* delete button triggers delete feedback saga */}
            {/* <button className="btn btn-feedback" onClick={this.deleteWorkRequest}>Delete</button> */}
          {/* </div> */}
          {/* // show no buttons if not on the review page */}
              {/* // todo - possibly allow users to delete feedback? only show delete button for them */}
          {/* : */}
          {/* <></> */}
        {/* } */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(WorkRequestItem);
