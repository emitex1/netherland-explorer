import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ConfigIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Person';
import useStyles from "./BottomNavBarStyles";

export const BottomNavBar = () => {
  const [value, setValue] = useState();
  const classes = useStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
          setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Config" icon={<ConfigIcon />} />
      <BottomNavigationAction label="About" icon={<AboutIcon />} />
    </BottomNavigation>
  )
}
