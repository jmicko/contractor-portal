import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './ContactCards.css';
import paper from '../../img/form-icon.svg';
import stars from '../../img/stars.svg';
import history from '../../img/history.svg';

import Card from '../Card/Card';

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
        <Card
          nav="workrequest"
          navText="Request Work"
          classes="gc1"
          icon={paper}
          iconText='request form'
          />
        <Card
          nav="feedback"
          navText="Send Feedback"
          classes="gc2"
          icon={stars}
          iconText='5 stars'
          />
        <Card
          nav="history"
          navText="View History"
          classes="gc3"
          icon={history}
          iconText='request form'
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(ContactCards));
