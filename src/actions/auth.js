import { types } from "../types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const logout = () => ({
  type: types.logout,
});

export const startGoogleAuth = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.error(e);
      });
  };
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};
