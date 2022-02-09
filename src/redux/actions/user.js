import { ACTION_STRING } from "src/redux/actions/actionsString";
import { getDetailUser } from "src/modules/api/user";

export const userDataAction = (token, id) => {
  return {
    type: ACTION_STRING.userData,
    payload: getDetailUser(token, id),
  };
};
