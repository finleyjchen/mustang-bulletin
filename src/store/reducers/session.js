import { db } from "../../firebase";

const INITIAL_STATE = {
  authUser: null,
  user: null
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
});

const userConnect = (state, action) => ({
  ...state,
  user: action.user,
});


function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH_USER_SET": {
      return applySetAuthUser(state, action);
    }
    case "USER_CONNECT": {
      return userConnect(state, action);
    }
    default:
      return state;
  }
}


export default sessionReducer;
