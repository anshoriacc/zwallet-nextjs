// import { ActionType } from "redux-promise-middleware";

import { ACTION_STRING } from "src/redux/actions/actionsString";

const initialState = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    image: null,
    noTelp: "",
    balance: "",
  },
};

const userReducer = (prevState = initialState, action) => {
  console.log("inside userReducer");
  const { userData } = ACTION_STRING;

  switch (action.type) {
    case userData:
      const data = action.payload.data;
      return {
        ...prevState,
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        email: data.data.email,
        image: data.data.image,
        noTelp: data.data.noTelp,
        balanca: data.data.balance,
      };
    default:
      return prevState;
  }
};

export default userReducer;
