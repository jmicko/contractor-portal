import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminWorkRequest from '../AdminWorkRequest/AdminWorkRequest';
import ClientWorkRequest from '../ClientWorkRequest/ClientWorkRequest'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class TemplateClass extends Component {
  // todo - add type of work 
  // -need to fill out "work_type" table, or provide admin ability to do so
  // todo - add checkbox for weekends okay
  // -need to figure out how to save checkbox state
  state = {

  };

  render() {
    return (
      this.props.store.user.is_admin
        ?
        <AdminWorkRequest />
        :
        <ClientWorkRequest />
    );
  }
}

export default connect(mapStoreToProps)(TemplateClass);
