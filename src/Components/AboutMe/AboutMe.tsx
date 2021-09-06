import { ButtonBase, Grid, Link, Paper, Typography } from "@material-ui/core";
import useStyles from "./AboutMeStyles";

export function AboutMe() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={4}>

        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="Emad" src="me.jpg" />
          </ButtonBase>
        </Grid>

        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Typography gutterBottom variant="h3">
              Emad Armoun
            </Typography>
            <Typography variant="h5" gutterBottom>
              Full-stack JavaScript Developer
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <Link href="http://www.EmadArmoun.com">
                www.EmadArmoun.com
              </Link>
            </Typography>
            <Typography variant="body1" color="textSecondary">
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