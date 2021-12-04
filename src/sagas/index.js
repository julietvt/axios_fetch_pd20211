import ACTION_TYPES from '../actions/actionsTypes';
import { takeLatest } from 'redux-saga/effects';
import { getUsersSaga } from './usersSaga';
function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga);
}

export default rootSaga;
