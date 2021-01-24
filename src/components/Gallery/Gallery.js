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
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Gallery);
