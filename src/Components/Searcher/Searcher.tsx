import useStyles from "./SearcherStyles";
import useSearch from "./hooks/useSearch";

import { Grid, Paper, InputBase, Divider, IconButton, Typography, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export function Searcher() {
  const classes = useStyles();
  const { doSearch, keyword, searchResult, searchDuration } = useSearch();

  const renderSearchInput = () => (
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

  const renderInitial = () => (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#606060">
          <Typography variant="body1" align="center">
            Please enter a keyword (at least 2 characters) to search for the cities of the Netherlands
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )

  const renderNoResult = () => (
    <Grid container>
      <Grid item xs={12}>
        <Box my={3} color="#A42121">
          <Typography variant="h6" align="center">
            No results found for the "{keyword}" keyword
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )

  const renderSearchResults = () => (
    <Grid container>

      <Grid item xs={12}>
        <Box color="#AAA" my={1.5}>
          <Typography variant="body1" align="center">
            Search process resulted #{searchResult.length} cities in about {searchDuration} ms for "{keyword}" keyword
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} container direction="row">
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            City Name
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Province
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            Population
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
      {
        searchResult && searchResult.map ( (city:any, index: number) => {
          return (
            <Grid key={index} item xs={12} container direction="row" className={classes.row}>
              <Grid item xs={4}>
                <Box fontWeight="900" color="purple">
                  {city.cityName}
                </Box>
              </Grid>
              <Grid item xs={4}>
                {city.province}
              </Grid>
              <Grid item xs={4}>
                <Typography align="center">
                  {city.population}
                </Typography>
              </Grid>
            </Grid>
          )
        })
      }
      </Grid>

    </Grid>
  )

  return (
    <Grid container>
      <Grid item xs={12}>
        {renderSearchInput()}
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.searchResult}>

          { keyword === '' || keyword.length < 2
            ? renderInitial()
            : ! searchResult || searchResult.length === 0
              ? renderNoResult()
              : renderSearchResults()
          }
          
        </Paper>
      </Grid>
    </Grid>
  )
}
