import React, { useState } from 'react';
import './App.css';

/** Components */
import { Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import TopBar from './Components/TopBar';
import LeftDrawer from './Components/LeftDrawer';
import AboutMe from './Components/AboutMe';

/** Hooks */
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
            {
              pageIndex === 1
                ? <Typography variant="h2" align="center">Search</Typography>
                : pageIndex === 2
                  ? <Typography variant="h2" align="center">Config</Typography>
                  : <AboutMe />
            }
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
