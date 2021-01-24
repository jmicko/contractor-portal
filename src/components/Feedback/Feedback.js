import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

class Feedback extends Component {
  state = {
    heading: 'Feedback',
  };

  render() {
    return (
      <div>
        {/* <h2>{this.state.heading}</h2> */}
        {this.props.store.user.is_admin
        ? <FeedbackReview />
        : <ClientFeedback />
        }
       
       
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Feedback);
