import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// send work request to db
function* sendWorkRequest(action) {
  try {

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/workRequest', action.payload);
    // yield put({ type: 'FETCH_FEEDBACK', });
  } catch (error) {
    console.log('Error with send work request saga:', error);
  }  
}  


// get work request from db
function* fetchWorkRequests() {
  try {
    console.log('fetching work request, saga stage');
    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.get('/api/workRequest');
    // yield put({ type: 'FETCH_FEEDBACK', });
  } catch (error) {
    console.log('Error with fetch work request saga:', error);
  }  
}  


function* workRequestSaga() {
  yield takeLatest('SEND_WORK_REQUEST', sendWorkRequest);
  yield takeLatest('FETCH_WORK_REQUESTS', fetchWorkRequests);
}

export default workRequestSaga;
