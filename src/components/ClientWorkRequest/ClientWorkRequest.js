import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ClientWorkRequest extends Component {
  state = {
    project_name: '',
    description: '',
    location: '',
    dimensions: '',
    image_url: '',
    phone: '',
    email: '',
    best_time_to_call: '',
    weekends_okay: '',
  };


  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };


  render() {
    return (
      <div>
        <form className="formPanel" onSubmit={this.sendFeedback}>
          <h2>Send a request for work</h2>
          <div>
            <label htmlFor="project_name">
              Project name:
            <input
                type="text"
                name="project_name"
                value={this.state.project_name}
                placeholder="First Name"
                required
                onChange={this.handleInputChangeFor('project_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description of work:
          <textarea
                type="text"
                name="description"
                value={this.state.description}
                // required
                onChange={this.handleInputChangeFor('description')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="location">
              Location:
            <input
                type="text"
                name="location"
                value={this.state.location}
                placeholder="(Optional) - City where the work will take place"
                onChange={this.handleInputChangeFor('location')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="dimensions">
              Dimensions:
            <input
                type="text"
                name="dimensions"
                value={this.state.dimensions}
                placeholder="(Optional) - What is the scale of the project?"
                onChange={this.handleInputChangeFor('dimensions')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="image_url">
              Image URL:
            <input
                type="text"
                name="image_url"
                value={this.state.image_url}
                onChange={this.handleInputChangeFor('image_url')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number:
            <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="best_time_to_call">
              Best time to call:
            <input
                type="text"
                name="best_time_to_call"
                value={this.state.best_time_to_call}
                onChange={this.handleInputChangeFor('best_time_to_call')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
            <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
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

export default connect(mapStoreToProps)(ClientWorkRequest);
