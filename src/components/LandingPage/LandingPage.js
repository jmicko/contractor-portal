import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import FeedbackItem from '../FeedbackItem/FeedbackItem'

class LandingPage extends Component {
  state = {
    heading: 'Welcome',
  };

  componentDidMount() {
    const action = { type: 'FETCH_FEEDBACK' };
    this.props.dispatch(action);
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="description">
          <p>
            Lumber ipsum dolor sit down in this handmade chair, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra
            lacus ut ex molestie blandit. Etiam et turpis sit amet risus
            mollis interdum. Suspendisse et justo vitae metus bibendum
            fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
            vitae consequat odio elementum eget. Praesent efficitur eros vitae
            nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac
            dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum
            fringilla nibh a luctus. Duis a sapien metus.
            </p>
          {this.props.store.user.id != null
            ?
            <div className="greeting">
              <h2>Welcome Back!</h2>
            </div>
            :
            <div className="greeting">
              <RegisterForm />
              <center>
                <h4>Already a Member?</h4>
                <button className="btn btn_sizeSm" onClick={this.onLogin}>
                  Login
                </button>
              </center>
            </div>
          }
          <div className="home-feedback">
            {/* loop through the returned feedback items here and display on dom */}
            {this.props.store.feedback.map((feedbackItem) => {
              return (
                <div>
                  <FeedbackItem
                    key={FeedbackItem.id}
                    parent='LandingPage'
                    feedbackItem={feedbackItem}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
