import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Feedback extends Component {
  state = {
    heading: 'Feedback',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {/* todo - conditionally render components based on if user is admin or not */}
        {/* User is admin: {JSON.stringify(this.props.store.user.is_admin)} */}
        {this.props.store.user.is_admin
        ? <FeedbackReview />
        : <ClientFeedback />
        }
       
       
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Feedback);
