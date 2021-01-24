import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">

      <Link to="/home">
        <h2 className="nav-title">Home</h2>
      </Link>
      <div className="nav-center">


        {/* I LIKE THIS IDEA AND MIGHT USE IT LATER, BUT JUST SAVING IT HERE FOR NOW */}

        {/* <Link className="nav-link" to={loginLinkData.path}> */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
          {/* {loginLinkData.text} */}
        {/* </Link> */}
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/Blog">
          Blog
        </Link>
        {/* Show the contact page */}
        {/* todo - redirect to login if not logged in */}
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
      </div>
      <div className="nav-right">
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id
            ?<LogOutButton className="nav-link" />
            :<Link className="nav-link" to="/login">
              Log In
            </Link>
        }
        </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
