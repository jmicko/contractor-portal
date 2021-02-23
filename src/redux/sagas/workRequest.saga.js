import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// send feedback to db
function* sendWorkRequest(action) {
  try {

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/workRequest', action.payload);
    // yield put({ type: 'FETCH_FEEDBACK', });
  } catch (error) {
    console.log('Error with feedback:', error);
  }  
}  


function* workRequestSaga() {
  yield takeLatest('SEND_WORK_REQUEST', sendWorkRequest);
}

export default workRequestSaga;
