import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoutes";

export const Routes = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, checking, isLoggedIn]);

  if (checking) {
    return <h3>Cargando...</h3>;
  }
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute isLoggedIn={isLoggedIn} path="/home">
          {" "}
          <h3>Home</h3>{" "}
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
