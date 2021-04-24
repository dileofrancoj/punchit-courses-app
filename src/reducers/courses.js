import { types } from "../types";

const initialState = {
  courses: [],
  course: {},
};

export const coursesReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.setCourses:
      return {
        courses: action.payload.courses,
      };

    case types.getCourses:
      return {
        courses: state.courses,
      };

    default:
      return state;
  }
};
