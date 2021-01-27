import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './FeedbackItem.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class TemplateClass extends Component {
  state = {
    heading: 'Feedback Item Component',
  };

  // Call delete feedback saga, pass feedback id into it as payload
  deleteFeedback = () => {
    console.log('delete feedback button clicked! feedbackItem id is:', this.props.feedbackItem.id);
    const action = {
      type: 'DELETE_FEEDBACK',
      payload: this.props.feedbackItem.id
    };
    this.props.dispatch(action);
  }
  
  // Call feature feedback saga, pass feedback id into it as payload
  featureFeedback = () => {
    console.log('feature feedback button clicked! feedbackItem id is:', this.props.feedbackItem.id);
    const action = {
      type: 'UPDATE_FEEDBACK',
      payload: this.props.feedbackItem.id
    };
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="feedback-container">
        {/* show uploaded picture if available */}
        {/* todo - account for multiple pictures */}
        <div className="image-panel">
          <img src={this.props.feedbackItem.image_url} alt={'project'}></img>
        </div>
        <div className="text-panel">
          {/* display relevant info from feedback */}
          <p>Feedback ID: {this.props.feedbackItem.id}</p>
          <p><strong>Name:</strong> {this.props.feedbackItem.first_name + " " + this.props.feedbackItem.last_name}</p>
          <p><strong>Rating: </strong>{this.props.feedbackItem.rating}/5</p>
          <p><strong>Comments: </strong>{this.props.feedbackItem.comments}</p>
          {/* todo - display permission as a flag maybe? do not show feature button if permission is not granted */}
          {/* <p><strong>Allowed to share publicly: </strong>{String(this.props.feedbackItem.ok_to_share)}</p> */}
          {/* <p><strong>Public? </strong>{String(this.props.feedbackItem.is_public)}</p> */}
        </div>
        {/* check parent component, only show buttons if on feedback review page */}
        {this.props.parent === 'FeedbackReview'
          ? 
          <div className="button-panel">
            <button className="btn btn-feedback" onClick={this.featureFeedback}>
              {/* toggle button text if feedback is shown on home page or not */}
              {this.props.feedbackItem.is_public
              ? 'Remove from Home'
              : 'Feature on Home'
              }
              </button>
              {/* delete button triggers delete feedback saga */}
            <button className="btn btn-feedback" onClick={this.deleteFeedback}>Delete</button>
          </div>
          // show no buttons if not on the review page
              // todo - possibly allow users to delete feedback? only show delete button for them
          :
          <></>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplateClass);
