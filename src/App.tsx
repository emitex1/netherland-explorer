import React from 'react';
import './App.css';
import { AppBar, Avatar, Container, CssBaseline, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  white: {
    backgroundColor: '#FFF'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

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

      <Container>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              The Netherland Explorer
            </Typography>
          </Grid>

          <Grid xs={12} sm={6}>
            <Typography align="center">
              Search Filters 1
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Typography align="center">
              Search Filters 2
            </Typography>
          </Grid>

          <Grid xs={12}>
            <Typography variant="subtitle1" align="center">
              Search Results
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
