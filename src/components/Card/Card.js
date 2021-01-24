import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './Card.css';

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
