import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ContactCards.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ContactCards extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div className="contact-card-container">
        <div className="contact-card request">
          <button
            type="button"
            className="btn-contact-card"
            onClick={() => {
              this.props.history.push('/workrequest');
            }}>
            Request Work
        </button>
        </div>
        <div className="contact-card feedback">
          <button
            type="button"
            className="btn-contact-card"
            onClick={() => {
              this.props.history.push('/feedback');
            }}>
            Send Feedback
      </button>
        </div>
        <div className="contact-card history">
          <button
            type="button"
            className="btn-contact-card"
            onClick={() => {
              this.props.history.push('/history');
            }}
          >
            View History
      </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ContactCards);
