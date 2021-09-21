import { Box, Grid, Typography } from "@material-ui/core";
import NoResultMessagePropTypes from "./NoResultMessagePropTypes";
import noResultPhoto from "../../../assets/images/no_result.png";

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

        <img src={noResultPhoto} alt="No Result" style={{width: '100%'}} />
      </Grid>
    </Grid>
  )
}

export default NoResultMessage;
