import { ACTION_STRING } from "src/redux/actions/actionsString";
import { login } from "src/modules/api/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body),
  };
};

export const logoutAction = (userData) => {
  return {
    type: ACTION_STRING.authLogout,
    payload: { userData },
  };
};
