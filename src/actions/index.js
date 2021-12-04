import ACTION_TYPES from './actionsTypes';

//GET

export const getUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
});

export const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users: users,
});

export const getUsersError = (error) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: error,
});

// CREATE

export const createUsersAction = (user) => ({
  type: ACTION_TYPES.CREATE_USERS_ACTION,
  user: user,
});

export const createUsersRequest = () => ({
  type: ACTION_TYPES.CREATE_USERS_REQUEST,
});

export const createUsersSuccess = (user) => ({
  type: ACTION_TYPES.CREATE_USERS_SUCCESS,
  user: user,
});

export const createUsersError = (error) => ({
  type: ACTION_TYPES.CREATE_USERS_ERROR,
  error: error,
});

// DELETE

export const deleteUsersAction = (id) => ({
  type: ACTION_TYPES.DELETE_USERS_ACTION,
  id: id,
});

export const deleteUsersRequest = () => ({
  type: ACTION_TYPES.DELETE_USERS_REQUEST,
});

export const deleteUsersSuccess = (user) => ({
  type: ACTION_TYPES.DELETE_USERS_SUCCESS,
  user: user,
});

export const deleteUsersError = (error) => ({
  type: ACTION_TYPES.DELETE_USERS_ERROR,
  error: error,
});
