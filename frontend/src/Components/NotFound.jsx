import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Grid container height="80vh" justifyContent="center" alignItems="center">
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h6">Page not found</Typography>
            <br />
            <NavLink to="/" exact>
              <Button variant="contained" color="primary">
                Home
              </Button>
            </NavLink>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotFound;
