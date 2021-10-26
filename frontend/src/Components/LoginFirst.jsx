import { Card, CardContent, Grid, Typography } from "@mui/material";

const LoginFirst = () => {
  return (
    <Grid container height="80vh" justifyContent="center" alignItems="center">
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h6">Please Login First</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginFirst;
