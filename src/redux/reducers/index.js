import { combineReducers } from "redux";
import authReducer from "src/redux/reducers/auth";
import userReducer from "src/redux/reducers/user";
import { ACTION_STRING } from "src/redux/actions/actionsString";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_STRING.authLogout) {
    // for all keys defined in your persistConfig(s)
    localStorage.removeItem("persist:root");
    state = undefined;
    return appReducer(state, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
