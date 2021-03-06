import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FeedbackItem from '../FeedbackItem/FeedbackItem'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class FeedbackReview extends Component {
  state = {
    heading: 'Review Feedback',
  };

  componentDidMount() {
    const action = { type: 'FETCH_FEEDBACK' };
    this.props.dispatch(action);
  }




  render() {
    return (
      <div>
        <center>
          <h2>{this.state.heading}</h2>
        </center>
        {/* {JSON.stringify(this.props.store.feedback)} */}
        {this.props.store.feedback.map((feedbackItem) => {
          return (
            <div>
              <FeedbackItem
                key={FeedbackItem.id}
                parent='FeedbackReview'
                feedbackItem={feedbackItem}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FeedbackReview);
