import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FeedbackReview extends Component {
  state = {
    heading: 'Review Feedback',
  };

  // todo - GET feedback items from DB
  componentDidMount() {
    const action = {type: 'FETCH_FEEDBACK'};
    this.props.dispatch(action);
}
  // map over returned data 
  // create component for each item

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FeedbackReview);
