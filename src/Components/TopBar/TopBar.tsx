import React from 'react';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TopBarPropTypes from './TopBarPropTypes';
import useStyles from './TopBarStyles';
import logoImage from "../../assets/images/logo.png";

export function TopBar(props: TopBarPropTypes) {
  const classes = useStyles();
  const {openDrawer} = props;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => openDrawer()}>
            <MenuIcon />
          </IconButton>

          <Grid container alignItems="center" spacing={2}>

            <Grid item>
              <Avatar alt="Logo" src={logoImage} className={classes.white} />
            </Grid>

            <Grid item>
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
