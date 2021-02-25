import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import WorkRequestItem from '../WorkRequestItem/WorkRequestItem';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AdminWorkRequest extends Component {
  state = {
    heading: 'Work Requests',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_WORK_REQUESTS', payload: this.state });
  }

  render() {
    return (
      <div>
        {/* <p>{JSON.stringify(this.props.store)}</p> */}
        <center>
          <h2>{this.state.heading}</h2>
        </center>

        {this.props.store.workRequest.map((workRequestItem) => {
          return (
            <div>
              <WorkRequestItem
                key={workRequestItem.id}
                parent='FeedbackReview'
                workRequestItem={workRequestItem}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminWorkRequest);
