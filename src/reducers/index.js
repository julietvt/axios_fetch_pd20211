import { combineReducers } from 'redux';
import usersLoaderReducer from './usersLoaderReducer';

const rootReducer = combineReducers({
  user: usersLoaderReducer,
});

export default rootReducer;
