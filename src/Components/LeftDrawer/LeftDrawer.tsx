import React from 'react';
import LeftDrawerPropTypes from './LeftDrawerPropTypes';
import useStyles from './LeftDrawerStyles';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Avatar, Box, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ConfigIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Person';

export function LeftDrawer(props: LeftDrawerPropTypes) {
  const {isOpen, toggleDrawer, setPageIndex} = props;
  const classes = useStyles();

  const innerToggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    toggleDrawer();
  };

  const renderHead = () => (
    <Box display="flex" flexDirection="column" flexGrow={1} justifyContent="center" alignItems="center">
      <Avatar alt="Logo" src="android-chrome-192x192.png" className={classes.large} variant="square" />

      <Typography variant="h4" align="center">
        Netherland Explorer
      </Typography>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={innerToggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={innerToggleDrawer(false)}
        onKeyDown={innerToggleDrawer(false)}
      >
        {renderHead()}

        <Divider />

        <List>
          <ListItem button onClick={() => setPageIndex(1)}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>

          <ListItem button onClick={() => setPageIndex(2)}>
            <ListItemIcon><ConfigIcon /></ListItemIcon>
            <ListItemText primary="Config" />
          </ListItem>

          <ListItem button onClick={() => setPageIndex(3)}>
            <ListItemIcon><AboutIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}