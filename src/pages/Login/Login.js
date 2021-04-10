import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";
import { startGoogleAuth, startGoogleLogout } from "../../actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <>
      <Button variant="contained" onClick={handleGoogleAuth} color="primary">
        Inicia sesión con Google 🥊
      </Button>
      <Button variant="contained" onClick={handleLogout} color="primary">
        🥊Logout 🥊
      </Button>
    </>
  );
};

export default Login;
