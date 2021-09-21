import { ButtonBase, Grid, Link, Paper, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./AboutMeStyles";
import mePhoto from "../../assets/images/me.jpg";

export function AboutMe() {
  const classes = useStyles();

  const theme = useTheme();
  const mobileMatches = useMediaQuery(theme.breakpoints.down('xs'));
  const properAlign = mobileMatches ? "center" : undefined;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={4} container justifyContent={properAlign}>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="Emad" src={mePhoto} />
          </ButtonBase>
        </Grid>

        
        <Grid item xs={12} sm={8} container>
          <Grid item xs container direction="column" spacing={2}>

            <Typography gutterBottom variant="h3" align={properAlign}>
              Emad Armoun
            </Typography>
            <Typography variant="h5" gutterBottom align={properAlign}>
              Full-stack JavaScript Developer
            </Typography>
            <Typography variant="body1" color="textSecondary" align={properAlign}>
              <Link href="http://www.EmadArmoun.com" target="_blank">
                www.EmadArmoun.com
              </Link>
            </Typography>
            <Typography variant="body1" color="textSecondary" align={properAlign}>
              <Link href="mailto:Emad.Armoun@gmail.com">
                Emad.Armoun@gmail.com
              </Link>
            </Typography>

          </Grid>
        </Grid>

      </Grid>
    </Paper>
  )
}