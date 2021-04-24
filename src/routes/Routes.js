import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loading from "./../components/Loading";
import Login from "../pages/Login";
import { login } from "../actions/auth";
import { types } from "../types/";
import { PrivateRoute } from "./PrivateRoutes";
import Courses from "../pages/Courses";

export const Routes = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const verifyFirebaseAuth = useCallback(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        return true;
      } else {
        return false;
      }
    });
  }, [dispatch]);

  const verifyCommonAuth = useCallback(() => {
    if (localStorage.getItem("userAuth")) {
      dispatch({
        type: types.basicAuth,
        payload: { JWT: localStorage.getItem("userAuth"), name: "test" },
      });

      return true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (verifyCommonAuth() || verifyFirebaseAuth()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setChecking(false);
  }, [verifyCommonAuth, verifyFirebaseAuth, isLoggedIn]);

  if (checking) return <Loading />;
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute
          isLoggedIn={isLoggedIn}
          path="/courses"
          Component={Courses}
        ></PrivateRoute>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
