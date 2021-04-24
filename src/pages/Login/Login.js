import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import {
  Container,
  Button,
  Grid,
  InputLabel,
  Input,
  FormControl,
} from "@material-ui/core";

import { useAuth } from "../../hooks/useAuth";

import Box from "@material-ui/core/Box";

import { startGoogleAuth } from "../../actions/auth";
import { types } from "../../types";

const Login = () => {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };

  const basicLogin = async (e) => {
    e.preventDefault();
    const [{ value: mail }, { value: password }] = e.target.elements;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { JWT } = await auth({
      mail,
      password,
    });
    console.log("JWT: ", JWT);
    const { nombre: name } = jwt_decode(JWT);
    dispatch({ type: types.basicAuth, payload: { JWT, name } });
    history.push("/courses");
  };

  return (
    <Container style={{ height: "100vh", display: "flex" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4} alignItems="center">
          <form onSubmit={basicLogin}>
            <Box>
              <FormControl fullWidth>
                <InputLabel htmlFor="mail">Correo *</InputLabel>
                <Input placeholder="mail@example.com" />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth m={2}>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <Input placeholder="*******" />
              </FormControl>
            </Box>
            <Box mt={3} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Inicia sesión
              </Button>
            </Box>
          </form>
          <Box mt={1} textAlign="center">
            <Button
              variant="contained"
              onClick={handleGoogleAuth}
              color="primary"
            >
              Iniciar sesión con Google🥊
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
