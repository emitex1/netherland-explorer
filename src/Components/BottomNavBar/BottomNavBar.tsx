import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ConfigIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Person';
import useStyles from "./BottomNavBarStyles";
import BottomNavBarPropTypes from "./BottomNavBarPropTypes";

export const BottomNavBar = (props: BottomNavBarPropTypes) => {
  const classes = useStyles();
  const {pageIndex, setPageIndex} = props;

  return (
    <BottomNavigation
      value={pageIndex}
      onChange={(event, newValue) => {
        setPageIndex(newValue)
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
