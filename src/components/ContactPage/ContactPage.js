import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegisterForm from '../RegisterForm/RegisterForm';
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
        {/* {JSON.stringify(this.props.store.user)} */}
        <div>
          <h2>{this.state.heading}</h2>
        </div>
        <div>
          {this.props.store.user.id
            ?<ContactCards />
            :<div>
              <RegisterForm />
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Contact);
