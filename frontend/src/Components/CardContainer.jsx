import { Card, CardContent, Grid, Typography } from "@mui/material";

const CardContainer = ({ value }) => {
  return (
    <Grid container height="80vh" justifyContent="center" alignItems="center">
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h6">{value}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardContainer;
