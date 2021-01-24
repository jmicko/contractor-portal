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
    feedbackText: "Send Feedback",
    workrequestText: "Request Work",
  };

  componentDidMount() {
    this.checkAdmin();
  }

  checkAdmin = () => {
    if (this.props.store.user.is_admin) {
      this.setState({
        feedbackText: "Review Feedback",
        workrequestText: "Review Work Requests",
      })
    }
  }

  render() {
    return (
      <div className="contact-card-container">
        {/* {JSON.stringify(this.props.store.user.is_admin)} */}
        <Card
          nav="workrequest"
          navText={this.state.workrequestText}
          classes="gc1"
          icon={paper}
          iconText='request form'
        />
        <Card
          nav="feedback"
          navText={this.state.feedbackText}
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
