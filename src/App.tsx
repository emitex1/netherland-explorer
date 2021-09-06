import React, { useState } from 'react';
import './App.css';
import { Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import TopBar from './Components/TopBar';
import LeftDrawer from './Components/LeftDrawer';
import useLeftDrawer from './Components/LeftDrawer/LeftDrawerHooks';

function App() {
  const {isDrawerOpen, toggleDrawer} = useLeftDrawer();
  const [pageIndex, setPageIndex] = useState<number>(1);

  return (
    <React.Fragment>
      <CssBaseline />

      <TopBar openDrawer={toggleDrawer} />
      <LeftDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} setPageIndex={setPageIndex} />

      <Container>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              {
                pageIndex === 1
                  ? <span>Search</span>
                  : pageIndex === 2
                    ? <span>Config</span>
                    : <span>About</span>
              }
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
