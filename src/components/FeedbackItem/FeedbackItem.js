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

  deleteFeedback = () => {
    console.log('delete feedback button clicked! feedbackItem id is:', this.props.feedbackItem.id);
    const action = {
      type: 'DELETE_FEEDBACK',
      payload: this.props.feedbackItem.id
    };
    this.props.dispatch(action);
  }

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
        <div className="image-panel">
        <img src={this.props.feedbackItem.image_url} alt={'project'}></img>
        </div>
        <div className="text-panel">
          <p>Feedback ID: {this.props.feedbackItem.id}</p>
        <p>{this.props.feedbackItem.first_name + " " + this.props.feedbackItem.last_name}</p>
        <p><strong>Rating: </strong>{this.props.feedbackItem.rating}/5</p>
        <p><strong>Comments: </strong>{this.props.feedbackItem.comments}</p>
        {/* <p><strong>Allowed to share publicly: </strong>{String(this.props.feedbackItem.ok_to_share)}</p> */}
        {/* <p><strong>Public? </strong>{String(this.props.feedbackItem.is_public)}</p> */}
        </div>
        <div className="button-panel">
        <button className="btn btn-feedback"  onClick={this.featureFeedback}>Feature</button>
        <button className="btn btn-feedback"  onClick={this.deleteFeedback}>Delete</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplateClass);
