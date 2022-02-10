import { ACTION_STRING } from "src/redux/actions/actionsString";
import { getDetailUser } from "src/modules/api/user";

export const updateUserData = (data) => {
  return {
    type: ACTION_STRING.userData,
    payload: { data },
  };
};
