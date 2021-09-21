import React, { useState } from 'react';
import './App.css';

/** Components */
import { Container, CssBaseline, Grid, Hidden, Typography } from '@material-ui/core';
import TopBar from './Components/TopBar';
import LeftDrawer from './Components/LeftDrawer';
import BottomNavBar from './Components/BottomNavBar';
import Searcher from './Containers/Searcher';
import AboutMe from './Containers/AboutMe';

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
              pageIndex === 0
                ? <Searcher />
                : pageIndex === 1
                  ? (
                    <>
                      <Typography variant="h2" align="center">Configuration</Typography>
                      <Typography variant="h5" align="center">Coming soon</Typography>
                    </>
                  )
                  : <AboutMe />
            }
          </Grid>
        </Grid>
      </Container>

      <Hidden smUp>
        <BottomNavBar pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Hidden>

    </React.Fragment>
  );
}

export default App;
