import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// send work request to db
function* sendWorkRequest(action) {
  try {

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/workRequest', action.payload);
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
    const response = yield axios.get('/api/workRequest');
    console.log('response from server', response.data);
    yield put({ type: 'SET_WORK_REQUESTS', payload: response.data.rows });
  } catch (error) {
    console.log('Error with fetch work request saga:', error);
  }  
}  


function* workRequestSaga() {
  yield takeLatest('SEND_WORK_REQUEST', sendWorkRequest);
  yield takeLatest('FETCH_WORK_REQUESTS', fetchWorkRequests);
}

export default workRequestSaga;
