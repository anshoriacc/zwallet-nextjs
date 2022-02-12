import { combineReducers } from "redux";
import authReducer from "src/redux/reducers/auth";
import userReducer from "src/redux/reducers/user";
import transferReducer from "src/redux/reducers/transfer";
import { ACTION_STRING } from "src/redux/actions/actionsString";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  transfer: transferReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_STRING.authLogout) {
    localStorage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
