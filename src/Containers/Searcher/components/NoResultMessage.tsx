import { Box, Grid, Typography } from "@material-ui/core";
import NoResultMessagePropTypes from "./NoResultMessagePropTypes";

const NoResultMessage = (props: NoResultMessagePropTypes) => {
  const {keyword} = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#A42121">
          <Typography variant="h6" align="center">
            No results found for the "{keyword}" keyword
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default NoResultMessage;
