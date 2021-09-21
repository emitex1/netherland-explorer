import { Box, Grid, Typography } from "@material-ui/core";
import startPhoto from "../../../assets/images/start.png";

const InitialMessage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#606060">
          <Typography variant="body1" align="center">
            Please enter a keyword (at least 2 characters) to search for the cities of the Netherlands
          </Typography>
        </Box>

        <img src={startPhoto} alt="Start Search" style={{width: '100%'}} />
      </Grid>
    </Grid>
  )
}

export default InitialMessage;
