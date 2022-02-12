import { ACTION_STRING } from "src/redux/actions/actionsString";

export const updateUserData = (data) => {
  return {
    type: ACTION_STRING.userData,
    payload: { data },
  };
};
