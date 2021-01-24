import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './Card.css';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Card(props) {

  return (
    <Link to={`/${props.nav}`}
      className={`contact-card`}
    >
      <div className='card-icon'>
        <img src={props.icon} alt={props.iconText} />
      </div>
      <h2>
        {props.navText}
      </h2>
    </Link>
  );
}

export default withRouter(connect(mapStoreToProps)(Card));
