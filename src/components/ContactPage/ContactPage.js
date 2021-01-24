import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import ContactCards from '../ContactCards/ContactCards';
import './ContactPage.css';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Contact extends Component {
  state = {
    heading: 'Contact',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.location.state.thanks)} */}
        <div>
          <center>
            <h2>{this.state.heading}</h2>
            {this.props.location.state
              ?<div className="thanks">
              <p>Thank you!
                <br/>Your feedback is appreciated!</p>
              </div>
              :<></>}
          </center>
        </div>
        <div>
          {this.props.store.user.id
            ? <ContactCards />
            : <div>
              <LoginForm />
              <center>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => { this.props.history.push('/registration'); }}>
                  Register
                </button>
              </center>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Contact);
