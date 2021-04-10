import { types } from "../types";

const initialState = {
  uid: null,
  displayName: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return initialState;

    default:
      return state;
  }
};
