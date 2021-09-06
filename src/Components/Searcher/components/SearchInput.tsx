import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "../SearcherStyles";
import SearchInputPropTypes from "./SearchInputPropTypes";

const SearchInput = (props: SearchInputPropTypes) => {
  const { doSearch } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="Enter city name here"
        inputProps={{ 'aria-label': 'Search Keyword' }}
        onChange={(e) => {doSearch(e.target.value)}}
      />

      <Divider className={classes.divider} orientation="vertical" />

      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

export default SearchInput;
