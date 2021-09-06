import { useState } from "react";
import useStyles from "./SearcherStyles";

import { Grid, Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export function Searcher() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper component="form" className={classes.root}>

          <InputBase
            className={classes.input}
            placeholder="Enter city name here"
            inputProps={{ 'aria-label': 'Search Keyword' }}
            onChange={(e) => {handleSearch(e.target.value)}}
          />

          <Divider className={classes.divider} orientation="vertical" />

          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>

        </Paper>
      </Grid>

      <Grid item xs={12}>
        search results: {keyword}
      </Grid>
    </Grid>
  )
}
