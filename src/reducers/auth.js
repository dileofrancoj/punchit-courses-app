import { types } from "../types";

const initialState = {
  uid: null,
  displayName: null,
  JWT: null,
};
export const authReducer = (state = initialState, action) => {
  console.log(action.payload?.JWT);
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.basicAuth:
      return {
        uid: null,
        name: action.payload.name,
        JWT: action.payload.JWT,
      };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};
