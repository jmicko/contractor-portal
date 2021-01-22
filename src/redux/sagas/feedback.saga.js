import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// get all feedback from db
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

// send feedback to db
function* sendFeedback(action) {
  try {

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };  

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/forms/clientFeedback', action.payload, config);
    // do a put thing to fetch the stuff right after so it shows up on the same page.
    // because nothing is telling it to get the new data. 
    // Can remove this later once I have split the components
    yield put({ type: 'FETCH_FEEDBACK', });
  } catch (error) {
    console.log('Error with feedback:', error);
  }  
}  

// toggle the visibility of feedback items on the home page
function* updateFeedback(action) {
  try {
    const config = {
      headers: { 
        'Content-Type': 'application/json',
        'feedbackid': action.payload,
       }, 
      withCredentials: true, 
    };  

    console.log('=========== IN UPDATE SAGA', action.payload);

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.put('/api/forms/feedbackReview', config);
    // do a put thing to fetch the stuff right after so it shows up on the same page.
    // because nothing is telling it to get the new data. 
    // Can remove this later once I have split the components
    yield put({ type: 'FETCH_FEEDBACK', });
  } catch (error) {
    console.log('Error with feedback:', error);
  }  
}  

// delete a feedback item
function* deleteFeedback(action) {
  try {
    const config = {
      headers: { 
        'Content-Type': 'application/json',
        'feedbackid': action.payload,
       },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // if a user is logged in
    // it will send the feedback items
    yield axios.delete('/api/forms/feedbackReview', config);
    // console.log('THIS SHOULD BE FEEDBACK ITEMS', response.data.rows);

    // refresh feedback reducer
    yield put({ type: 'FETCH_FEEDBACK'});
  } catch (error) {
    console.log('Feedback delete request failed', error);
  }
}

function* loginSaga() {
  yield takeLatest('SEND_FEEDBACK', sendFeedback);
  yield takeLatest('FETCH_FEEDBACK', fetchFeedback);
  yield takeLatest('DELETE_FEEDBACK', deleteFeedback);
  yield takeLatest('UPDATE_FEEDBACK', updateFeedback);
}

export default loginSaga;
