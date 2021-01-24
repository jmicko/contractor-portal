import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Feedback from "../Feedback/Feedback";
import ContactPage from "../ContactPage/ContactPage";
import WorkRequest from "../WorkRequest/WorkRequest";
import History from "../History/History";
import Blog from "../Blog/Blog";
import Gallery from "../Gallery/Gallery";

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header-main">
            <h1>Cohen & Sons Lumber Manipulation</h1>
          </div>
          <Nav />
          <div className="container">
            
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/blog will show the blog page. */}
              <Route
                // shows Blog at all times (logged in or not)
                exact
                path="/blog"
                component={Blog}
                />
              {/* Visiting localhost:3000/gallery will show the gallery page. */}
              <Route
                // shows gallery at all times (logged in or not)
                exact
                path="/gallery"
                component={Gallery}
                />

              {/* Visiting localhost:3000/contact will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/contact"
                component={ContactPage}
                />

              {/* Visiting localhost:3000/feedback will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/workrequest"
                component={WorkRequest}
                />

              {/* Visiting localhost:3000/feedback will show the about page. */}
              <ProtectedRoute
                // shows AboutPage at all times (logged in or not)
                exact
                path="/feedback"
                component={Feedback}
                />

              {/* Visiting localhost:3000/feedback will show the about page. */}
              <ProtectedRoute
                // shows AboutPage at all times (logged in or not)
                exact
                path="/history"
                component={History}
                />
              {/* When a value is supplied for the authRedirect prop the user will
                be redirected to the path supplied when logged in, otherwise they will
              be taken to the component and path supplied. */}
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/home"
                // - else shows LoginPage at /login
                exact
                path="/login"
                component={LoginPage}
                authRedirect="/home"
                />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/home"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/home"
                />
              <Route
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LandingPage}
                />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
