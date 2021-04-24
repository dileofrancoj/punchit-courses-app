import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import { useFetch } from "../../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  margin: {
    marginTop: theme.spacing(2),
  },
}));

const Courses = () => {
  const [courses] = useFetch("courses");
  const classes = useStyles();

  return (
    <Grid container justify="center">
      {courses &&
        courses.length > 0 &&
        courses.map((course) => (
          <Grid xs={3}>
            <Card>
              <CardMedia
                className={classes.media}
                image={`https://shop.punchit.com.ar/images/${course.img_list.valor}`}
              />

              <CardContent>
                <Typography align="center" component="h3">
                  {course.prod_name}
                </Typography>
                <Typography
                  className={classes.margin}
                  variant="p"
                  m={3}
                  align="center"
                  component="p"
                >
                  {course.prod_name}
                </Typography>
                <Button
                  color="primary"
                  className={classes.margin}
                  fullWidth
                  variant="contained"
                >
                  Generar certificado
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Courses;
