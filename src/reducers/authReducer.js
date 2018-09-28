import { EMAIL_CHANGED } from "../acions/types";

const InitialState = {
  email: ""
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
