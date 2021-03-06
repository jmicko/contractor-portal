import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Gallery extends Component {
  state = {
    heading: 'Gallery',
  };

  render() {
    return (
      <div>
        <center>
        <h2>{this.state.heading}</h2>
        <h3>Coming soon!</h3>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Gallery);
