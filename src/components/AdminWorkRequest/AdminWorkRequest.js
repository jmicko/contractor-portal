import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminWorkRequest extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount(){
    this.props.dispatch({ type: 'FETCH_WORK_REQUESTS', payload: this.state });
  }

  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props.store)}</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminWorkRequest);
