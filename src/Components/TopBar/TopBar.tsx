import React from 'react';
import { AppBar, Avatar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    white: {
      backgroundColor: '#FFF'
    }
}))

export function TopBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Grid container alignItems="center" spacing={2}>

            <Grid item>
              <Avatar alt="Logo" src="favicon-32x32.png" className={classes.white} />
            </Grid>

            <Grid item alignItems="center">
              <Typography variant="h6" color="inherit" align="center">
                Netherland Explorer
              </Typography>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
