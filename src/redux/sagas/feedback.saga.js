import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* sendFeedback(action) {
  try {
    // clear any existing error on the login page
    // yield put({ type: 'CLEAR_LOGIN_ERROR' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/forms/clientFeedback', action.payload, config);
  } catch (error) {
    console.log('Error with feedback:', error);
    if (error.response.status === 401) {
      // todo - adjust these errors so they aren't about login
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the email and password don't match in the database
      yield put({ type: 'LOGIN_FAILED' });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
  }
}

// worker Saga: will be fired on "LOGOUT" actions
function* fetchFeedback(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // if a user is logged in
    // it will send the feedback items
    const response = yield axios.get('/api/forms/feedbackReview', config);
    console.log('THIS SHOULD BE FEEDBACK ITEMS', response.data.rows);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'SET_FEEDBACK', payload: response.data.rows });
  } catch (error) {
    console.log('Feedback get request failed', error);
  }
}

function* loginSaga() {
  yield takeLatest('SEND_FEEDBACK', sendFeedback);
  yield takeLatest('FETCH_FEEDBACK', fetchFeedback);
}

export default loginSaga;
