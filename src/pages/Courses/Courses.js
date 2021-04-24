import { useDispatch } from "react-redux";

import { useFetch } from "../../hooks/useFetch";
import { types } from "./../../types";

const Courses = () => {
  const dispatch = useDispatch();
  const [courses] = useFetch("courses");
  dispatch({ type: types.setCourses, payload: { courses } });
  return <h3>Courses</h3>;
};

export default Courses;
