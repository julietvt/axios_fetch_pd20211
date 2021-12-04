import ACTION_TYPES from './../actions/actionsTypes';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function usersLoaderReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    //GET
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users: users,
      };
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    //CREATE
    case ACTION_TYPES.CREATE_USERS_SUCCESS: {
      const { user } = action;
      const { users } = state;
      const newUsers = [...users, user];
      return {
        ...state,
        isFetching: false,
        users: newUsers,
      };
    }
    //DELETE
    case ACTION_TYPES.DELETE_USERS_SUCCESS: {
      const { user } = action;
      const { users } = state;
      const newUsers = [...users];
      newUsers.splice(
        newUsers.findIndex((u) => u.id === user.id),
        1
      );
      return {
        ...state,
        isFetching: false,
        users: newUsers,
      };
    }
    default:
      return state;
  }
}

export default usersLoaderReducer;
