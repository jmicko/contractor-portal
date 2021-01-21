import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ClientFeedback.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Feedback extends Component {
  state = {
    heading: 'Client Feedback',
    first_name: '',
    last_name: '',
    rating: 0,
    image_url: '',
    comments: '',
    ok_to_share: true,
    is_public: true
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  sendFeedback = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.rating) {
      this.props.dispatch({
        type: 'SEND_FEEDBACK',
        payload: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          rating: this.state.rating,
          image_url: this.state.image_url,
          comments: this.state.comments,
          is_public: this.state.is_public,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        <h2>{this.state.heading}</h2>
        <p>look at this great feedback form</p>
        {/* Client Feedback form */}
        {/* todo - move into separate component */}
        {/* todo - create Admin feedback review component */}
        {/* todo - conditionally render client/admin components based on is_admin user property */}
        <form onSubmit={this.sendFeedback}>
          <h2>Send Feedback</h2>
          <div>
            <label htmlFor="first_name">
              First Name:
            <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                required
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="last_name">
              Last Name:
            <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                // required
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating">
              Rating:
              <br />
              <div className="radio-input">
                <div>
                  <input
                    type="radio"
                    name="rating"
                    value={1}
                    required
                    onChange={this.handleInputChangeFor('rating')}
                  />
                  <p>1</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    value={2}
                    required
                    onChange={this.handleInputChangeFor('rating')}
                  />
                  <p>2</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    value={3}
                    required
                    onChange={this.handleInputChangeFor('rating')}
                  />
                  <p>3</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    value={4}
                    required
                    onChange={this.handleInputChangeFor('rating')}
                  />
                  <p>4</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating"
                    value={5}
                    required
                    onChange={this.handleInputChangeFor('rating')}
                  />
                  <p>5</p>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="image_url">
              Image URL:
            <input
                type="text"
                name="image_url"
                value={this.state.image_url}
                // required
                onChange={this.handleInputChangeFor('image_url')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="comments">
              Additional Comments:
            <input
                type="text"
                name="comments"
                value={this.state.comments}
                // required
                onChange={this.handleInputChangeFor('comments')}
              />
            </label>
          </div>
          {/* todo - create checkbox to give public use permission */}
          {/* <div>
            <label>
              Is Public:
              <input
                name="is_public"
                type="checkbox"
                checked={this.state.is_public}
                onChange={this.handleInputChangeFor('is_public')} />
            </label>
          </div> */}
          <div>
            <input className="btn" type="submit" name="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Feedback);
